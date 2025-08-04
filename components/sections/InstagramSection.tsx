// components/sections/InstagramSection.tsx
import React, { useEffect, useRef } from "react";
import styles from "../../styles/sections/InstagramSection.module.css";
import { Button } from "../../components/ui/button";

export default function InstagramSection() {
    // 1) Ref do blockquote com o tipo correto
    const blockquoteRef = useRef<HTMLBlockQuoteElement>(null);

    useEffect(() => {
        // 2) Injeta o script oficial do Instagram
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
            const instgrm = (window as any).instgrm;
            if (instgrm && blockquoteRef.current) {
                instgrm.Embeds.process();
            }
        };
        // opcional: cleanup
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Siga no Instagram</h2>
            <p className={styles.text}>Acompanhe novidades, bastidores e eventos!</p>
            <a
                href="https://www.instagram.com/chambarilefeijoadajoao"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <Button className={styles.button}>@chambarilefeijoadajoao</Button>
            </a>
            <blockquote
                ref={blockquoteRef}
                className={`instagram-media ${styles.embed}`}
                data-instgrm-permalink="https://www.instagram.com/chambarilefeijoadajoao"
                data-instgrm-version="14"
                style={{ width: "100%" }}
            ></blockquote>
        </section>
    );
}
