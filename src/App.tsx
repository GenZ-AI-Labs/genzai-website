
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { SmoothScroll } from "./components/SmoothScroll";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import PerfusionProductDetail from "./pages/products/PerfusionProductDetail";
import TbInsightz from "./pages/products/TbInsightz";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import { DemoRequest } from "./pages/DemoRequest";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StrokeWhitePaper from "./pages/StrokeWhitePaper";
import ApplyNowPage from "./pages/ApplyNowPage";
import Publications from "./pages/Publications";
import Disclaimer from "./pages/Disclaimer";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SmoothScroll />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/tb-insightz" element={<TbInsightz />} />
                <Route path="/products/:slug" element={<PerfusionProductDetail />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/demo-request" element={<DemoRequest />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/stroke-white-paper" element={<StrokeWhitePaper />} />
                <Route path="/apply-now" element={<ApplyNowPage />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
