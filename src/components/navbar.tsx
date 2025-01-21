import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    { name: "MENU", href: "#menu" },
    { name: "GIFT CARDS", href: "https://order.toasttab.com/online/atomic-burger-veterans?diningOption=takeout" },
    // { name: "FUNDRAISERS", href: "#fundraisers" },
  ];

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
                    <Link target="_blank" href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="text-[#525A61] hover:text-gray-900 font-medium px-2 py-2">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="https://order.toasttab.com/online/locations/0923b028-58c3-4589-850d-52099c1442c9#!/"
              className="flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                variant="default"
                className="border-[#525A61] border bg-white text-[#525A61] rounded-full p-5 font-bold">
                ORDER ONLINE
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
                variant="default"
                className="border-[#525A61] border bg-white text-[#525A61] rounded-full p-5 font-bold">
                ORDER ONLINE
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="text-left">Menu</SheetTitle>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      target="_blank"
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
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