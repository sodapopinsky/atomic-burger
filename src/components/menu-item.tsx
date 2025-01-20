import React from 'react';

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
          <img
            src={photoPath}
            alt={itemName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 text-left w-full">
          <h2 className="text-2xl font-bold mb-2">{itemName}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;