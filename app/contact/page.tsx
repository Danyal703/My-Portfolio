"use client";

import styles from "./contact.module.css";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contact Me</h1>
            <p className={styles.contactInfo}>
                Feel free to reach out via email:
                <br />
                <a className={styles.email} href="mailto:danyaljamshed.dev@gmail.com">
                    danyaljamshed.dev@gmail.com
                </a>
            </p>
        </div>
    );
}