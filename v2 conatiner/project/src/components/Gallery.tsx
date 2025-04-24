import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Gallery: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    rtl: false,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
    },
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  const animation = { duration: 15000, easing: (t: number) => t };

  const images = [
    'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/429312004_412011057879405_8657939770999396299_n.jpg',
    'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/429313227_411842561322169_65298587397722124_n.jpg',
    'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/429352091_765387432156632_2526043546644113710_n.jpg',
    'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/429637188_364169366537524_8893951337333601524_n.jpg',
    'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2018_29_35.png',
    'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2018_26_55.png',
    'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2018_43_39.png',
    'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2018_56_29.png',
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Galería de Proyectos</h2>
        <div ref={sliderRef} className="keen-slider">
          {images.map((image, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="relative pt-[75%]">
                <img
                  src={image}
                  alt={`Proyecto ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-contain bg-neutral-800 rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;