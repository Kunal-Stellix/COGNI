import React from 'react';
import { featuredProducts } from '@/data/products'; 
import { ProductCard } from '@/components/ui/ProductCard'; 

export default function ProductsSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="layout-container px-6 sm:px-12 lg:px-16 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Featured Innovation
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Engineered for performance, designed to blend seamlessly into your home.
          </p>
        </div>

        {/* Bento Grid Wrapper */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isWide={index === 0} // Logic: First item is always the "Bento hero"
            />
          ))}
        </div>
      </div>
    </section>
  );
}