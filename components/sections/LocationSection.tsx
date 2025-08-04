import React from "react";
import styles from "../../styles/sections/LocationSection.module.css";

export default function LocationSection() {
    return (
        <section className={styles.locationSection}>
            <h2 className={styles.heading}>Nossa Localização</h2>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8036!2d-34.8970482!3d-8.1159124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18c07d262aa77%3A0xfae34b8bdcd73664!2sChambaril%20e%20Feijoada%20do%20Jo%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1621875123456"
                    className={styles.map}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}