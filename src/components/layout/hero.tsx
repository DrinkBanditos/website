'use client'

import Image from 'next/image'

export default function hero() {
  return (
    <section className="relative min-h-screen w-screen">
      <div className="fixed flex flex-col items-center justify-center h-screen w-screen z-0 overflow-hidden">
        <div className="absolute h-full mx-auto w-[200vw] sm:w-screen z-0">
          <Image
            src="https://utfs.io/f/aHkjIq3WKHPsrKwG7kCUVZLFdPefBEYsSpWvGOtTJ93qzr74"
            alt="An illustration of a barron desert landscape"
            fill
            className="object-contain sm:object-contain object-bottom sm:object-bottom"
            priority
          />
          <Image
            src="https://utfs.io/f/aHkjIq3WKHPsVAvolTNbQENZDjqalMAmTCd0Sg4euwf9rnJ3"
            alt="An illustration of clouds in the sky"
            fill
            className="object-contain object-top opacity-50"
            priority
          />
        </div>
        <div className="relative flex flex-col gap-24 sm:gap-10 h-full justify-center items-center pt-32">
          <div className="relative w-[82vw] sm:w-[520px] h-[50vw] sm:h-[290px] sm:min-h-[290px]"> 
            <Image 
              src="/logo.png" 
              alt="Banditos color logo" 
              fill
            />
          </div>  
          <div className="relative w-[70vw] sm:w-[370px] h-[98vw] sm:h-[528px] sm:min-h-[528px]"> 
            <Image 
              src="/can.png" 
              alt="La Familia Logo" 
              fill
            />
          </div> 
        </div>
      </div>
    </section>
  )
}


