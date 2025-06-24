import React, { useState } from 'react';

const faqData = [
  {
    q: 'What is the full form of FSSAI?',
    a: 'FSSAI stands for Food Safety and Standards Authority of India.'
  },
  {
    q: 'What is FoSCos?',
    a: 'FoSCos stands for Food Safety Compliance System — it is the online portal used for FSSAI license registration and compliance.'
  },
  {
    q: 'Why Register Under FSSAI and get FoSCos License?',
    a: 'It is mandatory for food businesses in India. It ensures legal compliance, customer trust, and avoids penalties.'
  },
  {
    q: 'What are the types of FoSCos Food Licenses?',
    a: 'Basic, State, and Central licenses depending on turnover and business reach.'
  },
  {
    q: 'How much does FoSCos Food License Registration under FSSAI cost?',
    a: 'Costs depend on license type: Basic (from ₹100/year), State and Central vary based on turnover.'
  },
  {
    q: 'What are the documents required for FoSCos License Registration?',
    a: 'ID proof, address proof, passport photo, business registration, and food category details.'
  },
  {
    q: 'What is the validity period for the FSSAI FoSCos License?',
    a: '1 to 5 years depending on what is selected at registration.'
  },
  {
    q: 'What is FLRS?',
    a: 'FLRS was the older licensing portal now replaced by FoSCos.'
  },
  {
    q: 'How to check my FSSAI FoSCos License Renewal status?',
    a: 'Visit the FoSCos portal or contact 08069029400 for real-time help.'
  },
  {
    q: 'Do I need to issue a different FoSCos License for the different states?',
    a: 'Yes, different states require separate licenses unless you have a Central license.'
  },
  {
    q: 'I am importing food items for selling in India even then it requires FoSCos Food License?',
    a: 'Yes, importers must get a Central FSSAI License.'
  },
  {
    q: 'Can I transfer my FSSAI License to someone else?',
    a: 'No, it is not transferable but a new license can be applied for the new owner.'
  },
  {
    q: 'I am planning to sell some Homemade food items online on a small scale, do I need to get a FSSAI enabled FoSCos License?',
    a: 'Yes, even home-based food sellers must register under Basic license.'
  },
  {
    q: 'What will happen if I forget to renew my Food License?',
    a: 'You may face penalties and must stop operations until renewal is done.'
  },
  {
    q: 'I plan to start an import-export business. Do I need an FoSCos License?',
    a: 'Yes, FoSCos license is mandatory for import-export food businesses.'
  },
  {
    q: 'How can I make changes to my existing FSSAI Certificate?',
    a: 'Apply for modification on FoSCos portal or take our assistance.'
  },
  {
    q: 'Is the FoSCos license needed for a catering business authorized by the Central Government?',
    a: 'Yes, all catering businesses need a valid FSSAI license regardless of government association.'
  },
];

// Accept isDarkMode as a prop
const FssaiFAQ = ({ isDarkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div
      // Main container background and text color
      className={`py-16 px-4 sm:px-6 md:px-20 font-poppins ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-lime-50 to-green-100 text-gray-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          // Heading text color
          className={`text-3xl sm:text-4xl font-bold text-center mb-8 ${
            isDarkMode ? 'text-lime-400' : 'text-green-900'
          }`}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              // Individual FAQ item background and shadow
              className={`rounded-lg shadow-md overflow-hidden ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <button
                onClick={() => handleToggle(index)}
                // FAQ button (question) text and hover background color
                className={`w-full text-left px-5 py-4 font-medium focus:outline-none ${
                  isDarkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-800 hover:bg-green-50'
                }`}
              >
                {faq.q}
              </button>
              {expandedIndex === index && (
                <div
                  // FAQ answer text color
                  className={`px-5 pb-4 text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              // "Show More Questions" button background and text color
              className={`px-5 py-2 rounded-full transition ${
                isDarkMode ? 'bg-lime-600 text-white hover:bg-lime-700' : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Show More Questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FssaiFAQ;