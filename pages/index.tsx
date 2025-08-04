import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import MenuSection from "../components/sections/MenuSection";
import EventsSection from "../components/sections/EventsSection";
import GallerySection from "../components/sections/GallerySection";
import InstagramSection from "../components/sections/InstagramSection";
import LocationSection from "../components/sections/LocationSection";
import Footer from "../components/sections/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Chambaril e Feijoada do João - Ipsep, Recife</title>
                <meta name="description" content="Restaurante regional com cardápio nordestino e espaço para eventos no bairro do Ipsep, Recife." />
                <meta name="keywords" content="chambaril, feijoada, restaurante, nordeste, Recife, Ipsep, eventos, comida regional" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <HeroSection />
                <AboutSection />
                <MenuSection />
                <EventsSection />
                <GallerySection />
                <InstagramSection />
                <LocationSection />
                <Footer />
            </main>
        </>
    );
}