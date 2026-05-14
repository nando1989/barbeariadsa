'use client'

import MyImage from "@/assets/top.webp"
import MyProfile from "@/assets/profile.webp"
import MainClient from "@/assets/main.webp"
import V1 from "@/assets/1.webp"
import V2 from "@/assets/2.webp"
import V3 from "@/assets/3.webp"
import V4 from "@/assets/4.webp"
import V5 from "@/assets/5.webp"
import V6 from "@/assets/6.webp"
import V7 from "@/assets/7.webp"
import V8 from "@/assets/8.webp"
import { Montserrat } from "next/font/google"
import SliderClient from '@/components/autoSlide/autoSlideClient'
import MetaPixel, { trackEvent } from '@/components/MetaPixel'

const montserrat = Montserrat({
  weight: ["600", "700"],
  subsets: ["latin"],
})

const WA_LINK = "https://wa.me/5521994287212?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais!"

function WhatsAppButton({ label = "Falar agora no WhatsApp" }: { label?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent('Lead', {
          content_name: 'Botão WhatsApp',
          content_category: 'Prótese Capilar',
        })
      }
      className="mt-4 w-full flex justify-center items-center gap-2
      bg-gradient-to-r from-green-500 to-green-600
      text-white px-6 py-3 rounded-xl font-semibold
      shadow-lg hover:scale-105 hover:shadow-xl
      transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-white"
      >
        <path d="M16 3C9.4 3 4 8.3 4 14.8c0 2.6.9 5 2.3 7L4 29l7.5-2c1.9 1 4 1.5 6.2 1.5 6.6 0 12-5.3 12-11.8S22.6 3 16 3zm0 21.5c-2 0-4-.6-5.6-1.7l-.4-.2-4.4 1.2 1.2-4.2-.3-.4C5.4 17.7 4.8 16.3 4.8 14.8 4.8 10 9.1 6 14.4 6s9.6 4 9.6 8.8-4.3 8.7-9.6 8.7zm5.2-6.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.6 5.9 5 .8.3 1.5.5 2 .6.8.2 1.5.2 2 .1.6-.1 1.7-.7 2-1.3.3-.6.3-1.2.2-1.3-.1-.1-.3-.2-.6-.4z" />
      </svg>
      {label}
    </a>
  )
}

export default function Page() {
  return (
    <>
      <MetaPixel />
      <main className="min-h-screen bg-black text-neutral-900 flex items-center justify-center flex-col">
        <div className="w-full top-8 flex items-center justify-center md-h-[20rem]">
          <img className="w-full max-w-4xl" src={MyImage.src} alt="Descrição" />
        </div>

        <div className="w-full border-b border-white flex justify-center items-center">
          <div className="max-w-[50rem] bg-black h-auto ml-8 mr-8 border-b-2 border-white md-flex-row">
            <div className="flex justify-center items-center flex-row">
              <section className="flex flex-col h-auto relative w-full flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
                  <h1 className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}>
                    RECUPERE SUA <strong className="text-blue-800">AUTOESTIMA</strong>
                  </h1>
                </div>
                <div className="relative z-10 text-center text-white px-4 mt-3.5 text-left">
                  <p className="mt-4 text-[1.25rem] md:text-2xl mb-5">✅Resultado Ultra realista</p>
                  <p className="mt-4 text-[1.25rem] md:text-2xl mb-5">✅Autoestima renovada</p>
                  <p className="mt-4 text-[1.25rem] md:text-2xl mb-5">✅Visual totalmente natural</p>
                  <p className="mt-4 text-[1.25rem] md:text-2xl mb-5">✅Confiança imediata</p>
                  <p className="mt-4 text-[1.25rem] md:text-2xl mb-5">✅Sem cirurgia</p>
                </div>
                <div className="w-full flex justify-center items-center mt-15">
                  <img className="rounded-1xl w-full mb-4" src={MainClient.src} alt="Foto de perfil" />
                </div>
              </section>
            </div>
            <section className="max-w-3xl w-5rem px-4">
              <div className="flex items-center gap-3 mb-10">
                <WhatsAppButton />
              </div>
            </section>
          </div>
        </div>

        <div className="w-full border-b border-white flex justify-center items-center">
          <div className="max-w-[50rem] bg-black h-auto ml-8 mr-8 border-b-2 border-white md-flex-row">
            <div className="flex justify-center items-center flex-row">
              <section className="flex flex-col h-auto relative w-full flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
                  <h1 className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}>
                    VEJA ALGUMAS <strong className="text-blue-800">VANTAGENS</strong>
                  </h1>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <img className="rounded-1xl w-full mb-4" src={V1.src} alt="Foto de perfil" />
                  <img className="rounded-1xl w-full mb-4" src={V2.src} alt="Foto de perfil" />
                  <img className="rounded-1xl w-full mb-4" src={V3.src} alt="Foto de perfil" />
                  <img className="rounded-1xl w-full mb-4" src={V4.src} alt="Foto de perfil" />
                </div>
              </section>
            </div>
            <section className="max-w-3xl w-5rem px-4">
              <div className="flex items-center gap-3 mb-10">
                <WhatsAppButton />
              </div>
              <div className="flex justify-center items-center flex-row">
                <section className="flex flex-col h-auto relative w-full flex items-center justify-center overflow-hidden">
                  <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
                    <h1 className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}>
                      VEJA ALGUNS <strong className="text-blue-800">BENEFÍCIOS</strong>
                    </h1>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center">
                    <img className="rounded-1xl w-full mb-4" src={V5.src} alt="Foto de perfil" />
                    <img className="rounded-1xl w-full mb-4" src={V6.src} alt="Foto de perfil" />
                    <img className="rounded-1xl w-full mb-4" src={V7.src} alt="Foto de perfil" />
                    <img className="rounded-1xl w-full mb-4" src={V8.src} alt="Foto de perfil" />
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>

        <div className="max-w-[50rem] bg-red h-auto ml-8 mr-8">
          <div className="mb-15">
            <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
              <h1 className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}>
                VEJA ALGUNS <strong className="text-blue-800">RESULTADOS</strong>
              </h1>
            </div>
            <SliderClient />
          </div>

          <div className="relative z-10 text-center flex items-center flex-col text-white px-4 mt-3.5 mb-5">
            <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
              <h1 className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}>
                CONHEÇA O <strong className="text-blue-800">JEFFERSON</strong>
              </h1>
            </div>
            <img className="rounded-1xl h-80 mb-4" src={MyProfile.src} alt="Foto de perfil" />
            <p className="font-san font-medium">
              Jefferson de Sá, 35 anos, é barbeiro e empreendedor em Teresópolis. Atua desde 2018 na área e, em 2021,
              tornou-se pioneiro em sua cidade ao se especializar em prótese capilar, trazendo um serviço inovador para
              a região. Apaixonado pela arte da barbearia e comprometido em oferecer sempre a melhor experiência,
              Jefferson se consolidou como referência local, unindo técnica, modernidade e cuidado em cada atendimento.
            </p>
          </div>

          <section className="w-full px-4">
            <div className="flex items-center gap-3 mb-10 border-b-2">
              <WhatsAppButton label="Quero minha consulta gratuita" />
            </div>
          </section>
        </div>

        <div className="relative z-10 w-full text-center text-gray-400 text-[0.75rem] flex items-center flex-col px-4 mt-3.5">
          <p className="font-san font-light">Desenvolvido por - Criativa360</p>
        </div>
      </main>
    </>
  )
}
