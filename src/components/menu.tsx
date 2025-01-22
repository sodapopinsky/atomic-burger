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
      description: "Our custom beef blend, house ground, hand pattied, and cooked to order",
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
    description: "The perfect accomplice to your meal",
    items: [
      {
        photoPath: "/images/menu-items/french-fries.png",
        itemName: "French Fries",
        description: "Crispy thrice-cooked fries, served with your choice of sauce."
      },
      {
        photoPath: "/images/menu-items/edamame.png",
        itemName: "Edamame",
        description: "Freshly cooked soybeans seasoned with a dash of salt."
      },
     
  
    ]
  },
  {
    title: "House Made Sauces",
    description: "Crafted in-house daily to complement your fries",
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
        description: "A smooth blend of mayo and sriracha with a touch of tangy heat"
      },
      {
        photoPath: "/images/menu-items/truffle-mayo.png",
        itemName: "Truffle Mayo",
        description: "Luxurious mayo infused with black truffle and subtle herbs"
      }
    ]
},
{
  title: "Shakes",
  description: "A major league lineup of flavors.  Choose carefully -- or don't, they're re all delicious",
  items: [
    {
      photoPath: "/images/menu-items/chocolate.png",
      itemName: "Chocolate",
      description: "Classic chocolate shake made with rich Ghirardelli cocoa"
    },
    {
      photoPath: "/images/menu-items/vanilla.png",
      itemName: "Vanilla",
      description: "Classic vanilla shake made with premium ice cream"
    },
    {
      photoPath: "/images/menu-items/cookies-n-creme.png",
      itemName: "Cookies N Creme",
      description: "Our house shake blended with crushed chocolate cookie pieces"
    },
 
    {
      photoPath: "/images/menu-items/mint-chip.png",
      itemName: "Mint Chocolate Chip",
      description: "Cool mint ice cream blended with chocolate chip pieces"
    },
    {
      photoPath: "/images/menu-items/nutella-marshmallow.png",
      itemName: "Nutella Marshmallow",
      description: "Creamy Nutella shake topped with torched, gooey marshmallows"
    },
    {
      photoPath: "/images/menu-items/peanut-butter-chocolate-chip.png",
      itemName: "Peanut Butter Chocolate Chip",
      description: "Rich peanut butter shake with chocolate chips throughout"
    },
    {
      photoPath: "/images/menu-items/salted-caramel.png",
      itemName: "Salted Caramel",
      description: "Sweet and salty caramel topped with Kosher salt"
    },
    {
      photoPath: "/images/menu-items/strawberry.png",
      itemName: "Strawberry",
      description: "Fresh strawberry pie blended with our house ice cream"
    },
 
  ]
},
  ];
  const Menu = () => {
    return (
   
      <div className="w-full px-4 py-8"> 
        {menuData.map((section, index) => (
          <section key={index} className="mb-12">
            <div className="text-2xl font-bold mb-2">{section.title}</div>
            <p className="text-atomic-text-100 mb-6 text-[17px] font-medium">{section.description}</p>
            
            {/* Changed grid columns to auto-fill with a min width to fill space fully */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 w-full">
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