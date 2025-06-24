// import React from "react";
// import { CheckCircle } from "lucide-react";

// const documents = [
//   {
//     title: "PAN Card",
//     description: "Required for tax and verification purposes.",
//   },
//   {
//     title: "FSSAI License",
//     description: (
//       <>
//         Mandatory for food safety compliance.{" "}
//         <a href="#" className="text-blue-600 underline">
//           Apply here
//         </a>
//       </>
//     ),
//   },
//   {
//     title: "Bank Account Details",
//     description: "Used to deposit your payouts securely.",
//   },
//   {
//     title: "GST Number (if applicable)",
//     description: "Needed for invoicing and tax compliance.",
//   },
//   {
//     title: "Menu & Profile Food Image",
//     description: (
//       <>
//         Showcase your best dishes to attract customers.{" "}
//         <a href="#" className="text-blue-600 underline">
//           Refer here
//         </a>
//       </>
//     ),
//   },
// ];

// const DocumentsRequired = () => {
//   return (
//     <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           Documents Required
//         </h2>
//         <p className="text-gray-600 mb-8">
//           Keep the following documents ready to get started quickly and ensure a smooth registration process.
//         </p>

//         <div className="grid gap-6 md:grid-cols-2">
//           {documents.map((doc, idx) => (
//             <div
//               key={idx}
//               className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm"
//             >
//               <CheckCircle className="text-green-600 mt-1 mr-3" size={24} />
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-900">
//                   {doc.title}
//                 </h4>
//                 <p className="text-sm text-gray-700 mt-1">{doc.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DocumentsRequired;





import React from "react";
import { CheckCircle } from "lucide-react";

const documents = [
  {
    title: "PAN Card",
    description: "Required for tax and verification purposes.",
  },
  {
    title: "FSSAI License",
    description: (
      <>
        Mandatory for food safety compliance.{" "}
        <a
          href="https://magicscale.in/services/fssai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline font-medium"
        >
          Apply here
        </a>
      </>
    ),
  },
  {
    title: "Bank Account Details",
    description: "Used to deposit your payouts securely.",
  },
  {
    title: "GST Number (if applicable)",
    description: "Needed for invoicing and tax compliance.",
  },
  {
    title: "Menu & Profile Food Image",
    description: (
      <>
        Showcase your best dishes to attract customers.{" "}
        <a href="#" className="text-blue-600 underline font-medium">
          Refer here
        </a>
      </>
    ),
  },
];

const DocumentsRequired = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Documents Required
        </h2>
        <p className="text-gray-600 mb-8">
          Keep the following documents ready to get started quickly and ensure a smooth registration process.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <CheckCircle className="text-green-600 mt-1 mr-3" size={24} />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {doc.title}
                </h4>
                <p className="text-sm text-gray-700 mt-1">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
