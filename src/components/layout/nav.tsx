'use client'

import React from 'react'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav 
      className="fixed top-0 left-0 z-50 w-full h-28 flex items-center justify-between bg-white"
      style={{
        backgroundImage: "url('/lines.svg')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        backgroundSize: "auto 12px",
      }}
    >
      <div className="container flex flex-row justify-between align-center mx-auto h-24 p-2">
        <div className=""></div>
        <div className="">
          <Image 
            src="/logo.png"
            alt="Banditos logo"
            width={124}
            height={80}
            className=""
          />
        </div>
        <div className=""></div>
      </div>
    </nav>
  )
}