import { Carousel } from "flowbite-react";

export function Carrusel(){
    const slides = [
        {
          src: '/img-calculador-ecologico.png',
          alt: "Calculado ",
          texto: "Este es el primer slide del carrusel"
        },
        {
          src: '/img-reconocedor-plantas.png',
          alt: "Segunda imagen",
          texto: "Este es el segundo slide del carrusel"
        },
        {
          src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
          alt: "Tercera imagen",
          texto: "Este es el tercer slide del carrusel"
        },
        {
          src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
          alt: "Cuarta imagen",
          texto: "Este es el cuarto slide del carrusel"
        },
        {
          src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
          alt: "Quinta imagen",
          texto: "Este es el quinto slide del carrusel"
        }
      ];
    return (
        <div className="w-full max-w-2x1 mx-auto h-64 sm:h-64 xl:h-90 2xl:h-99">
        <Carousel>
            {slides.map((slide, index) => (
                <div key={index} className='flex flex-col items-center jutify-center text-center p-4'>
                    <img src={slide.src} alt={slide.alt} className='w-3/4 h-auto max-h-60 object-contain' />
                    <p className="mt-5 text-sm sm:text-base text-gray-700">{slide.texto}</p>
                </div>
            ))}
        </Carousel>
      </div>
    )
}