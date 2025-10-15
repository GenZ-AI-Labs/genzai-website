
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import StrokeInsightz from "./pages/products/StrokeInsightz";
import CXRInsightz from "./pages/products/CXRInsightz";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import { DemoRequest } from "./pages/DemoRequest";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StrokeWhitePaper from "./pages/Strokewhitepaper";
import ApplyNowPage from "./pages/ApplyNowPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/stroke-insightz" element={<StrokeInsightz />} />
              <Route path="/products/cxr-insightz" element={<CXRInsightz />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/demo-request" element={<DemoRequest />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/stroke-white-paper" element={<StrokeWhitePaper />} />
              <Route path="/apply-now" element={<ApplyNowPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
