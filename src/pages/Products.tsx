
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Brain, Heart, Activity, Scan, ArrowRight, CheckCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "stroke-insightz",
      title: "Stroke Insightz",
      description: "Advanced AI-powered stroke detection and analysis for CT scans with real-time alerts and comprehensive reporting.",
      icon: <Brain className="h-16 w-16 text-blue-600" />,
      features: ["Real-time stroke detection", "CT scan analysis", "Automated alerts", "Clinical decision support"],
      link: "/products/stroke-insightz",
      status: "Available"
    },
    {
      id: "cxr-insightz", 
      title: "CXR Insightz",
      description: "Comprehensive chest X-ray analysis with automated detection of abnormalities and pathologies using advanced AI.",
      icon: <Heart className="h-16 w-16 text-blue-600" />,
      features: ["Chest X-ray analysis", "Abnormality detection", "Pathology identification", "Report generation"],
      link: "/products/cxr-insightz",
      status: "Available"
    },
    {
      id: "oncology-insightz",
      title: "Oncology Insightz",
      description: "Advanced cancer detection and staging through comprehensive imaging analysis and AI-powered tumor identification.",
      icon: <Activity className="h-16 w-16 text-blue-600" />,
      features: ["Cancer detection", "Tumor staging", "Treatment planning", "Progress monitoring"],
      link: "#",
      status: "Coming Soon"
    },
    {
      id: "ct-brain-perfusion",
      title: "CT Brain Perfusion Analysis",
      description: "Specialized analysis of brain perfusion studies for enhanced stroke assessment and treatment planning.",
      icon: <Scan className="h-16 w-16 text-blue-600" />,
      features: ["Perfusion mapping", "Blood flow analysis", "Tissue viability assessment", "Treatment guidance"],
      link: "#",
      status: "In Development"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
      case "Coming Soon":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{status}</Badge>;
      case "In Development":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Our Products
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Healthcare 
              <span className="text-blue-600"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Comprehensive suite of AI-driven diagnostic tools designed to enhance clinical decision-making, 
              improve patient outcomes, and streamline healthcare workflows across medical institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      {product.icon}
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">{product.title}</CardTitle>
                        {getStatusBadge(product.status)}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {product.status === "Available" ? (
                    <Link to={product.link}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full">
                      {product.status}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Universal Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our products share these core capabilities designed to enhance healthcare delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Instant analysis and results enabling immediate clinical decision-making and patient care.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Easy integration with existing hospital systems, PACS, and clinical workflows.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Clinical Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  All products are rigorously tested and validated in real-world clinical environments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Our Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our AI-powered products can transform 
            your healthcare practice and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-3">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
