import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function Services() {
    useEffect(() => {
        // Verificar se a largura da janela é menor que 768px (mobile)
        if (window.innerWidth <= 768) {
            AOS.init({
                disable: false, // Inicializa AOS em dispositivos móveis
                startEvent: 'DOMContentLoaded',
                initClassName: 'aos-init',
                animatedClassName: 'aos-animate',
                useClassNames: false,
                disableMutationObserver: false,
                debounceDelay: 50,
                throttleDelay: 99,
                offset: 120,
                delay: 0,
                duration: 400,
                easing: 'ease',
                once: false,
                mirror: false,
                anchorPlacement: 'top-bottom',
            });
        } else {
            // Desativa AOS em telas maiores que 768px
            AOS.init({
                disable: true,
            });
        }
        
        // Reajustar AOS em caso de redimensionamento da tela
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                AOS.refresh(); // Refresca AOS ao redimensionar para dispositivos móveis
            }
        };
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id='services' className='relative'>
            <div className="w-full flex flex-col gap-16 py-20 sm:py-40 bg-white200">
                <div className="flex flex-col items-center justify-center gap-4 px-6">
                    <h1 className="text-3xl font-bold">Serviços</h1>
                    <p className="text-center sm:w-2/6">
                        Com mais de 10 anos no mercado, 
                        o <span className="text-green700 font-semibold">Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos 
                        e totalmente naturais
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-center gap-6 px-6">
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex flex-col items-center justify-center gap-4 px-8 py-[58px] border-b-4 border-b-green700 shadow-lg bg-white">
                        <img className="w-20 h-20" src="../src/assets/IconHair.svg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-3">
                            <span className="text-xl lg:text-2xl font-bold">Terapia capilar</span>
                            <p className="text-textGray text-center">
                                Terapia completa para couro <br /> cabeludo e fios, protegendo todos <br /> os tipos de cabelos, inclusive os <br /> longos e finos.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex flex-col items-center justify-center gap-4 px-8 py-[58px] border-b-4 border-b-green700 shadow-lg bg-white">
                        <img className="w-20 h-20" src="../src/assets/scissors.svg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-3">
                            <span className="text-xl lg:text-2xl font-bold">Cortes</span>
                            <p className="text-textGray text-center">
                                Terapia completa para couro <br /> cabeludo e fios, protegendo todos <br /> os tipos de cabelos, inclusive os <br /> longos e finos.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex flex-col items-center justify-center gap-4 px-8 py-[58px] border-b-4 border-b-green700 shadow-lg bg-white">
                        <img className="w-20 h-20" src="../src/assets/shampoo.svg" alt="" />
                        <div className="flex flex-col items-center justify-center gap-3">
                            <span className="text-xl lg:text-2xl font-bold">Tratamentos</span>
                            <p className="text-textGray text-center">
                                Terapia completa para couro <br /> cabeludo e fios, protegendo todos <br /> os tipos de cabelos, inclusive os <br /> longos e finos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px" 
                style={{
                    background: "linear-gradient(90deg, #69B99D 0%, #69B99D -100%, #CCF4E6 100%, #CCF4E6 34%)"
                }}
            />
        </section>
    );
}
