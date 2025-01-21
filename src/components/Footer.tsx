// footer.tsx
'use client';

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
          <h2 className="text-4xl font-bold mb-4">Join the team</h2>
          <p className="mb-6">
            Are you passionate about good food? Do you enjoy serving people? Atomic Burger may be a great fit, and we&apos;ve got two easy ways for you to apply today!
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
        <div className="max-w-4xl mx-auto px-4">
          {/* Visit Us Today section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Visit us today!</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Metairie Location */}
              <div>
                <p className="font-bold mb-2">3934 Veterans Blvd</p>
                <p>Metairia, LA</p>
                <p className="mb-2">504.276.5026</p>
                <p>10:30AM - 10pm Daily</p>
              </div>

              {/* Baton Rouge Location */}
              <div>
                <p className="font-bold mb-2">5909 Creek Centre Dr.</p>
                <p>Baton Rouge, LA</p>
                <p className="mb-2">225.831.5135</p>
                <p>10:30AM - 12am Daily</p>
              </div>

              {/* Prairieville Location */}
              <div>
                <p className="font-bold mb-2">17122 Commerce Centre Dr.</p>
                <p>Prairieville, LA</p>
                <p className="mb-2">225.363.1012</p>
                <p>10:30AM - 10pm Daily</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto w-[200px] h-[3px] bg-atomic-mustard mb-8"></div>

          {/* Connect With Us section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            <div className="flex justify-center gap-4 mb-8">
              <Link href="https://www.facebook.com/theatomicburger" target="_blank" rel="noopener noreferrer" className="bg-atomic-mustard p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Facebook className="w-6 h-6 text-[#CD4327]" />
              </Link>
              <Link href="https://www.instagram.com/TheAtomicBurger" target="_blank" rel="noopener noreferrer" className="bg-atomic-mustard p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Instagram className="w-6 h-6 text-[#CD4327]" />
              </Link>
            </div>
            <div className="text-sm">
              Copyright © 2012- 2025 Atomic Burger. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;