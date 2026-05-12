import React from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  badge?: boolean;
}

interface ProductCardProps {
  product: Product;
  isWide?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isWide }) => {
  return (
    <article 
      className={`group relative flex overflow-hidden rounded-[2rem] bg-[#f7f7f7] transition-all duration-700 hover:shadow-2xl
        ${isWide ? 'md:col-span-2 h-[500px] lg:h-[400px]' : 'col-span-1 h-[500px]'}
      `}
    >
      {/* 1. Full Cover Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
      </div>

      {/* 2. Content Layer - With Scrim for Text Readability */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end p-10 lg:p-14 bg-gradient-to-t from-black/60 via-transparent to-transparent">
        
        <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {product.name}
        </h3>

        <p className="mt-3 max-w-md text-lg font-medium text-white/90 md:text-xl">
          {product.tagline}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 active:scale-95">
            Buy Now
          </button>
          
          <button className="inline-flex min-w-[140px] items-center justify-center rounded-full border border-white bg-transparent px-8 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>
      </div>

      {/* Award Badge */}
      {product.badge && (
        <div className="absolute top-8 right-8 z-10 hidden sm:block">
          <div className="rounded-xl bg-sky-400/90 p-3 text-center text-[10px] font-bold uppercase leading-tight tracking-tighter text-white backdrop-blur-sm">
            Innovation<br />Award Winner<br />2026
          </div>
        </div>
      )}
    </article>
  );
};
