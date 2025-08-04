import React from "react";
import styles from "../../styles/sections/MenuSection.module.css";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const menuItems = ["Feijoada", "Chambaril", "Carne de sol", "Petiscos"];

export default function MenuSection() {
    return (
        <section className={styles.menuSection}>
            <h2 className={styles.heading}>Cardápio</h2>
            <div className={styles.grid}>
                {menuItems.map((item) => (
                    <Card key={item} className={styles.card}>
                        <div className={styles.imagePlaceholder} />
                        <h3 className={styles.title}>{item}</h3>
                        <Button className={styles.button}>
                            Ver Cardápio
                        </Button>
                    </Card>
                ))}
            </div>
        </section>
    );
}
