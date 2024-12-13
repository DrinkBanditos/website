'use client'

import React from 'react'

import Image from 'next/image'

interface Ingredient {
  name: string;
  src: string;
  alt: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Hops",
    src: "https://utfs.io/f/aHkjIq3WKHPsz89ITWgdsQS9vR86hi5PW3tGlb7a4kExJzTe",
    alt: "Hops",
  },
  {
    name: "Corn",
    src: "https://utfs.io/f/aHkjIq3WKHPszPj5BLgdsQS9vR86hi5PW3tGlb7a4kExJzTe",
    alt: "Corn",
  },
  {
    name: "Yeast",
    src: "https://utfs.io/f/aHkjIq3WKHPsLaLtRVrXigJWqBDI6Th1Rw3yGrYQdbo8ak7E",
    alt: "Yeast",
  },
  {
    name: "Malt",
    src: "https://utfs.io/f/aHkjIq3WKHPsyMHvvqhtHYDhCEmbjR1Bp2lsIZi0PuXAdQwS",
    alt: "Malt",
  },
  {
    name: "Water",
    src: "https://utfs.io/f/aHkjIq3WKHPskrwNyB8nY8bRL3OTJu9GrFQq50iUpZ21ePay",
    alt: "Water",
  }
]

export default function Ingredients() {
  return (
    <section className="relative h-auto bg-white z-20 pt-[16rem] pb-[12rem] overflow-hidden">

      <Image 
        src="https://utfs.io/f/aHkjIq3WKHPs1aDMwHYnhLqKCAjHtN86G3SmewrXUn1MBJgb" 
        alt="Map of Canada" 
        fill
        className="absolute object-cover sm:object-top sm:opacity-20 sm:block hidden"
      />

      <div className="absolute -top-1 h-12 w-screen z-0 block">
        <Image 
          src="/transition-white.svg" 
          alt="Transition illustration"
          fill
          className="object-cover object-top"
          loading="lazy"
        />
      </div>

      <div className="relative z-20 container mx-auto grid sm:gap-12 gap-24 sm:grid-cols-2 items-center justify-center h-full">

        <div className="flex flex-col sm:w-full h-auto max-w-xl gap-8 mx-8 z-30">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F90B3E]">
            Ingredients So Premium You&apos;d Think They Were Stolen...
          </h2>
          <p className="text-xl text-[#A29562]">
            Five simple ingredients is all it takes to make the most delicious, smooth, and flavorful golden lager you&apos;ve ever tasted - In fact, We guarantee the taste will kick you right in the limes.
          </p>
        </div>

        <div className="grid -gap-8 sm:grid-cols-1 sm:-gap-4 mx-8 items-center">
          {ingredients.map((ingredient: Ingredient) => (
            <div key={ingredient.name} className="flex flex-row gap-4 sm:gap-12 items-center">
              <div className="relative w-32 sm:w-48 h-32 sm:h-48 -mt-10 border-8 border-white rounded-full">
                <Image 
                  src={ingredient.src} 
                  alt={ingredient.alt}
                  fill
                  className="object-contain object-top "
                />
              </div> 
              <div>
                <h3 className="text-2xl -mt-8 sm:text-3xl font-bold text-[#A29562]">-- {ingredient.name} -- </h3>
              </div>
            </div>  
            ))}
        </div>
      </div>

      
    </section>
  )
}
