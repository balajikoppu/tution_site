import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoIosMenu, IoMdArrowDropdown } from "react-icons/io";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks: { name: string; to: string }[] = [
    { name: "Home", to: "/" },
    { name: "Find Tutor", to: "/find_tutor" },
    { name: "Become a Tutor", to: "/become_tutor" },
    { name: "Pricing", to: "/" },
  ];

  const moreLinks: { name: string; to: string }[] = [
    { name: "FAQ", to: "/" },
    { name: "About Us", to: "/" },
    { name: "Contact", to: "/" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/20 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*Logo */}
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center text-2xl font-bold text-emerald-600 space-x-2"
          >
            <span>KG to PG</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden  md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-slate-700 hover:text-emerald-600 px-2 py-1 relative group"
              >
                {link.name}
                <span className="block h-0.5 bg-emerald-600 absolute bottom-0 top-0 left-0 width-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Dropdown Menu*/}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-slate-700 hover:text-emerald-600 gap-1 focus:outline-none"
              >
                More <IoMdArrowDropdown />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-slate-200">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-emerald-600 "
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="hidden md:inline-block border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hidden md:inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700 transition"
            >
              Sign Up
            </Link>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden text-slate-700 hover:text-emerald-600 focus:outline-none"
              arial-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <IoIosMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-white backdrop-blur transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        >
            <div className="p-6 space-y-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.to}
                        className="block text-2xl text-slate-800 hover:text-emerald-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}

                {/*Dropdown Menu*/}
                <div>
                    <span className="block text-xl text-slate-800 mb-2">
                        More
                    </span>
                    {moreLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            className="block text-lg text-slate-800 hover:text-emerald-600 pl-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <Link
                    to="/login"
                    className="block text-lg border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition w-max"
                    onClick={() => setMobileMenuOpen(false)}
                >   Login</Link>
                <Link
                    to="/signup"    
                    className="block text-lg bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700 transition w-max"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Sign Up
                </Link>
            </div> 
        </div>
        
    </nav>
  );
};

export default Navbar;
