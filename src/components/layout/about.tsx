'use client'

import { Button } from '~/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <section className="relative h-auto bg-[#F8F7F3] z-20 py-[7rem]">
      <Image 
        src="https://utfs.io/f/aHkjIq3WKHPsxRJxoFXT4sMNqzvoDW7ixGLRkueXAaU3cr8E" 
        alt="Map of Canada" 
        fill
        className="absolute object-contain sm:object-left-top sm:opacity-30 sm:block hidden"
      />
      <div className="absolute -top-2 h-4 w-screen z-0 hidden sm:block">
        <Image 
          src="/transition.svg" 
          alt="Transition illustration"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="container mx-auto grid gap-12 sm:grid-cols-2 items-center justify-center h-full">
        <div className="relative w-full h-[650px]">
          <Image 
            src="https://utfs.io/f/aHkjIq3WKHPsxRJxoFXT4sMNqzvoDW7ixGLRkueXAaU3cr8E" 
            alt="Map of Canada" 
            fill
            className="absolute object-contain sm:object-left-top sm:opacity-50 block sm:hidden"
          />
          <Image 
            src="https://utfs.io/f/aHkjIq3WKHPsW6zmgHjULPb6mYTCt4sv0kqGnrXNd8Zf2wyD"
            alt="Glass of Banditos" 
            fill
            className="relative object-contain object-top"
          />
        </div>
        <div className="flex flex-col sm:w-full h-auto max-w-xl gap-8 mx-8 z-30">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F90B3E]">
            A Canadian Made, Golden Smooth, Mexican Lager
          </h2>
          <p className="text-xl text-[#A29562]">
            Golden crisp and always perfectly smooth. A hint of corn sweetness and subtle hops will transport your dirty mind to the white sand beaches of the Yucatan Peninsula - where you are certainly up to no good.
          </p>

          <Button 
            size="lg"
            asChild
            className="text-white bg-[#F90B3E] hover:bg-[#F90B3E]/60 py-2 px-4 text-md">
            <Link href="#subscribe">
              Join the Banditos Familia
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
