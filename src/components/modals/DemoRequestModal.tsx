
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { demoRequestSchema, DemoRequestData } from "@/lib/schemas";
import { submitDemoRequest } from "@/lib/form-utils";
import { useToast } from "@/hooks/use-toast";

interface DemoRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ 
  open, 
  onOpenChange, 
  onSuccess 
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<DemoRequestData>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      productInterest: "general-inquiry",
      message: "",
    },
  });

  const onSubmit = async (data: DemoRequestData) => {
    try {
      setIsSubmitting(true);
      const result = await submitDemoRequest(data);
      
      toast({
        title: "Demo Request Submitted!",
        description: result.message,
      });
      
      form.reset();
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-600">Request a Demo</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                {...form.register("firstName")}
                className="mt-1"
              />
              {form.formState.errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.firstName.message}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                {...form.register("lastName")}
                className="mt-1"
              />
              {form.formState.errors.lastName && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="mt-1"
            />
            {form.formState.errors.email && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              {...form.register("phone")}
              className="mt-1"
            />
            {form.formState.errors.phone && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="organization">Organization *</Label>
            <Input
              id="organization"
              {...form.register("organization")}
              className="mt-1"
            />
            {form.formState.errors.organization && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.organization.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="role">Role/Title</Label>
            <Input
              id="role"
              {...form.register("role")}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="productInterest">Product Interest</Label>
            <select
              id="productInterest"
              {...form.register("productInterest")}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="general-inquiry">General Inquiry</option>
              <option value="stroke-insightz">Stroke Insightz</option>
              <option value="cxr-insightz">CXR Insightz</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Tell us about your requirements *</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              className="mt-1"
              rows={4}
              placeholder="Please describe your organization's needs and what you'd like to see in the demo..."
            />
            {form.formState.errors.message && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Request Demo"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
