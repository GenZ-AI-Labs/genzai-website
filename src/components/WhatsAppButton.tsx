import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919923030250?text=Hi%20GenzAI%20Labs%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products.";

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
  >
    <MessageCircle className="h-7 w-7" />
    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75" />
    <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Chat with us on WhatsApp
    </span>
  </a>
);
