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
import { Montserrat } from "next/font/google";
import SliderClient from '@/components/autoSlide/autoSlideClient';

const montserrat = Montserrat({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export default function Page() {



  return (
    <main className="min-h-screen bg-black text-neutral-900 flex items-center justify-center flex-col">
      <div className=" w-full top-8 flex items-center justify-center md-h-[20rem]">
        <img className="w-full max-w-4xl " src={MyImage.src} alt="Descrição" />

      </div>
      <div className="w-full border-b border-white flex justify-center items-center">
        <div className="max-w-[50rem] bg-black h-auto ml-8 mr-8 border-b-2 border-white md-flex-row">
          <div className="flex justify-center items-center flex-row">
            <section className="  flex flex-col  h-auto relative w-full flex items-center justify-center overflow-hidden">
              <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
                <h1
                  className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}
                >
                  RECUPERE SUA <strong className="text-blue-800">AUTOESTIMA</strong>
                </h1>
              </div>
              <div className="relative z-10 text-center text-white px-4 mt-3.5 text-left">
                <p className="mt-4 text-[1.25rem] md:text-2xl mb-5">
                  ✅Resultado Ultra realista
                </p>
                <p className="mt-4 text-[1.25rem] md:text-2xl mb-5 ">
                  ✅Autoestima renovada
                </p>
                <p className="mt-4 text-[1.25rem] md:text-2xl mb-5 ">
                  ✅Visual totalmente natural
                </p>
                <p className="mt-4 text-[1.25rem] md:text-2xl mb-5">
                  ✅Confiança imediata
                </p>
                <p className="mt-4 text-[1.25rem] md:text-2xl mb-5">
                  ✅Sem cirurgia
                </p>
              </div>
              <div className="w-full flex justify-center items-center mt-15">
                <img className='rounded-1xl w-full mb-4' src={MainClient.src} alt="Foto de perfil" />
              </div>
            </section>
          </div>
          <section className="max-w-3xl w-5rem px-4 ">
            <div className="flex items-center gap-3 mb-10">
              <a
                href="https://chat.whatsapp.com/FGRbPfSE4zQKNH1XcjWxQe"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex justify-center items-center  bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Entrar no grupo VIP
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="w-full border-b border-white flex justify-center items-center">
        <div className="max-w-[50rem] bg-black h-auto ml-8 mr-8 border-b-2 border-white md-flex-row">
          <div className="flex justify-center items-center flex-row">
            <section className="  flex flex-col  h-auto relative w-full flex items-center justify-center overflow-hidden">
              <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
                <h1
                  className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}
                >
                  VEJA ALGUMAS <strong className="text-blue-800">VANTAGENS</strong>
                </h1>
              </div>
              <div className="relative z-10 text-center text-white px-4 mt-3.5 text-left">

              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <img className='rounded-1xl w-full mb-4' src={V1.src} alt="Foto de perfil" />
                <img className='rounded-1xl w-full mb-4' src={V2.src} alt="Foto de perfil" />
                <img className='rounded-1xl w-full mb-4' src={V3.src} alt="Foto de perfil" />
                <img className='rounded-1xl w-full mb-4' src={V4.src} alt="Foto de perfil" />
              </div>
            </section>
          </div>
          <section className="max-w-3xl w-5rem px-4 ">
            <div className="flex items-center gap-3 mb-10">
              <a
                href="https://chat.whatsapp.com/FGRbPfSE4zQKNH1XcjWxQe"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex justify-center items-center  bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Entrar no grupo VIP
              </a>
            </div>
            <div className="flex justify-center items-center flex-row">
            <section className="  flex flex-col  h-auto relative w-full flex items-center justify-center overflow-hidden">
              <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
                <h1
                  className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}
                >
                  VEJA ALGUNS <strong className="text-blue-800">BENEFÍCIOS</strong>
                </h1>
              </div>
              <div className="relative z-10 text-center text-white px-4 mt-3.5 text-left">

              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <img className='rounded-1xl w-full mb-4' src={V5.src} alt="Foto de perfil" />
                <img className='rounded-1xl w-full mb-4' src={V6.src} alt="Foto de perfil" />
                <img className='rounded-1xl w-full mb-4' src={V7.src} alt="Foto de perfil" />
                <img className='rounded-1xl w-full mb-4' src={V8.src} alt="Foto de perfil" />
              </div>
            </section>
          </div>
          </section>
        </div>
      </div>
      <div className="max-w-[50rem] bg-red h-auto ml-8 mr-8">
        <div className="flex  items-center  w-5rem px-4 mb-10 ">

        </div>

        <div className="mb-15">
          <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
            <h1
              className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}
            >
              VEJA ALGUNS <strong className="text-blue-800">RESULTADOS</strong>
            </h1>
          </div>
          <SliderClient />
        </div>
        <div className="relative z-10 text-center flex items-center flex-col text-white px-4 mt-3.5 mb-5">
          <div className="relative z-10 text-center text-white px-4 mt-5 mb-5">
            <h1
              className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-tight leading-tight`}
            >
              CONHEÇA O <strong className="text-blue-800">JEFERSON</strong>
            </h1>
          </div>
          <img className='rounded-1xl h-80 mb-4' src={MyProfile.src} alt="Foto de perfil" />
          

          <p className="font-san font-medium">
            Jefferson de Sá, 34 anos, é barbeiro e empreendedor em Teresópolis. Atua desde 2018 na área e, em 2021, tornou-se pioneiro em sua cidade ao se especializar em prótese capilar, trazendo um serviço inovador para a região. Apaixonado pela arte da barbearia e comprometido em oferecer sempre a melhor experiência, Jefferson se consolidou como referência local, unindo técnica, modernidade e cuidado em cada atendimento.

          </p>
        </div>
        <section className=" w-full px-4 ">
          <div className="flex  items-center gap-3 mb-10 border-b-2 ">
            <a
              href="https://chat.whatsapp.com/FGRbPfSE4zQKNH1XcjWxQe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex justify-center items-center  bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Entrar no grupo VIP
            </a>
          </div>
        </section>
        

      </div>
      <div className="relative z-10 w-full text-center bg-blue-950 text-white text-[0.75rem] flex items-center flex-col px-4 mt-3.5"> <p className="font-san font-light">
            Desenvolvido por - Criativa360
          </p>
        </div>
    </main>
  )
}
