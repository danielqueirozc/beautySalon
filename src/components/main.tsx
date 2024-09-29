import { useEffect, useState } from "react";

export function Main() {
    const [isMobile ,setIsMobile] = useState(false);

    useEffect(()=> {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }
    },[]);

    return (
       
        <>
            {isMobile ? (
                <main id="home" className="pt-8 flex flex-col items-center justify-center bg-white200 pb-20 relative border-b-0"> {/* Retiramos o border-b padrão */}
                    <div className="w-full relative min-h-[300px]"> 
                        <img className="absolute right-0" src="../src/assets/Shape.svg" alt="shape" />
                        <img className="z-10 absolute top-10" src="../src/assets/Img.png" alt="" />
                    </div>
                    <h1 className="text-3xl font-bold z-20">Saúde natural para <br /> os seus cabelos</h1>
                    <h2 className="text-textGray mt-4">Um salão exclusivo em São Paulo, <br /> especializado em tratamentos naturais.</h2>
                    <button className="h-14 px-8 py-4 text-white bg-green700 rounded-sm mt-8">Agendar um horário</button>

                    {/* Aqui criamos o pseudo-elemento para o gradiente na borda */}
                    < div className="absolute bottom-0 left-0 w-full h-px" 
                        style={{
                        background: "linear-gradient(90deg, #69B99D 0%, #69B99D -100%, #CCF4E6 100%, #CCF4E6 34%)"
                        }}
                    />
                </main>
            ) : (
                <main id="home" className="w-full h-[699px] flex items-center justify-between pl-[123px] pr-[71px] bg-white200">
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h1 className="text-3xl font-bold z-20">Saúde natural para <br /> os seus cabelos</h1>
                        <h2 className="text-textGray mt-4">Um salão exclusivo em São Paulo, <br /> especializado em tratamentos naturais.</h2>
                        <button className="h-14 px-8 py-4 text-white bg-green700 rounded-sm mt-8">Agendar um horário</button>
                    </div>
                    <img src="../src/assets/ImgDesktop.png" alt="" />
                </main>
            )}
        </>
    );
}
