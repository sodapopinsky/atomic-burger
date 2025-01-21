import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Join the team section */}
      <div className="bg-[#9FDED8] py-12 text-center">
        <div className="max-w-2xl mx-auto px-4 text-[#525A61]">
          <h2 className="text-4xl font-bold  mb-4">Join the team</h2>
          <p className="mb-6">
            Are you passionate about good food? Do you enjoy serving people? Atomic Burger may be a great fit, and we've got two easy ways for you to apply today!
          </p>
          <Link href="https://atomic-burger.r365hire.com/account">
            <Button variant="outline" className="bg-[#9FDED8] border-[#CD4327] border text-[#CD4327] hover:bg-gray-100">
              Apply Today
            </Button>
          </Link>
        </div>
      </div>

      {/* Social and Copyright section */}
      <div className="bg-[#CD4327] text-white py-8">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
          <div className="flex justify-center gap-4 mb-8">
            <Link href="https://www.facebook.com/theatomicburger" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-colors">
              <Facebook className="w-6 h-6 text-[#CD4327]" />
            </Link>
            <Link href="https://www.instagram.com/TheAtomicBurger" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-colors">
              <Instagram className="w-6 h-6 text-[#CD4327]" />
            </Link>
          </div>
          <div className="text-sm">
            Copyright © 2012- 2025 Atomic Burger. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;