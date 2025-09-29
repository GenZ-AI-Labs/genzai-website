import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Headphones,
  Users,
  Loader2
} from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  organization: z.string().min(2, "Organization is required"),
  role: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Contact form submitted:", data);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. Our team will get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Phone Support",
      description: "Speak directly with our technical support team",
      details: "+91-84119-11234",
      availability: "24/7 for critical issues"
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email Support",
      description: "Get detailed assistance via email",
      details: "doc@genzailabs.com",
      availability: "Response within 4 hours"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Live Chat",
      description: "Instant support through our website",
      details: "Available on all pages",
      availability: "9 AM - 6 PM IST"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Dedicated Support",
      description: "Enterprise customers get dedicated account managers",
      details: "Premium support included",
      availability: "Business hours"
    }
  ];

  const offices = [
    {
      location: "Headquarters - India",
      address: "Bengaluru, Karnataka, India",
      phone: "+91-84119-11234",
      email: "doc@genzailabs.com",
      hours: "9:00 AM - 6:00 PM IST"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch with 
              <span className="text-blue-600"> Our Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Ready to transform your healthcare practice with AI-powered solutions? 
              Our team of experts is here to help you get started and provide ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. Our team is ready to assist 
              with demos, technical questions, and implementation support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-3">
                    {method.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-blue-600 mb-2">
                    {method.details}
                  </div>
                  <div className="text-sm text-gray-500">
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        {...form.register("phone")} 
                        className="mt-1" 
                      />
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
                      <Label htmlFor="interest">Area of Interest</Label>
                      <select 
                        id="interest" 
                        {...form.register("interest")} 
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select an option</option>
                        <option value="stroke-insightz">Stroke Insightz</option>
                        <option value="cxr-insightz">CXR Insightz</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Technical Support</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        {...form.register("message")} 
                        className="mt-1" 
                        rows={5}
                        placeholder="Please describe your inquiry in detail..."
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-600 text-sm mt-1">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Office</h2>
              <p className="text-lg text-gray-600 mb-8">
                Visit us at our headquarters or reach out through any of the contact methods below.
              </p>
              
              {offices.map((office, index) => (
                <Card key={index} className="mb-8 border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                      <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                      {office.location}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-blue-600">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-blue-600">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">{office.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Contact */}
              <Card className="border-none shadow-lg bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Headphones className="h-6 w-6 text-blue-600 mr-2" />
                    Need Immediate Assistance?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    For urgent technical support or critical issues, our team is available 24/7.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <a href="tel:+91-84119-11234" className="flex items-center">
                        Call Now: +91-84119-11234
                      </a>
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Start Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our products and services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">How quickly can we implement your solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Most implementations can be completed within 2-4 weeks, depending on your existing infrastructure 
                  and integration requirements. Our team provides full support throughout the process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">What training is provided?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We provide comprehensive training for your medical and technical staff, including online 
                  modules, hands-on sessions, and ongoing support to ensure optimal usage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Is your solution HIPAA compliant?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Yes, all our solutions are fully HIPAA compliant and meet international healthcare 
                  data security standards. We also support on-premise deployment for maximum security.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">What ongoing support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We offer 24/7 technical support, regular software updates, performance monitoring, 
                  and dedicated account management for enterprise customers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
