'use client'

import { Button } from '~/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function LonestarLayout() {
  return (
    <section className="relative h-auto bg-[#F8F7F3] z-20 pt-[8rem] flex flex-col">
      <div className="container mx-auto gap-48 sm:grid-cols-2 items-center justify-center h-full">
        <div className="sm:w-full h-auto max-w-xl gap-8 mx-8 z-30">
          <div className="flex flex-col gap-8 items-start">
            <h2 className="text-4xl md:text-6xl font-bold text-[#F90B3E]">
              Now Available at Lone<span className="relative top-3 leading-0 tranlate-y-24 ">*</span>Star Cantina
            </h2>

            <Button 
              size="lg"
              asChild
              className="text-white bg-[#F90B3E] hover:bg-[#F90B3E]/60 py-2 px-4 text-md">
              <Link href="https://www.lonestarcantina.ca/" target="_blank" rel="noopener noreferrer">
                Find The Cantina
              </Link>
            </Button>
          </div>  
        </div>
        <Image 
          src="https://175dia5tlm.ufs.sh/f/aHkjIq3WKHPsqwjU0XYkLFeHMWTjBA9QcyagilDX65UhZn8m" 
          alt="LoneStar" 
          width={800}
          height={450}
          className="relative w-full mt-8 mx-auto object-contain sm:object-left-top sm:opacity-50"
        />
      </div>
    </section>
  )
}
