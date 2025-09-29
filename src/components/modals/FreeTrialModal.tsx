
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { freeTrialSchema, FreeTrialData } from "@/lib/schemas";
import { submitFreeTrialRequest } from "@/lib/form-utils";
import { useToast } from "@/hooks/use-toast";

interface FreeTrialModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ 
  open, 
  onOpenChange, 
  onSuccess 
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<FreeTrialData>({
    resolver: zodResolver(freeTrialSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      hospitalSize: "medium",
      currentSolution: "",
      trialType: "stroke-insightz",
    },
  });

  const onSubmit = async (data: FreeTrialData) => {
    try {
      setIsSubmitting(true);
      const result = await submitFreeTrialRequest(data);
      
      toast({
        title: "Free Trial Request Submitted!",
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
          <DialogTitle className="text-2xl text-blue-600">Start Your Free Trial</DialogTitle>
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
            <Label htmlFor="organization">Hospital/Organization *</Label>
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
            <Label htmlFor="hospitalSize">Hospital Size</Label>
            <select
              id="hospitalSize"
              {...form.register("hospitalSize")}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="small">Small (1-100 beds)</option>
              <option value="medium">Medium (100-300 beds)</option>
              <option value="large">Large (300-500 beds)</option>
              <option value="enterprise">Enterprise (500+ beds)</option>
            </select>
          </div>

          <div>
            <Label htmlFor="trialType">Trial Product *</Label>
            <select
              id="trialType"
              {...form.register("trialType")}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="stroke-insightz">Stroke Insightz</option>
              <option value="cxr-insightz">CXR Insightz</option>
              <option value="both">Both Products</option>
            </select>
          </div>

          <div>
            <Label htmlFor="currentSolution">Current Solution (Optional)</Label>
            <Input
              id="currentSolution"
              {...form.register("currentSolution")}
              className="mt-1"
              placeholder="What imaging analysis solution do you currently use?"
            />
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
                  Starting Trial...
                </>
              ) : (
                "Start Free Trial"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
