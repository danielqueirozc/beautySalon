import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";



export function Testimonials() {
  const [isMobile ,setIsMobile] = useState(false);

  useEffect(()=> {
    if (window.innerWidth <= 768) {
        setIsMobile(true);
    }
  },[]);

    return (
      <section id="testimonials" className="px-6 py-12 flex flex-col gap-16 pt-20 overflow-hidden">
        <h1 className="text-3xl font-bold p-8">Depoimentos de quem já passou por aqui</h1>

        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {isMobile ? (
              <div className="rounded shadow-md p-8 flex flex-col gap-6">
                <div>
                  <img src="../src/assets/Aspas.svg" alt="" />
                  <p className="text-green900">
                    Eu sou cliente do Beautysalon há 5 anos e não troco por nada! 
                    Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. 
                    São profissionais incríveis e qualificados.   
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src="../src/assets/client1.svg" className="w-8 h-8" alt="" />
                  <span>Wanessa Souza</span>
                </div>
              </div>
              ) : (
              <div className="flex gap-8">
                <div className="rounded shadow-md p-8 flex flex-col gap-8">
                  <img src="../src/assets/Aspas.svg" alt="" />
                  <p className="text-green900">
                    Eu sou cliente do Beautysalon há 5 anos e não troco por nada! 
                    Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. 
                    São profissionais incríveis e qualificados.   
                  </p>
                </div>
                <div className="rounded shadow-md p-8">
                  <img src="../src/assets/Aspas.svg" alt="" />
                  <p className="text-green900">
                    Eu sou cliente do Beautysalon há 5 anos e não troco por nada! 
                    Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. 
                    São profissionais incríveis e qualificados.   
                  </p>
                </div>
              </div>
              )}
            </CarouselItem>
            <CarouselItem>
            <div className="rounded shadow-md p-8">
              <img src="../src/assets/Aspas.svg" alt="" />
              <p className="text-green900">
                Eu sou cliente do Beautysalon há 5 anos e não troco por nada! 
                Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. 
                São profissionais incríveis e qualificados.   
              </p>
            </div>
            </CarouselItem>
            <CarouselItem><div className="rounded shadow-md p-8">
              <img src="../src/assets/Aspas.svg" alt="" />
              <p className="text-green900">
                Eu sou cliente do Beautysalon há 5 anos e não troco por nada! 
                Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. 
                São profissionais incríveis e qualificados.   
              </p>
            </div></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </section>
    );
}