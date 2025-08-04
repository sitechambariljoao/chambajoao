import React from "react";
import styles from "../../styles/sections/GallerySection.module.css";

const images = [
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria4.jpg",
    "/galeria5.jpg",
    "/galeria6.jpg",
];

export default function GallerySection() {
    return (
        <section className={styles.gallerySection}>
            <h2 className={styles.heading}>Galeria de Eventos</h2>
            <div className={styles.grid}>
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Evento ${i + 1}`}
                        className={styles.image}
                    />
                ))}
            </div>
        </section>
    );
}
