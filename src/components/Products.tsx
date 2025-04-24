import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Cavas personalizadas',
    image: 'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2018_29_35.png',
    description: 'Colores personalizados',
  },
  {
    id: 2,
    name: 'Camas personalizadas',
    image: 'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2019_53_09.png',
    description: 'Variedad de usos y combinaciones',
  },
  {
    id: 3,
    name: 'Clossets tipo industrial',
    image: 'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2018_43_39.png',
    description: 'Puertas de vidrio o metálicas con estantes modulares',
  },
  {
    id: 4,
    name: 'Proyectos personalizados',
    image: 'https://raw.githubusercontent.com/Containerliving/Home/refs/heads/main/ChatGPT%20Image%2023%20abr%202025%2C%2018_56_29.png',
    description: 'Ajustados a cada espacio o proyecto',
  },
];

const Products: React.FC = () => {
  return (
    <section id="productos" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Muebles</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Diseños únicos que combinan la durabilidad del metal con la calidez de la madera.
            Cada pieza es fabricada artesanalmente en nuestro taller en Bogotá.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-neutral-800 rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-500">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;