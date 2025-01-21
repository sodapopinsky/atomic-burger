"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems = [
    { name: "MENU", href: "/" }, // Changed href to "/"
  
    { name: "CONTACT US", href: "/contact" },
    // { name: "FUNDRAISERS", href: "#fundraisers" },
  ];

  const handleMobileNavClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white border-b z-50 h-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="hidden min-[540px]:block">
              <Image
                src="/images/horizontal-logo.svg"
                alt="Atomic Burger Logo"
                width={280}
                height={50}
              />
            </div>
            <div className="min-[540px]:hidden">
              <Image
                src="/images/circle-logo.svg"
                alt="Atomic Burger Logo"
                width={50}
                height={50}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="whitespace-nowrap">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      href={item.href}
                      legacyBehavior
                      passHref
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }>
                      <a className="text-atomic-text hover:text-atomic-text-900 font-medium px-2 py-2">
                        {item.name}
                      </a>
                    </Link>
                  </NavigationMenuItem>
                ))}
                
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="https://order.toasttab.com/online/atomic-burger-veterans?diningOption=takeout"
              className="flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer">
            <Button
  variant="outline"
  className="border-atomic-mustard bg-white text-atomic-red rounded-full p-5 font-bold
             hover:bg-white hover:text-atomic-red hover:opacity-90 hover:scale-105 transition-all duration-200"
>
  GIFT CARDS
</Button>
            </Link>

            <Link
              href="https://order.toasttab.com/online/locations/0923b028-58c3-4589-850d-52099c1442c9#!/"
              className="flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer">
            <Button
  variant="outline"
  className="bg-atomic-red border text-white rounded-full p-5 font-bold
             hover:bg-atomic-red hover:text-white hover:opacity-90 hover:scale-105 transition-all duration-200"
>
  ORDER NOW
</Button>
            </Link>
          </div>

          {/* Mobile Navigation - Order Button and Menu */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link
              href="https://order.toasttab.com/online/locations/0923b028-58c3-4589-850d-52099c1442c9#!/"
              target="_blank"
              rel="noopener noreferrer">
          <Button
  variant="outline"
  className="bg-atomic-red border text-white rounded-full p-5 font-bold
             hover:bg-atomic-red hover:text-white hover:opacity-90 hover:scale-105 transition-all duration-200"
>
  ORDER NOW
</Button>
            </Link>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="text-left">Atomic Burger</SheetTitle>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      onClick={handleMobileNavClick}
                      className="text-lg font-medium text-gray-700 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
                    <Link
                      key="gift-cards"
                        href="https://order.toasttab.com/online/atomic-burger-veterans?diningOption=takeout"
                      target="_blank"
                      onClick={handleMobileNavClick}
                      className="text-lg font-medium text-gray-700 hover:text-gray-900">
                      GIFT CARDS
                    </Link>

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
