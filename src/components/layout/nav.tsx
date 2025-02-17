"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = () => (
    <>
      <Link href="#subscribe" className="text-red-500 font-bold text-xl hover:text-gray-700 transition-colors">
        Join La Familia
      </Link>
      <Link href="https://www.lonestarcantina.ca/" className="text-black font-bold text-xl hover:text-gray-700 transition-colors">
        Drink @ LoneStar
      </Link>
    </>
  )

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
      <div className="container flex flex-row justify-between items-center mx-auto h-16 p-2">
        <div className="">
          <Image src="/logo-ho.png" alt="Banditos logo" width={300} height={80} className="" />
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                <Image src="/logo-ho.png" alt="Banditos logo" width={200} height={53} className="mb-6" />
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

