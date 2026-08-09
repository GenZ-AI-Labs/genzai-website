import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { SmoothScroll } from "./components/SmoothScroll";

// NOTE: HelmetProvider is intentionally absent. vite-react-ssg mounts its own
// HelmetProvider and owns the helmetContext used to collect <Head> output during
// prerender. Nesting a second provider here would break head collection.

const queryClient = new QueryClient();

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SmoothScroll />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default Layout;
