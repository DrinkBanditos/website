'use client'

import React from 'react'
import { SubscribeForm } from '~/app/components/subscribe-form'

export default function Subscribe() {
  return (
    <section id="subscribe" className="relative flex flex-col items-center justify-center bg-white z-20 pt-[10rem] pb-[10rem]">
      <div className="container mx-auto grid gap-12 max-w-3xl sm:grid-cols-1 items-center justify-center h-full">
        <div className="flex flex-col sm:w-full h-auto gap-8 z-30">
          <h2 className="text-4xl text-center md:text-6xl font-bold text-[#F90B3E]">
            Looking to Join The Banditos Familia?
          </h2>
          <p className="text-xl text-center text-[#A29562]">
            If you crave authenticity, good times, breaking rules, and always doing what you love... And never what you are told, you&apos;re a naturally born Bandito.
          </p>
        </div>

        <SubscribeForm />

      </div>

      
    </section>
  )
}
