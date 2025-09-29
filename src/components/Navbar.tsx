
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">GenzaiLabs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/about") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <Link
                        to="/products/stroke-insightz"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        Stroke Insightz
                      </Link>
                      <Link
                        to="/products/cxr-insightz"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        CXR Insightz
                      </Link>
                      <Link
                        to="/products"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
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
                      isActive("/events") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    Events
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/contact") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/careers"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/careers") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    Careers
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/products"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/events"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <div className="pt-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
