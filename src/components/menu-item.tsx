import React from 'react';
import Image from 'next/image';

interface MenuItemProps {
  photoPath: string;
  itemName: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ photoPath, itemName, description }) => {
  return (
    <div className="w-full rounded-lg border border-gray-300 bg-white overflow-hidden sm:max-w-sm">
      <div className="flex flex-col">
        <div className="w-full h-64 sm:h-64 relative bg-gray-200">
          <Image
            src={photoPath}
            alt={itemName}
            fill
            sizes="(min-width: 640px) 384px, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4 text-left w-full">
          <h2 className="text-2xl font-bold mb-2">{itemName}</h2>
          <p className="text-gray-700 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;