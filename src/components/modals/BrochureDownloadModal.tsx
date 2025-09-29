
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Download } from "lucide-react";
import { brochureDownloadSchema, BrochureDownloadData } from "@/lib/schemas";
import { submitBrochureRequest } from "@/lib/form-utils";
import { useToast } from "@/hooks/use-toast";

interface BrochureDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const BrochureDownloadModal: React.FC<BrochureDownloadModalProps> = ({ 
  open, 
  onOpenChange, 
  onSuccess 
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<BrochureDownloadData>({
    resolver: zodResolver(brochureDownloadSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      role: "",
      brochureType: "company-overview",
    },
  });

  const onSubmit = async (data: BrochureDownloadData) => {
    try {
      setIsSubmitting(true);
      const result = await submitBrochureRequest(data);
      
      // Simulate download
      if (result.downloadUrl) {
        const link = document.createElement('a');
        link.href = result.downloadUrl;
        link.download = 'GenzaiLabs-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      toast({
        title: "Download Started!",
        description: result.message,
      });
      
      form.reset();
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      toast({
        title: "Download Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-600 flex items-center">
            <Download className="mr-2 h-6 w-6" />
            Download Brochure
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
            <Label htmlFor="brochureType">Brochure Type</Label>
            <select
              id="brochureType"
              {...form.register("brochureType")}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="company-overview">Company Overview</option>
              <option value="stroke-insightz">Stroke Insightz Product Guide</option>
              <option value="cxr-insightz">CXR Insightz Product Guide</option>
              <option value="all-products">Complete Product Suite</option>
            </select>
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
                  Processing...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
