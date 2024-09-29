import { useEffect, useState } from "react";

export function About() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        if (window.innerWidth < 768) {
            setIsOpen(true);
        }
    },[]);
    
    return (
        <section id="about" className="relative w-full pt-28 pb-20 sm:pb-40 flex flex-col gap-4 items-center justify-center">
            <div className={`${isOpen && 'hidden'} relative w-full`}>
                < div className="absolute bottom-0 left-0 w-full h-px sm:flex" 
                    style={{
                        background: "linear-gradient(90deg, #69B99D 0%, #69B99D -100%, #CCF4E6 100%, #CCF4E6 34%)"
                    }}
                />
            </div>
                    
            <div className="flex flex-col sm:flex-row sm:mt-8">
                <div className="w-full relative px-0 min-h-[300px]">
                    <img className="relative -top-6" src="../src/assets/Shape.svg" alt="" />
                    <img className="w-full absolute top-0 left-0 z-10" src="../src/assets/Img1.png" alt="" />
                </div>

                <div className="px-6">
                    <h1 className="text-3xl font-bold">Sobre nós</h1>
                    <div className="flex flex-col">
                        <p className="text-textGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. 
                            Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. 
                            Nullam in est porta, pellentesque massa vitae, vehicula risus. 
                        </p>
                        <p className="text-textGray">In placerat, felis vitae sodales dictum, lacus quam pretium mi, 
                            ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, 
                            nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. 
                        </p>
            
                        <p className="text-textGray">
                            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. 
                            Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, 
                            nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
                        </p>

                    </div>
                </div>
            </div>
                    
            < div className="absolute bottom-0 left-0 w-full h-px sm:flex" 
                style={{
                    background: "linear-gradient(90deg, #69B99D 0%, #69B99D -100%, #CCF4E6 100%, #CCF4E6 34%)"
                }}
            />
        </section>
    );
}