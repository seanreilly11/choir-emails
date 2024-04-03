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
        <section className="todo-container">
            <form onSubmit={addEmail}>
                <div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="btn-container">
                    <button type="submit" className="btn">
                        Join waitlist
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Email;
