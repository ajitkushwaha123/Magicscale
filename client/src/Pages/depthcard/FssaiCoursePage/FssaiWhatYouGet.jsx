import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const FssaiBenefits = () => {
  const benefits = [
    {
      title: 'TRUST OF THE CUSTOMERS',
      desc: "An authentic communication is necessary to gain the customer's trust. It will ensure better service and also keep the customers from unhealthy and adulterated food supply."
    },
    {
      title: 'LEGAL ADVANTAGES',
      desc: "FSSAI Certification will enhance the chance of legal enforcement and control over the department at a certain point and will encourage the establishment of several things to a particular area."
    },
    {
      title: 'GOVERNMENT FUNDING AND LOANS',
      desc: "The FSSAI registration will offer the privileges of Government Funding and Loans that can be easily accessible for the business operators."
    },
    {
      title: 'USE OF FSSAI LOGO',
      desc: "The use of FSSAI logo on your product will normally create goodwill trust worthiness amongst the consumers."
    },
    {
      title: 'BRAND VALUE',
      desc: "A company will automatically acquire Brand Value once it is FSSAI registered."
    },
    {
      title: 'EXPANSION OF BUSINESS',
      desc: "The FSSAI license will provide a wider scope and privilege of expansion at any geographic location."
    },
    {
      title: 'RECOGNITION OF GOVERNMENT',
      desc: "Government of India recognizes the FSSAI Registration resulting in to customer trust and huge base of consumers."
    },
    {
      title: 'PERMIT OF FOOD BUSINESS',
      desc: "FSSAI License speaks about the safety of the customers concerning to food business."
    },
    {
      title: 'BENEFITS FROM GOVERNMENT ACTIONS ON NON-COMPLIANCE',
      desc: "Government will take action and bestow the help on the company in case of any non-compliance issue in the future."
    },
    {
      title: 'BOOST UP YOUR BUSINESS',
      desc: "If a business is FSSAI registered, it will create handsome client base and boost up the business at a larger scale."
    }
  ];

  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? benefits : benefits.slice(0, 3);

  return (
    <section className="bg-sky-100 text-gray-800 py-16 px-6 sm:px-10 md:px-20 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 border-b border-green-500 inline-block pb-2">
          Benefits of FSSAI FoSCos Certificate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {visibleItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <FaCheckCircle className="text-green-500 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-green-700 text-sm sm:text-base mb-1 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(true)}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              View All Benefits
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FssaiBenefits;
