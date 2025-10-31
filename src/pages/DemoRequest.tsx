// src/components/DemoRequest.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { demoRequestSchema, DemoRequestData } from "@/lib/schemas";
import { submitDemoRequest } from "@/lib/form-utils";
import { useNavigate } from "react-router-dom";

export const DemoRequest: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
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
      navigate("/");
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 text-center sm:text-4xl">Request a Demo</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill out the form below to schedule a demo with our team
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                {...form.register("firstName")}
                className="mt-1"
                placeholder="Enter your first name"
              />
              {form.formState.errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.firstName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                {...form.register("lastName")}
                className="mt-1"
                placeholder="Enter your last name"
              />
              {form.formState.errors.lastName && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="mt-1"
              placeholder="Enter your email address"
            />
            {form.formState.errors.email && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              {...form.register("phone")}
              className="mt-1"
              placeholder="Enter your phone number"
            />
            {form.formState.errors.phone && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
              Organization *
            </Label>
            <Input
              id="organization"
              {...form.register("organization")}
              className="mt-1"
              placeholder="Enter your organization name"
            />
            {form.formState.errors.organization && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.organization.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="role" className="text-sm font-medium text-gray-700">
              Role/Title
            </Label>
            <Input
              id="role"
              {...form.register("role")}
              className="mt-1"
              placeholder="Enter your role or title"
            />
          </div>

          <div>
            <Label htmlFor="productInterest" className="text-sm font-medium text-gray-700">
              Product Interest
            </Label>
            <select
              id="productInterest"
              {...form.register("productInterest")}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="general-inquiry">General Inquiry</option>
              <option value="stroke-insightz">Stroke Insightz</option>
              <option value="cxr-insightz">CXR Insightz</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Tell us about your requirements *
            </Label>
            <Textarea
              id="message"
              {...form.register("message")}
              className="mt-1"
              rows={5}
              placeholder="Please describe your organization's needs and what you'd like to see in the demo..."
            />
            {form.formState.errors.message && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/")}
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
                  <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Request Demo"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
