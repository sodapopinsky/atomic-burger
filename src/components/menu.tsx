import React from 'react';
import MenuItem from './menu-item';


interface MenuItem {
  photoPath: string;
  itemName: string;
  description: string;
}

interface MenuSection {
  title: string;
  description: string;
  items: MenuItem[];
}
const menuData: MenuSection[] = [
    {
      title: "Burgers & More",
      description: "Premium burgers and sandwiches made with the finest ingredients",
      items: [
        {
          photoPath: "/images/menu-items/atomic-burger.png",
          itemName: "Atomic Burger",
          description: "A classic, perfected: freshly-ground beef, american cheese, lettuce, tomatoes, pickles, and our signature A..."
        },
        {
          photoPath: "/images/menu-items/jamburger.jpg",
          itemName: "Jamburger",
          description: "A rich combination of mayo, american cheese, and bacon-onion jam."
        },
        {
          photoPath: "/images/menu-items/green-chile-burger.jpg",
          itemName: "Green Chile Burger",
          description: "A savory southwestern burger with mayo, american cheese, and house-roasted poblano peppers."
        },
        {
          photoPath: "/images/menu-items/mushroom-swiss-burger.jpg",
          itemName: "Mushroom Swiss Burger",
          description: "Beautifully balanced with caramelized onions, grilled mushrooms, mayo, and swiss cheese."
        },
        {
          photoPath: "/images/menu-items/fried-chicken-sandwich.png",
          itemName: "Fried Chicken Sandwich",
          description: "A juicy, crispy marvel dressed with shredded lettuce, roasted garlic aioli, and dill pickles. Comes mild or hot."
        },
        {
          photoPath: "/images/menu-items/chili-cheese-dog.png",
          itemName: "Chili Cheese Dog",
          description: "An all-beef frank lavished with cheddar and house-made chili."
        }
      ]
    },
    {
      title: "Sliders",
      description: "Perfect mini burgers for any appetite",
      items: [
        {
          photoPath: "/images/menu-items/slider.png",
          itemName: "Slider",
          description: "One all-beef slider makes a great snack."
        },
        {
          photoPath: "/images/menu-items/slider-duo.png",
          itemName: "Slider Duo",
          description: "Can't decide? Choose any two sliders."
        },
        {
          photoPath: "/images/menu-items/slider-trio.png",
          itemName: "Slider Trio",
          description: "For the adventurous! Grab any three of our all beef sliders."
        },
        {
          photoPath: "/images/menu-items/slider-box.png",
          itemName: "9 Slider Party Pack",
          description: "Your choice of 9 sliders, in a box."
        }
      ]
    },
    {
      title: "Sides",
      description: "Perfect mini burgers for any appetite",
      items: [
        {
          photoPath: "/images/menu-items/french-fries.png",
          itemName: "French Fries",
          description: "Seasoned with a dash of salt, and served with your choice of sauce."
        },
        {
          photoPath: "/images/menu-items/edamame.png",
          itemName: "Edamame",
          description: "Freshly cooked soybeans seasoned with a dash of salt."
        },
       
    
      ]
    },
    {
      title: "Shakes",
      description: "Hand-spun premium shakes made with real ice cream",
      items: [
        {
          photoPath: "/images/menu-items/chocolate.png",
          itemName: "Chocolate",
          description: "Classic chocolate shake made with premium chocolate ice cream"
        },
        {
          photoPath: "/images/menu-items/vanilla.png",
          itemName: "Vanilla",
          description: "Classic vanilla shake made with premium vanilla ice cream"
        },
        {
          photoPath: "/images/menu-items/cookies-n-creme.png",
          itemName: "Cookies N Creme",
          description: "Vanilla shake blended with crushed chocolate cookie pieces"
        },
     
      
        {
          photoPath: "/images/menu-items/mint-chip.png",
          itemName: "Mint Chocolate Chip",
          description: "Cool mint ice cream blended with chocolate chips"
        },
        {
          photoPath: "/images/menu-items/nutella-marshmallow.png",
          itemName: "Nutella Marshmallow",
          description: "Creamy Nutella shake topped with marshmallow cream"
        },
        {
          photoPath: "/images/menu-items/peanut-butter-chocolate-chip.png",
          itemName: "Peanut Butter Chocolate Chip",
          description: "Rich peanut butter shake with chocolate chips throughout"
        },
        {
          photoPath: "/images/menu-items/salted-caramel.png",
          itemName: "Salted Caramel",
          description: "Sweet and salty caramel blended into a vanilla shake"
        },
        {
          photoPath: "/images/menu-items/strawberry.png",
          itemName: "Strawberry",
          description: "Fresh strawberry puree blended with vanilla ice cream"
        },
     
      ]
  },
  {
    title: "House Made Sauces",
    description: "Crafted in-house daily to perfectly complement your meal",
    items: [
      {
        photoPath: "/images/menu-items/ab-sauce.png",
        itemName: "AB Sauce",
        description: "Our signature sauce with a blend of secret spices and herbs"
      },
      {
        photoPath: "/images/menu-items/roasted-garlic.png",
        itemName: "Roasted Garlic Aioli",
        description: "Slow-roasted garlic blended into a smooth, creamy mayonnaise"
      },
      {
        photoPath: "/images/menu-items/spicy-ketchup.png",
        itemName: "Spicy Ketchup",
        description: "House-made ketchup kicked up with a proprietary blend of spices"
      },
      {
        photoPath: "/images/menu-items/sriracha-mayo.png",
        itemName: "Sriracha Mayo",
        description: "Creamy mayo meets the perfect balance of garlic and chili heat"
      },
      {
        photoPath: "/images/menu-items/truffle-mayo.png",
        itemName: "Truffle Mayo",
        description: "Luxurious mayo infused with black truffle and subtle herbs"
      }
    ]
}
  ];
const Menu = () => {
  return (
    <div className="container px-4 py-8">
      {menuData.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
          <p className="text-gray-600 mb-6">{section.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, itemIndex) => (
              <MenuItem
                key={itemIndex}
                photoPath={item.photoPath}
                itemName={item.itemName}
                description={item.description}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;