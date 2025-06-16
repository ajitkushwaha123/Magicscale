import {
  Briefcase,
  UtensilsCrossed,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";

const services = [
  {
    title: "Account Handling",
    description:
      "Efficient bookkeeping and account management tailored for F&B businesses.",
    icon: <Briefcase className="h-8 w-8 text-indigo-500" />,
    // price: "₹1,999/month",
    price: "₹1/month",
  },
  {
    title: "Swiggy & Zomato Setup",
    description:
      "Get listed on top food delivery platforms with complete setup and support.",
    icon: <UtensilsCrossed className="h-8 w-8 text-orange-500" />,
    // price: "₹4,999 one-time",
     price: "₹1 one-time",
  },
  {
    title: "GST Registration & Filing",
    description:
      "Complete assistance with GST registration and timely filing of returns.",
    icon: <FileText className="h-8 w-8 text-emerald-500" />,
    // price: "From ₹2,499",
     price: "From ₹1",
  },
  {
    title: "FSSAI Registration",
    description:
      "Ensure food safety compliance with fast and reliable FSSAI registration.",
    icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
    //price: "₹1,299 one-time",
    price: "₹1 one-time",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#E9EFFD] to-white pt-[60px] lg:pt-[140px] pb-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Soft Blobs for depth */}
      <div className="absolute top-[-100px] left-[-120px] w-[400px] h-[400px] bg-indigo-300 opacity-20 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-120px] w-[400px] h-[400px] bg-blue-300 opacity-20 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          <Title preTitle={"Services"} title={"We Offer"} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-md sm:text-lg text-gray-600 mb-14 max-w-2xl mx-auto"
        >
          From online setup to government compliance — we’ve got your food
          business covered end-to-end.
        </motion.p>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="mt-auto text-indigo-600 font-bold text-lg">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-300">
            Learn More About Our Process →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
