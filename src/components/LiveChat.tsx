
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toast } = useToast();

  const handleStartChat = () => {
    toast({
      title: "Live Chat",
      description: "Our support team will be with you shortly. Average wait time: 2 minutes.",
    });
    
    // In a real implementation, this would open a chat widget
    console.log("Starting live chat session...");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl border w-80 h-96">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Support</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-4 h-64 flex flex-col justify-center items-center text-center">
            <MessageCircle className="h-12 w-12 text-blue-600 mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Start a conversation</h4>
            <p className="text-gray-600 text-sm mb-4">
              Our support team is available 9 AM - 6 PM IST to help with any questions.
            </p>
            <Button
              onClick={handleStartChat}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Start Chat
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
