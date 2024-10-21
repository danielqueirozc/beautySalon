import { useEffect, useState } from "react";
import { ButtonHamburguer } from "./buttonHamburguer";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
    const [isMobile ,setIsMobile] = useState(false);
    const [handleHome, setHandleHome] = useState(false);
    const [handleAbout, setHandleAbout] = useState(false);
    const [handleServices, setHandleServices] = useState(false);
    const [handleTestimonials, setHandleTestimonials] = useState(false);
    const [handleContact, setHandleContact] = useState(false);

    useEffect(()=> {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }
    },[]);

    function handleHomeClick() {
        setHandleHome(true);
        setHandleAbout(false);
        setHandleServices(false);
        setHandleTestimonials(false);
        setHandleContact(false);
    }
    function handleAboutClick() {
        setHandleAbout(true);
        setHandleHome(false);
        setHandleServices(false);
        setHandleTestimonials(false);
        setHandleContact(false);
    }
    function handleServicesClick() {
        setHandleServices(true);
        setHandleHome(false);
        setHandleAbout(false);
        setHandleTestimonials(false);
        setHandleContact(false);
    }
    function handleTestimonialsClick() {
        setHandleTestimonials(true);
        setHandleHome(false);
        setHandleAbout(false);
        setHandleServices(false);
        setHandleContact(false);
    }
    function handleContactClick() {
        setHandleContact(true);
        setHandleHome(false);
        setHandleAbout(false);
        setHandleServices(false);
        setHandleTestimonials(false);
    }

    return (
        <header className="h-[72px] flex items-center justify-between px-6 border-b border-b-textGray/50 bg-white200">
            <img className="w-[144px] h-8" src="../src/assets/Logo.svg" alt="logo" />
            
           {isMobile ? (
            <Sheet>
                <SheetTrigger>
                    <ButtonHamburguer />
                </SheetTrigger>

                <SheetContent className="flex items-center justify-center">
                    <div className="flex flex-col items-center gap-16">
                        <a className="font-bold text-3xl" href="#">Início</a>
                        <a className="font-bold text-3xl" href="#">Sobre</a>
                        <a className="font-bold text-3xl" href="#">Serviços</a>
                        <a className="font-bold text-3xl" href="#">Depoimentos</a>
                        <a className="font-bold text-3xl" href="#">Contato</a>
                    </div>
                </SheetContent>
            </Sheet>
           ):
           (
            <header className="h-[72px] px-32 py-5 flex items-center justify-between">
                <div className="flex items-center justify-center gap-8">
                    <a onClick={handleHomeClick} className={`${handleHome ? "text-green700 font-bold border-b-4 border-b-green700" : ""} h-[72px] flex items-center`} href="#home">Inicio</a>
                    <a onClick={handleAboutClick} className={`${handleAbout ? "text-green700 font-bold border-b-4 border-b-green700" : ""} h-[72px] flex items-center`} href="#about">Sobre</a>
                    <a onClick={handleServicesClick} className={`${handleServices ? "text-green700 font-bold border-b-4 border-b-green700" : ""} h-[72px] flex items-center`} href="#services">Serviços</a>
                    <a onClick={handleTestimonialsClick} className={`${handleTestimonials ? "text-green700 font-bold border-b-4 border-b-green700" : ""} h-[72px] flex items-center`} href="#testimonials">Depoimentos</a>
                    <a onClick={handleContactClick}className={`${handleContact ? "text-green700 font-bold border-b-4 border-b-green700" : ""} h-[72px] flex items-center`} href="#contact">Contato</a>
                </div>
            </header>
           )}
        </header>
    );
}