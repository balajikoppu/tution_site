import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaArrowRight } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brnad */}
        <div>
          <h2 className="text-emerald-600 text-2xl font-bold mb-3">KG to PG</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Connecting learners and tutors with trust and transparency. Quality
            tutoring made simple, Online or at your door step.{" "}
          </p>
        </div>
        {/* Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Find Tutors
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Become a Tutor
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        {/*Support & Legal*/}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>
        {/*Socials/Subscribe*/}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/80 hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/80 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Get in touch
            </h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-auto px-4 py-2 rounded-l-md bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1"
              />
              <button className="px-2 py-3 bg-emerald-600  hover:bg-emerald-700 text-white rounded-md text-sm transition-colors duration-200">
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 text-center py-4 text-xs text-white/80">
        &copy; {new Date().getFullYear()} KG to PG, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
