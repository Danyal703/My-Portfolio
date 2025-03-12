"use client";
import { useState, useEffect } from "react";
import { auth, provider } from "@/app/lib/firebase"; 
import { Auth, GoogleAuthProvider, onAuthStateChanged as firebaseOnAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth"; // Import necessary functions and types
import styles from "./auth.module.css"; // Import styles

export default function AuthPage() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = firebaseOnAuthStateChanged(auth, (currentUser: User | null) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const signIn = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName ? user.displayName : "User"}</h2>
                    <button className={styles.button} onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button className={styles.button} onClick={signIn}>Sign in with Google</button>
            )}
        </div>
    );
}
