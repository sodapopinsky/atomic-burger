// menu-item.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  photoPath: string;
  itemName: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  photoPath,
  itemName,
  description,
}) => {
  return (
    <div className="w-full rounded-lg border border-gray-300 bg-white overflow-hidden h-full">
      <div className="flex flex-col h-full">
        <div className="w-full h-[240px] sm:h-[200px] relative bg-gray-200 flex-shrink-0">
          <Image
            src={photoPath}
            alt={itemName}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <div className="text-xl font-bold text-atomic-text-900 mb-1">
              {itemName}
            </div>
            <div className="line-clamp-2 text-atomic-text-100">
              {description}
            </div>
          </div>
          <div className="mt-4">
            <Button
              variant="outline"
              className="w-full border-atomic-mustard bg-white text-atomic-red text-[17px] font-bold py-5 rounded-full
           hover:bg-white hover:text-atomic-red hover:opacity-90 hover:scale-105 transition-all duration-200 "
              onClick={() =>
                window.open(
                  "https://order.toasttab.com/online/locations/0923b028-58c3-4589-850d-52099c1442c9#!/",
                  "_blank"
                )
              }>
              Order Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
