// import React from "react";
// import {
//   UtensilsCrossed,
//   Wine,
//   ChefHat,
//   Truck,
//   Factory,
//   Store,
//   Warehouse,
//   ShoppingBasket,
//   ShoppingCart,
//   Bus,
//   MoreHorizontal,
// } from "lucide-react";

// const businesses = [
//   { label: "Canteens", icon: <UtensilsCrossed className="w-8 h-8" />, desc: "Corporate, school or hospital kitchens" },
//   { label: "Clubs", icon: <Wine className="w-8 h-8" />, desc: "Clubs serving food & drinks" },
//   { label: "Dhabas", icon: <ChefHat className="w-8 h-8" />, desc: "Highway/local dhaba-style eateries" },
//   { label: "Distributors", icon: <Truck className="w-8 h-8" />, desc: "Food & beverage distribution networks" },
//   { label: "Food Processors", icon: <Factory className="w-8 h-8" />, desc: "Factories or food manufacturing units" },
//   { label: "Restaurants", icon: <UtensilsCrossed className="w-8 h-8" />, desc: "Fine-dine, cafes, or casual dining" },
//   { label: "Retailers", icon: <Store className="w-8 h-8" />, desc: "Shops selling packaged or loose food" },
//   { label: "Storage Units", icon: <Warehouse className="w-8 h-8" />, desc: "Cold storage, godowns or warehouses" },
//   { label: "Suppliers", icon: <ShoppingBasket className="w-8 h-8" />, desc: "Bulk ingredient & raw material suppliers" },
//   { label: "Transporters", icon: <Bus className="w-8 h-8" />, desc: "Food transport or delivery fleets" },
//   { label: "Wholesalers", icon: <ShoppingCart className="w-8 h-8" />, desc: "Bulk sellers of food items" },
//   {
//     label: "Others (Street Vendors)",
//     icon: <MoreHorizontal className="w-8 h-8" />,
//     desc: "Including redi sellers, hawkers, and local food carts",
//   },
// ];

// const FssaiEligibility = () => {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//           Who Needs an FSSAI FoSCoS License?
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Whether you're a large food business or a small street vendor, FSSAI registration is mandatory to legally prepare, store, distribute, or sell food in India.
//         </p>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
//           {businesses.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
//             >
//               <div className="text-indigo-600 mb-3">{item.icon}</div>
//               <h3 className="text-gray-800 font-semibold text-base mb-1 text-center">
//                 {item.label}
//               </h3>
//               <p className="text-gray-600 text-sm text-center">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FssaiEligibility;








import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const businesses = [
  {
    label: "Canteens",
    emoji: "🍽️",
    desc: "Corporate, school or hospital kitchens",
    details: "Canteens must register under FSSAI to ensure food served to large groups is hygienic and safe.",
  },
  {
    label: "Clubs",
    emoji: "🍷",
    desc: "Clubs serving food & drinks",
    details: "Clubs that offer food or beverages must comply with FSSAI rules for preparation and service.",
  },
  {
    label: "Dhabas",
    emoji: "🧑‍🍳",
    desc: "Roadside dhaba-style eateries",
    details: "Dhabas must be registered to ensure roadside food meets safety standards.",
  },
  {
    label: "Distributors",
    emoji: "🚚",
    desc: "Food & beverage distribution",
    details: "Distributors moving packaged or fresh food need FSSAI registration for traceability.",
  },
  {
    label: "Food Processors",
    emoji: "🏭",
    desc: "Food manufacturing units",
    details: "Factories involved in food processing must be licensed to comply with hygiene norms.",
  },
  {
    label: "Restaurants",
    emoji: "🍛",
    desc: "Fine-dine, cafes, or casual dining",
    details: "Restaurants need FSSAI license to legally serve and prepare food for public consumption.",
  },
  {
    label: "Retailers",
    emoji: "🏬",
    desc: "Shops selling packaged or loose food",
    details: "Any food retail outlet must register under FSSAI before selling food items.",
  },
  {
    label: "Storage Units",
    emoji: "📦",
    desc: "Cold storage, godowns or warehouses",
    details: "Storage facilities must register to ensure food preservation standards are met.",
  },
  {
    label: "Suppliers",
    emoji: "🧺",
    desc: "Bulk ingredient & raw material suppliers",
    details: "Suppliers of ingredients must register under FSSAI to maintain supply chain integrity.",
  },
  {
    label: "Transporters",
    emoji: "🚌",
    desc: "Food transport or delivery fleets",
    details: "Vehicles transporting food must comply with FSSAI transport standards.",
  },
  {
    label: "Wholesalers",
    emoji: "🛒",
    desc: "Bulk sellers of food items",
    details: "Wholesalers handling large food volumes must register for traceability and compliance.",
  },
  {
    label: "Others (Street Vendors)",
    emoji: "🌯",
    desc: "Redi sellers, hawkers, and food carts",
    details: "Street vendors must register to legally serve food, even if operating on a small scale.",
  },
];

const FssaiEligibility = () => {
  const [selected, setSelected] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
      },
    }),
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Who Needs an FSSAI FoSCoS License?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you're running a large food business or a street food stall, FSSAI registration is mandatory to legally operate in India.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
          {businesses.map((item, idx) => (
            <motion.div
              key={idx}
              className="cursor-pointer bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-300 flex flex-col items-center justify-center"
              onClick={() => setSelected(item)}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="text-gray-800 font-semibold text-base mb-1 text-center">
                {item.label}
              </h3>
              <p className="text-gray-600 text-sm text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg text-left"
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <div className="text-5xl mb-3 text-center">{selected.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{selected.label}</h3>
              <p className="text-gray-600 text-sm text-center">{selected.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FssaiEligibility;
