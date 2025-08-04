import React from "react";
import styles from "../../styles/sections/HeroSection.module.css";
import { Button } from "../../components/ui/button";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Chambaril e Feijoada do João</h1>
            <p className={styles.subtitle}>
                Sabor regional do Nordeste no coração do Ipsep, Recife
            </p>
            <Button className={styles.cta}>Ver Cardápio</Button>
         </section>
     );
}
