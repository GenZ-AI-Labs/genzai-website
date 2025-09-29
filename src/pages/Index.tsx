import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Activity,
  Target,
  Award,
  Stethoscope,
  Heart
} from "lucide-react";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";
import { FreeTrialModal } from "@/components/modals/FreeTrialModal";
import { BrochureDownloadModal } from "@/components/modals/BrochureDownloadModal";
import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { LiveChat } from "@/components/LiveChat";
import React from "react";

const Index = () => {
  const [demoModalOpen, setDemoModalOpen] = React.useState(false);
  const [trialModalOpen, setTrialModalOpen] = React.useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = React.useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = React.useState(false);

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Accuracy",
      description: "Advanced machine learning algorithms provide precise stroke detection through comprehensive imaging analysis."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Clinically Validated", 
      description: "Rigorously tested in real-world medical settings to ensure reliability and effectiveness in patient care."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Fast & Reliable",
      description: "Near real-time scan processing enables faster decision-making and improved patient outcomes."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Customizable Workflows",
      description: "Flexible integration capabilities seamlessly adapt to existing hospital systems and protocols."
    }
  ];

  const products = [
    {
      title: "Stroke Insightz",
      description: "AI-powered stroke detection and analysis for CT scans with real-time alerts.",
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      link: "/products/stroke-insightz"
    },
    {
      title: "CXR Insightz", 
      description: "Chest X-ray analysis with automated detection of abnormalities and pathologies.",
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      link: "/products/cxr-insightz"
    },
    {
      title: "Oncology Insightz",
      description: "Advanced cancer detection and staging through comprehensive imaging analysis.",
      icon: <Activity className="h-12 w-12 text-blue-600" />,
      link: "/products"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Transforming Healthcare with AI
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Stroke Detection 
              <span className="text-blue-600"> with AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered solutions enabling healthcare professionals to make faster, 
              more accurate diagnoses and deliver better patient outcomes through cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => setDemoModalOpen(true)}
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                onClick={() => setTrialModalOpen(true)}
              >
                Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GenzaiLabs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative AI solutions are designed to enhance clinical decision-making 
              and improve patient care across healthcare institutions worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered diagnostic solutions designed to revolutionize 
              medical imaging and improve patient outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6">
                    {product.description}
                  </CardDescription>
                  <Link to={product.link}>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                Enterprise Security
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Security & Compliance You Can Trust
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform is built with enterprise-grade security measures to protect 
                sensitive patient data while maintaining regulatory compliance across all healthcare standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">End-to-end data encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Cloud and on-premise deployment options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">HIPAA and regulatory compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Secure backup and disaster recovery</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
                <Shield className="h-32 w-32 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest presentations, research, and industry partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">August 2024</span>
                </div>
                <CardTitle className="text-xl">Imaging Update Conference - Goa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Our team presented the latest advancements in AI-powered stroke detection 
                  at the prestigious Imaging Update conference in Goa.
                </CardDescription>
                <Link to="/events">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Stethoscope className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Latest Research</span>
                </div>
                <CardTitle className="text-xl">Future of Stroke Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Explore our latest research on early stroke detection using advanced 
                  machine learning techniques and real-time imaging analysis.
                </CardDescription>
                <Link to="/events">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading healthcare institutions worldwide who trust GenzaiLabs 
            for their AI-powered diagnostic solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => setConsultationModalOpen(true)}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-blue-700 px-8 py-3"
              onClick={() => setBrochureModalOpen(true)}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DemoRequestModal 
        open={demoModalOpen} 
        onOpenChange={setDemoModalOpen}
      />
      <FreeTrialModal 
        open={trialModalOpen} 
        onOpenChange={setTrialModalOpen}
      />
      <BrochureDownloadModal 
        open={brochureModalOpen} 
        onOpenChange={setBrochureModalOpen}
      />
      <ConsultationModal 
        open={consultationModalOpen} 
        onOpenChange={setConsultationModalOpen}
      />

      {/* Live Chat */}
      <LiveChat />
    </div>
  );
};

export default Index;
