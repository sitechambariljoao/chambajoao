// components/sections/EventsSection.tsx
import React from "react";
import styles from "../../styles/sections/EventsSection.module.css";
import { Button } from "../../components/ui/button";

export default function EventsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.background} />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h2 className={styles.title}>Espaço para Eventos no 1º Andar</h2>
                <Button className={styles.button}>Reserve Aqui</Button>
            </div>
        </section>
    );
}
