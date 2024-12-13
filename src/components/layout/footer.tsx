'use client'

import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative z-50 bg-white pt-[0rem] pb-[16rem] overflow-hidden">
      
      <div 
        className="container mx-auto h-[10rem] -mb-[8rem] py-16"
        style={{
          backgroundImage: "url('/lines.svg')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top",
          backgroundSize: "auto 12px",
        }}
      >
        <p className="text-sm text-center text-[#A29562]">
          © {new Date().getFullYear()} Banditos, All rights reserved.
        </p>

        <Image 
          src="/logo-ho.png"
          alt="Banditos logo"
          width={4000}
          height={80}
          className="translate-y-[6rem] opacity-15"
        />

      </div>
      
    </footer>
  )
}
