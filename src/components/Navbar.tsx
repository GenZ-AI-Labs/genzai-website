import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";

export function Navbar() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <img src="/genz-ai-logo.png" alt="Logo" className="w-14" />
            </div>

            {/* <span className="text-xl font-bold text-gray-900">GENZ AI LABS</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/")
                        ? "text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/about")
                        ? "text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-teal-600">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-72 p-4 bg-white">
                      <Link
                        to="/products/ct-stroke-insightz"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md"
                      >
                        CT Stroke Insightz
                      </Link>
                      <Link
                        to="/products/mr-stroke-insightz"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md"
                      >
                        MR Stroke Insightz
                      </Link>
                      <Link
                        to="/products/asl-insightz"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md"
                      >
                        MRI ASL Insightz
                      </Link>
                      <Link
                        to="/products/tumor-insightz"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md"
                      >
                        MRI Tumor Insightz
                      </Link>
                      <Link
                        to="/products/tb-insightz"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md"
                      >
                        TB Insightz
                      </Link>
                      <Link
                        to="/products"
                        className="block px-3 py-2 text-sm text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md border-t mt-2 pt-3"
                      >
                        View All Products
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/events"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/events")
                        ? "text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    Events
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/publications"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/publications")
                        ? "text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    Publications
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/contact")
                        ? "text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/careers"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/careers")
                        ? "text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    Careers
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              className="bg-teal-500 hover:bg-teal-400 text-white shadow-sm shadow-teal-500/20"
              onClick={() => navigate("/demo-request")}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/products"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/events"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/publications"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Publications
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <div className="pt-2">
                <Button className="w-full bg-teal-500 hover:bg-teal-400 text-white shadow-sm shadow-teal-500/20">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Modals */}
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </nav>
  );
}
