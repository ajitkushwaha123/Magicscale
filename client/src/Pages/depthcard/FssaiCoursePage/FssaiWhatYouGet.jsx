// import React, { useState } from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const FssaiBenefits = () => {
//   const benefits = [
//     {
//       title: 'TRUST OF THE CUSTOMERS',
//       desc: "An authentic communication is necessary to gain the customer's trust. It will ensure better service and also keep the customers from unhealthy and adulterated food supply."
//     },
//     {
//       title: 'LEGAL ADVANTAGES',
//       desc: "FSSAI Certification will enhance the chance of legal enforcement and control over the department at a certain point and will encourage the establishment of several things to a particular area."
//     },
//     {
//       title: 'GOVERNMENT FUNDING AND LOANS',
//       desc: "The FSSAI registration will offer the privileges of Government Funding and Loans that can be easily accessible for the business operators."
//     },
//     {
//       title: 'USE OF FSSAI LOGO',
//       desc: "The use of FSSAI logo on your product will normally create goodwill trust worthiness amongst the consumers."
//     },
//     {
//       title: 'BRAND VALUE',
//       desc: "A company will automatically acquire Brand Value once it is FSSAI registered."
//     },
//     {
//       title: 'EXPANSION OF BUSINESS',
//       desc: "The FSSAI license will provide a wider scope and privilege of expansion at any geographic location."
//     },
//     {
//       title: 'RECOGNITION OF GOVERNMENT',
//       desc: "Government of India recognizes the FSSAI Registration resulting in to customer trust and huge base of consumers."
//     },
//     {
//       title: 'PERMIT OF FOOD BUSINESS',
//       desc: "FSSAI License speaks about the safety of the customers concerning to food business."
//     },
//     {
//       title: 'BENEFITS FROM GOVERNMENT ACTIONS ON NON-COMPLIANCE',
//       desc: "Government will take action and bestow the help on the company in case of any non-compliance issue in the future."
//     },
//     {
//       title: 'BOOST UP YOUR BUSINESS',
//       desc: "If a business is FSSAI registered, it will create handsome client base and boost up the business at a larger scale."
//     }
//   ];

//   const [expanded, setExpanded] = useState(false);
//   const visibleItems = expanded ? benefits : benefits.slice(0, 3);

//   return (
//     <section className="bg-sky-100 text-gray-800 py-16 px-6 sm:px-10 md:px-20 font-poppins">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 border-b border-green-500 inline-block pb-2">
//           Benefits of FSSAI FoSCos Certificate
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {visibleItems.map((item, idx) => (
//             <div key={idx} className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1" size={20} />
//               <div>
//                 <h3 className="font-bold text-green-700 text-sm sm:text-base mb-1 uppercase">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-700 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {!expanded && (
//           <div className="text-center mt-8">
//             <button
//               onClick={() => setExpanded(true)}
//               className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//             >
//               View All Benefits
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FssaiBenefits;












// import React, { useState } from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const FssaiBenefits = () => {
//   const benefits = [
//     {
//       title: 'Trust of the Customers',
//       desc: "Authentic communication is key to gaining customers' trust and avoiding adulterated food supply.",
//     },
//     {
//       title: 'Legal Advantages',
//       desc: "FSSAI Certification supports legal enforcement and smoother business setup.",
//     },
//     {
//       title: 'Government Funding and Loans',
//       desc: "Easier access to government schemes and loans for registered food businesses.",
//     },
//     {
//       title: 'Use of FSSAI Logo',
//       desc: "Build goodwill and brand trust by showcasing the official FSSAI logo.",
//     },
//     {
//       title: 'Brand Value',
//       desc: "Registration boosts brand recognition and credibility in the market.",
//     },
//     {
//       title: 'Expansion of Business',
//       desc: "FSSAI license allows business growth across multiple locations.",
//     },
//     {
//       title: 'Recognition by Government',
//       desc: "Official registration builds consumer trust backed by government validation.",
//     },
//     {
//       title: 'Permit for Food Business',
//       desc: "Legal proof that your food business prioritizes customer safety.",
//     },
//     {
//       title: 'Support Against Non-Compliance',
//       desc: "Registered businesses may receive help during future compliance issues.",
//     },
//     {
//       title: 'Boost Your Business',
//       desc: "Increased client base and better business growth opportunities.",
//     },
//   ];

//   const [expanded, setExpanded] = useState(false);
//   const visibleItems = expanded ? benefits : benefits.slice(0, 4);

//   return (
//     <section className="bg-gradient-to-br from-sky-50 to-sky-100 text-gray-800 py-16 px-6 sm:px-10 md:px-20 font-poppins">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-green-700">
//           Benefits of FSSAI FoSCoS Certificate
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {visibleItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex items-start gap-4 bg-white shadow-md hover:shadow-lg rounded-lg p-5 transition duration-300"
//             >
//               <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
//               <div>
//                 <h3 className="font-semibold text-lg text-green-800 mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {!expanded && (
//           <div className="text-center mt-10">
//             <button
//               onClick={() => setExpanded(true)}
//               className="px-6 py-2 bg-green-600 text-white text-sm sm:text-base font-medium rounded hover:bg-green-700 transition"
//             >
//               View All Benefits
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FssaiBenefits;








import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const benefits = [
  {
    emoji: "🤝",
    title: "Trust of the Customers",
    desc: "Authentic communication is key to gaining customers' trust and avoiding adulterated food supply.",
  },
  {
    emoji: "⚖️",
    title: "Legal Advantages",
    desc: "FSSAI Certification supports legal enforcement and smoother business setup.",
  },
  {
    emoji: "💰",
    title: "Government Funding and Loans",
    desc: "Easier access to government schemes and loans for registered food businesses.",
  },
  {
    emoji: "✅",
    title: "Use of FSSAI Logo",
    desc: "Build goodwill and brand trust by showcasing the official FSSAI logo.",
  },
  {
    emoji: "📈",
    title: "Brand Value",
    desc: "Registration boosts brand recognition and credibility in the market.",
  },
  {
    emoji: "🌐",
    title: "Expansion of Business",
    desc: "FSSAI license allows business growth across multiple locations.",
  },
  {
    emoji: "🏛️",
    title: "Recognition by Government",
    desc: "Official registration builds consumer trust backed by government validation.",
  },
  {
    emoji: "📜",
    title: "Permit for Food Business",
    desc: "Legal proof that your food business prioritizes customer safety.",
  },
  {
    emoji: "🛡️",
    title: "Support Against Non-Compliance",
    desc: "Registered businesses may receive help during future compliance issues.",
  },
  {
    emoji: "🚀",
    title: "Boost Your Business",
    desc: "Increased client base and better business growth opportunities.",
  },
];

const FssaiBenefits = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? benefits : benefits.slice(0, 4);

  return (
    <section className="bg-gradient-to-br from-sky-50 to-sky-100 text-gray-800 py-16 px-6 sm:px-10 md:px-20 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-green-700">
          Benefits of FSSAI FoSCoS Certificate
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <AnimatePresence>
            {visibleItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 bg-white shadow-md hover:shadow-lg rounded-lg p-5 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.05, duration: 0.4, type: "spring" }}
              >
                <div className="text-3xl">{item.emoji}</div>
                <div>
                  <h3 className="font-semibold text-lg text-green-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="px-6 py-2 bg-green-600 text-white text-sm sm:text-base font-medium rounded hover:bg-green-700 transition inline-flex items-center gap-2"
          >
            {expanded ? (
              <>
                View Less <FaChevronUp />
              </>
            ) : (
              <>
                View All Benefits <FaChevronDown />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FssaiBenefits;
