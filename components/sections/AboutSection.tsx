import React from "react";
import styles from "../../styles/sections/AboutSection.module.css";

export default function AboutSection() {
    return (
        <section className={styles.about}>
            <h2 className={styles.heading}>Sobre o Restaurante</h2>
            <p>
                Fundado em 1982, especializado na cozinha regional nordestina com destaque
                para o chambaril, feijoada, carne de sol e petiscos caseiros.
            </p>
        </section>
    );
}
