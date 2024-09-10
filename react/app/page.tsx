"use client"
import { useEffect, useMemo, useState } from "react";

import AppNavbar from "@/components/AppNavbar";
import AppHero from "@/components/AppHero";
import Searchbar from "@/components/Searchbar";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from '@/constants';
import AppFooter from "@/components/AppFooter";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS.slice(0, 8));

  useEffect(() => {
    if (searchQuery) {
      const filter = PRODUCTS.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase())
      });
      setFilteredProducts(filter);
    } else {
      setFilteredProducts(PRODUCTS.slice(0, 8));
    }
  }, [searchQuery])

  const hasShownAllProducts = useMemo(() => {
    if (searchQuery) return true;
    
    return filteredProducts.length === PRODUCTS.length;
  }, [filteredProducts])

  function loadMoreProducts() {
    const newProducts = PRODUCTS.slice(filteredProducts.length)
    setFilteredProducts([...filteredProducts, ...newProducts]);
  }

  return (
    <main className="bg-white">
      <AppNavbar />
      <AppHero />
      <section className="mx-auto max-w-7xl py-24 min-h-[750px]">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">Our Products</h1>
        <p className="mt-6 text-lg leading-8 text-gray-800 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veritatis consequatur
          voluptatem tempora iusto? Error rerum, molestias reprehenderit veniam perspiciatis
          obcaecati.
        </p>

        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="col-span-1 mb-4">
            <Searchbar handleChange={(e:any) => setSearchQuery(e.target.value)} />
          </div>
          <div className="col-span-3" />
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                name={product.name}
                description={product.description}
                discount={product.discount}
                originalPrice={product.originalPrice}
              />
            )
          })}
          <div className="col-span-4 flex justify-center mt-8">
            {!hasShownAllProducts && 
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={loadMoreProducts}
              >
                Load more product
              </button>
            }
          </div>
        </div>
      </section>
      <AppFooter />
    </main>
  );
}
