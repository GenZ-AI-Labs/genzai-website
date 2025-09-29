
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Calendar } from "lucide-react";
import { consultationSchema, ConsultationData } from "@/lib/schemas";
import { submitConsultationRequest } from "@/lib/form-utils";
import { useToast } from "@/hooks/use-toast";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  open, 
  onOpenChange, 
  onSuccess 
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<ConsultationData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      consultationType: "business",
      timeSlot: "morning",
      message: "",
    },
  });

  const onSubmit = async (data: ConsultationData) => {
    try {
      setIsSubmitting(true);
      const result = await submitConsultationRequest(data);
      
      toast({
        title: "Consultation Scheduled!",
        description: result.message,
      });
      
      form.reset();
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      toast({
        title: "Scheduling Failed",
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
          <DialogTitle className="text-2xl text-blue-600 flex items-center">
            <Calendar className="mr-2 h-6 w-6" />
            Schedule Consultation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            <Label htmlFor="role">Role/Title *</Label>
            <Input
              id="role"
              {...form.register("role")}
              className="mt-1"
            />
            {form.formState.errors.role && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.role.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="consultationType">Consultation Type</Label>
            <select
              id="consultationType"
              {...form.register("consultationType")}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="business">Business Discussion</option>
              <option value="technical">Technical Implementation</option>
              <option value="implementation">Implementation Planning</option>
              <option value="partnership">Partnership Opportunities</option>
            </select>
          </div>

          <div>
            <Label htmlFor="timeSlot">Preferred Time</Label>
            <select
              id="timeSlot"
              {...form.register("timeSlot")}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="morning">Morning (9 AM - 12 PM IST)</option>
              <option value="afternoon">Afternoon (12 PM - 5 PM IST)</option>
              <option value="evening">Evening (5 PM - 8 PM IST)</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Discussion Topics *</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              className="mt-1"
              rows={3}
              placeholder="Please describe what you'd like to discuss in the consultation..."
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
                  Scheduling...
                </>
              ) : (
                "Schedule Consultation"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
