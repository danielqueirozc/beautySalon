import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer id="footer" className="bg-green700 py-16 sm:py-16 px-6 sm:px-32 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-8">
            <div className="flex flex-col gap-6">
                <img src="../src/assets/LogoHeader.svg" alt="logo" />
                <div className="flex flex-col gap-3 text-white">
                    <span>
                        ©2024 Beautysalon.
                    </span>
                    <span>
                        Todos os direitos reservados.
                    </span>
                </div>
            </div>

            <div className="flex gap-8">
               <button>
                    <Instagram color="#F9F9F9" />
               </button>
                <button>
                    <Facebook color="#F9F9F9" />
                </button>
                <button>
                    <Youtube color="#F9F9F9" />
                </button>
            </div>
        </footer>
    );
}