
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Clock, 
  Target, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  AlertTriangle,
  Activity,
  Zap,
  Award
} from "lucide-react";

const StrokeInsightz = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Real-time Detection",
      description: "Instant stroke detection with results in under 60 seconds from scan completion."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "High Accuracy",
      description: "95%+ accuracy rate validated across multiple clinical studies and real-world deployments."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-blue-600" />,
      title: "Automated Alerts",
      description: "Immediate notification system for positive stroke findings with customizable alert levels."
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Analysis",
      description: "Detailed stroke characterization including type, location, and severity assessment."
    }
  ];

  const benefits = [
    "Reduce time to treatment by up to 40 minutes",
    "Improve patient outcomes through faster diagnosis",
    "Decrease false positive rates by 30%",
    "24/7 availability - no specialist required on-site",
    "Seamless PACS integration",
    "HIPAA compliant and secure"
  ];

  const specifications = [
    { label: "Scan Types", value: "CT, CTA, CTP" },
    { label: "Processing Time", value: "< 60 seconds" },
    { label: "Accuracy", value: "95%+" },
    { label: "Integration", value: "PACS, HL7, FHIR" },
    { label: "Deployment", value: "Cloud, On-premise, Hybrid" },
    { label: "Compliance", value: "HIPAA, GDPR, FDA cleared" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Stroke Insightz
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Revolutionary
                <span className="text-blue-600"> Stroke Detection</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                AI-powered stroke detection that analyzes CT scans in real-time, providing instant alerts 
                and comprehensive analysis to help clinicians make faster, more accurate treatment decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-12 rounded-2xl">
                <Brain className="h-40 w-40 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology designed specifically for stroke detection and analysis.
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, seamless integration into your existing clinical workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-xl text-gray-900">Scan Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  CT scans are automatically sent to Stroke Insightz through your existing PACS system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-xl text-gray-900">AI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Advanced AI algorithms analyze the scan for stroke indicators in under 60 seconds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-xl text-gray-900">Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Receive immediate alerts and detailed reports with stroke findings and recommendations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Clinical Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Stroke Insightz has been proven to significantly improve patient outcomes and 
                clinical efficiency across healthcare institutions worldwide.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">40min</div>
                  <CardTitle className="text-sm text-gray-600">Faster Treatment</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <CardTitle className="text-sm text-gray-600">Accuracy Rate</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">30%</div>
                  <CardTitle className="text-sm text-gray-600">Fewer False Positives</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <CardTitle className="text-sm text-gray-600">Availability</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical information about Stroke Insightz capabilities and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-gray-600">{spec.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-gray-900">{spec.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Award className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Saving Lives Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of healthcare institutions worldwide who trust Stroke Insightz 
            to improve their stroke detection capabilities and patient outcomes.
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

export default StrokeInsightz;
