import React from "react";
import styles from "../../styles/sections/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © {new Date().getFullYear()} Chambaril e Feijoada do João - Ipsep,
                Recife
            </p>
        </footer>
    );
}
