import Head from "next/head";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InstagramEmbed } from "react-social-media-embed";

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

      <main className="bg-[#fdf5e6] text-[#531010]">
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl font-bold mb-4">Chambaril e Feijoada do João</h1>
          <p className="text-lg mb-6">Sabor regional do Nordeste no coração do Ipsep, Recife</p>
          <Button className="bg-[#b02727] text-white rounded-xl px-6 py-3">Ver Cardápio</Button>
        </section>

        {/* Sobre */}
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Sobre o Restaurante</h2>
          <p>
            Fundado em 1982, especializado na cozinha regional nordestina com destaque para o chambaril, feijoada,
            carne de sol e petiscos caseiros.
          </p>
        </section>

        {/* Cardápio */}
        <section className="py-12 px-6 bg-[#fff7e0]">
          <h2 className="text-2xl font-bold mb-6 text-center">Cardápio</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["Feijoada", "Chambaril", "Carne de sol", "Petiscos"].map((item, idx) => (
              <Card key={idx} className="p-4 text-center">
                <div className="h-24 w-full bg-gray-300 mb-2"></div>
                <h3 className="font-semibold text-lg">{item}</h3>
                <Button variant="outline" className="mt-2 text-[#b02727]">Ver Cardápio</Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Espaço para Eventos */}
        <section className="py-12 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Espaço para Eventos (1º Andar)</h2>
          <p className="mb-6">
            Ambiente climatizado, ideal para festas familiares, aniversários e encontros empresariais.
          </p>
          <a
            href="https://wa.me/5581999999999?text=Olá! Gostaria de reservar o espaço de eventos."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#fbbf24] text-[#531010] px-6 py-2 rounded-xl">Solicitar Reserva via WhatsApp</Button>
          </a>
        </section>

        {/* Galeria */}
        <section className="py-12 px-6 bg-[#fffaf0]">
          <h2 className="text-2xl font-bold mb-6 text-center">Galeria de Eventos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["galeria1.jpg", "galeria2.jpg", "galeria3.jpg", "galeria4.jpg", "galeria5.jpg", "galeria6.jpg"].map((src, i) => (
              <img key={i} src={`/${src}`} alt={`Evento ${i + 1}`} className="h-40 object-cover rounded-lg" />
            ))}
          </div>
        </section>

        {/* Instagram */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Siga no Instagram</h2>
          <p className="mb-4">Acompanhe novidades, bastidores e eventos!</p>
          <a
            href="https://www.instagram.com/chambarilefeijoadajoao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#b02727] text-white px-6 py-2 rounded-xl">@chambarilefeijoadajoao</Button>
          </a>
          <div className="flex justify-center mt-6">
            <InstagramEmbed url="https://www.instagram.com/p/Cm0xIuSPUHE/" width={328} />
          </div>
        </section>

        {/* Rodapé */}
        <footer className="bg-[#531010] text-white text-center py-6">
          <p>© {new Date().getFullYear()} Chambaril e Feijoada do João - Ipsep, Recife</p>
        </footer>
      </main>
    </>
  );
}