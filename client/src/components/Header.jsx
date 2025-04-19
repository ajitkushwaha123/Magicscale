import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../assets"; // Replace with your actual logo import

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      dropdown: true,
      items: [
        { name: "FSSAI Food License", href: "#fssai" },
        { name: "GST Registration", href: "#gst" },
        { name: "Swiggy/Zomato Setup", href: "#zomato" },
        { name: "Accounting & Onboarding", href: "#accounting" },
      ],
    },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur bg-transparent font-poppins">
      <div className="max-w-full px-6 sm:px-12 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-semibold text-indigo-600 tracking-wide flex items-center">
            <img className="w-[64px]" src={logo} alt="Logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center text-gray-800 hover:text-indigo-600 text-sm font-medium transition">
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-8 bg-white shadow-lg rounded-md px-4 py-3 w-64 space-y-2 z-50"
                      >
                        {link.items.map((sub, subIdx) => (
                          <motion.a
                            key={subIdx}
                            href={sub.href}
                            whileHover={{ x: 5 }}
                            className="block text-gray-700 hover:text-indigo-600 text-sm transition"
                          >
                            {sub.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  key={idx}
                  href={link.href}
                  whileHover={{ scale: 1.08, color: "#4f46e5" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-800 hover:text-indigo-600 text-sm font-medium transition"
                >
                  {link.name}
                </motion.a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#get-started"
              className="bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </motion.div>

          {/* Mobile: CTA + Menu Icon */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.a
              href="#get-started"
              className="bg-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow hover:bg-indigo-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 z-50"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 left-0 h-screen w-[75%] bg-white z-40 p-6 overflow-y-auto"
            >
              <div className="space-y-5 mt-10">
                {navLinks.map((link, idx) =>
                  link.dropdown ? (
                    <div key={idx}>
                      <div className="text-gray-800 font-semibold mb-1">
                        {link.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {link.items.map((sub, subIdx) => (
                          <a
                            key={subIdx}
                            href={sub.href}
                            className="block text-gray-600 hover:text-indigo-600 text-sm"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={idx}
                      href={link.href}
                      className="block text-gray-800 font-semibold"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
