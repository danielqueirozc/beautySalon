import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="bg-white200 px-6 py-20 flex flex-col items-start gap-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-3xl font-bold">Entre em contato com a gente!</h1>
                <p className="text-textGray">Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
                <button className='flex items-center justify-center gap-2 w-[236px] h-14 bg-green700 px-6 py-3 rounded'>
                    <img src="../src/assets/whatsAppIcon.svg" alt="whatsapp" />
                    <span className="text-white font-medium">Entrar em contato</span>
                </button>
            </div>

            <div className="flex flex-col items-start gap-8 text-textGray">
                <span className="flex gap-3 justify-center items-center">
                    <Phone color="#69b99d" />
                    11 99845-6754
                </span>
                <span className="flex gap-3 justify-center items-center">
                    <MapPin color="#69b99d" />
                    R. Amauri Souza, 346
                </span>
                <span className="flex gap-3 justify-center items-center">
                    <Mail color="#69b99d" />
                    contato@beautysalon.com
                </span>
            </div>
        </section>
    );
}