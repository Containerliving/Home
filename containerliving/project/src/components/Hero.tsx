import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-neutral-950 to-neutral-800 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2018_41_06.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="text-white">Diseño industrial</span>
          <br />
          <span className="text-amber-500">hecho a medida</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-300">
          Exclusividad, calidad y estilo colombiano en cada pieza.
        </p>
        <button
          onClick={scrollToContact}
          className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-sm transition-all transform hover:scale-105 hover:shadow-xl"
        >
          Solicitar cotización
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;