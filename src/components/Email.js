import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Email = () => {
    const [email, setEmail] = useState("");

    const addEmail = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "emails"), {
                email,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
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
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className="btn btn-primary">
                Join waitlist
            </button>
        </form>
    );
};

export default Email;
