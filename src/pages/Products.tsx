import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  Activity,
  Waves,
  Microscope,
  Stethoscope,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Seo } from "@/components/Seo";

const Products = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: "ct-stroke-insightz",
      title: "CT Stroke Insightz",
      description:
        "AI-powered CT Perfusion analysis for acute stroke triage — core/penumbra volumetrics, CT-ASPECTS, and collateral assessment in minutes.",
      icon: (
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
          <Heart className="h-8 w-8 text-white" />
        </div>
      ),
      features: [
        "Core/Penumbra volumetrics",
        "CT-ASPECTS scoring",
        "Mismatch ratio & HIR",
        "Threshold-based volumetrics for clinician review",
      ],
      link: "/products/ct-stroke-insightz",
      status: "Available",
    },
    {
      id: "mr-stroke-insightz",
      title: "MR Stroke Insightz",
      description:
        "MRI DSC Perfusion measurements with DWI-ASPECTS regional summary, FLAIR signal intensity ratio, and perfusion-diffusion volumetric comparison.",
      icon: (
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
          <Activity className="h-8 w-8 text-white" />
        </div>
      ),
      features: [
        "DWI region segmentation",
        "DWI-ASPECTS regional summary",
        "FLAIR SIR value",
        "Perfusion-diffusion volumetric comparison",
      ],
      link: "/products/mr-stroke-insightz",
      status: "Available",
    },
    {
      id: "asl-insightz",
      title: "MRI ASL Insightz",
      description:
        "Non-contrast brain perfusion via Arterial Spin Labeling — gadolinium-free absolute CBF quantification in mL/100g/min.",
      icon: (
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
          <Waves className="h-8 w-8 text-white" />
        </div>
      ),
      features: [
        "Absolute CBF (ml/100g/min)",
        "pCASL / CASL / PASL support",
        "CBF Asymmetry Index",
        "No contrast agent administered",
      ],
      link: "/products/asl-insightz",
      status: "Available",
    },
    {
      id: "tumor-insightz",
      title: "MRI Tumor Insightz",
      description:
        "Neuro-oncology DSC perfusion with leakage-corrected nCBV/PSR/K2 maps, FLAIR-based region segmentation and regional statistics.",
      icon: (
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
          <Microscope className="h-8 w-8 text-white" />
        </div>
      ),
      features: [
        "nCBV, PSR, K2, rPH maps",
        "Leakage correction with before/after comparison",
        "Region of maximum nCBV reported",
        "Regional statistics (mean, median, P90)",
      ],
      link: "/products/tumor-insightz",
      status: "Available",
    },
    {
      id: "tb-insightz",
      title: "TB Insightz",
      description:
        "AI-powered tuberculosis screening from chest X-rays with supporting device/artifact detection and cardiomegaly assessment.",
      icon: (
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
          <Stethoscope className="h-8 w-8 text-white" />
        </div>
      ),
      features: [
        "Tuberculosis evaluation support (93.53% accuracy on a research dataset, n=170 — BJMHS 2026)",
        "Device & artifact flagging",
        "Cardiomegaly / CT-ratio assessment",
        "Structured PDF report output",
      ],
      link: "/products/tb-insightz",
      status: "Available",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            {status}
          </Badge>
        );
      case "Coming Soon":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            {status}
          </Badge>
        );
      case "In Development":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            {status}
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Products"
        description="Explore the GenzAI Labs AI product suite: CT Stroke, MR Stroke, MRI ASL, MRI Tumor, and TB Insightz — purpose-built medical AI for imaging departments."
        path="/products"
      />
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
              Comprehensive suite of AI-driven clinical decision-support tools
              designed to enhance clinician decision-making, support workflow
              efficiency, and streamline healthcare workflows across medical
              institutions — used by qualified healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      {product.icon}
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {product.title}
                        </CardTitle>
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
                    <Link to={product.link} aria-label={`Learn more about ${product.title}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Explore {product.title}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Universal Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our products share these core capabilities designed to enhance
              healthcare delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Real-time Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Instant analysis and results enabling immediate clinical
                  decision-making and patient care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Seamless Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Easy integration with existing hospital systems, PACS, and
                  clinical workflows.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Clinical Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  All products are rigorously tested and validated in real-world
                  clinical environments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Our Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our AI-powered products can
            transform your healthcare practice and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => navigate("/demo-request")}
            >
              Schedule Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-blue-700 px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
