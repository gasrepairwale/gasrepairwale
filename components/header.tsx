"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Wrench } from "lucide-react"
import { trackPhoneCall } from "@/lib/analytics"

/**
 * Header Component
 * Main navigation with responsive mobile menu
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Navigation menu items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    {
      href: "#",
      label: "Locations",
      submenu: [
        { href: "/locations/pune", label: "Pune" },
        { href: "/locations/mumbai", label: "Mumbai" },
      ],
    },
  ]

  const handleCallClick = () => {
    trackPhoneCall("+918302713127")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and company name */}
        <Link href="/" className="flex items-center space-x-2">
          <Wrench className="h-6 w-6 text-orange-600" />
          <span className="text-xl font-bold text-gray-900">Gas Repaire Wale</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link href={item.href} className="text-sm font-medium hover:text-orange-600 transition-colors">
                {item.label}
              </Link>
              {/* Dropdown menu for locations */}
              {item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-orange-600"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact button and mobile menu */}
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden text-white sm:flex bg-orange-600 hover:bg-orange-700">
            <a 
              href="tel:+918302713127" 
              className="flex items-center space-x-2"
              onClick={handleCallClick}
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </Button>

          {/* Mobile menu trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium hover:text-orange-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {/* Mobile submenu */}
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-orange-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="mt-4 bg-orange-600 hover:bg-orange-700">
                  <a 
                    href="tel:+918302713127" 
                    className="flex items-center space-x-2"
                    onClick={handleCallClick}
                  >
                    <Phone className="h-4 w-4" />
                    <span>+91 83027 13127</span>
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
