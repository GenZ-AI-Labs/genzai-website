import { Link, useNavigate } from "react-router-dom";
import {
  Linkedin,
  Mail,
  Phone,
  Youtube,
  MapPin,
} from "lucide-react";

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/genz-main-logo.png"
                alt="GenzAI Labs Logo"
                className="w-8 h-8 object-contain rounded-sm"
              />
              <span className="text-xl font-bold">GenzAI Labs</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Transforming healthcare with AI-powered solutions for faster, more
              accurate medical diagnosis and decision-making.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@GenZAILabs"
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/genz-ai-labs/"
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-slate-300 text-sm">
                Official Research Partner with Dr. D. Y. Patil Vidyapeeth, Pune
                includes DPU Medical College, Research Centre & Super-Specialty
                Hospital
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4" />
                <a href="tel:+919923030250" className="hover:text-white transition-colors">
                  +91 99230 30250
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:doc@genzailabs.com"
                  className="hover:text-white transition-colors"
                >
                  doc@genzailabs.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-slate-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Office No. 659, Gera's Imperium Gateway, near Bhosari Metro Station, Nashik Phata Flyover, Pune – 411034
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2026 GenzAI Labs Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => navigate("/privacy-policy")}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate("/disclaimer")}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Medical Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}