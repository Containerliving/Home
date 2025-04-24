import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-neutral-800 rounded-sm overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2019_38_35.png" 
                  alt="Artesano trabajando" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500 rounded-sm hidden md:block">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <p className="text-black font-bold text-lg text-center">
                    Fundada en Bogotá, 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Somos una empresa bogotana creada por hermanos apasionados por el diseño industrial. 
              Nuestra misión es crear muebles que combinen funcionalidad, estética y durabilidad.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              Cada mueble nace de una idea y se transforma en una pieza única para tu espacio, 
              utilizando materiales de alta calidad y técnicas artesanales combinadas con tecnología moderna.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-neutral-800 p-6 rounded-sm">
                <div className="text-amber-500 font-bold text-4xl mb-2">5+</div>
                <div className="text-gray-400">Años de experiencia</div>
              </div>
              <div className="bg-neutral-800 p-6 rounded-sm">
                <div className="text-amber-500 font-bold text-4xl mb-2">100+</div>
                <div className="text-gray-400">Proyectos realizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;