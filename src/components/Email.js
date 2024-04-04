import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Email = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailAdded, setEmailAdded] = useState(false);

    const addEmail = async (e) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        try {
            await addDoc(collection(db, "emails"), {
                email,
            });
            setEmail("");
            setLoading(false);
            setEmailAdded(true);
            setTimeout(() => setEmailAdded(false), 10000);
        } catch (e) {
            console.error("Error adding document: ", e);
            setLoading(false);
        }
    };

    const fetchPost = async () => {
        await getDocs(collection(db, "emails")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            console.log(newData.map((data) => data.email));
        });
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <form onSubmit={addEmail}>
            <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="d-flex align-items-center">
                <button type="submit" className="btn btn-primary ">
                    Join waitlist{" "}
                    {loading && (
                        <div
                            className="spinner-border spinner-border-sm ms-2"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                </button>
                {emailAdded && (
                    <div className="ms-3">
                        <span>You have been added to the waitlist!</span>
                    </div>
                )}
            </div>
        </form>
    );
};

export default Email;
