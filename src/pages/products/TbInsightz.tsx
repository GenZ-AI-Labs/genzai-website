import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Scan,
  Eye,
  FileText,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Activity,
  Award,
  Shield,
} from "lucide-react";
import { Seo } from "@/components/Seo";

const TbInsightz = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Tuberculosis Detection",
      description:
        "High-confidence AI identification of tuberculosis on chest X-rays with probability scoring and bounding-box localization.",
    },
    {
      icon: <Scan className="h-8 w-8 text-blue-600" />,
      title: "Device & Artifact Flagging",
      description:
        "Automatically detects metallic implants, jewelry and imaging artifacts that may affect diagnostic accuracy.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Cardiomegaly Screening",
      description:
        "Automated cardio-thoracic ratio calculation to assess heart size as a supporting cardiac finding.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Structured Reporting",
      description:
        "Clinical-grade PDF report with patient metadata, annotated findings and RT-PCR test recommendation.",
    },
  ];

  const detectionCapabilities = [
    "Tuberculosis detection with probability score",
    "Bounding-box localization on X-ray",
    "Device and artifact flagging",
    "Cardiomegaly assessment",
    "Cardio-thoracic ratio calculation",
    "RT-PCR test recommendation",
    "Patient metadata capture",
    "Structured PDF report output",
  ];

  const specifications = [
    {
      label: "Image Types",
      value: "Digital Radiography (DR), Computed Radiography (CR)",
    },
    { label: "Processing Time", value: "< 30 seconds" },
    { label: "TB Detection Confidence", value: "Up to 99% probability" },
    { label: "Specificity", value: "94%+ across findings" },
    { label: "Integration", value: "PACS, RIS, EMR compatible" },
    { label: "Standards", value: "DICOM compliant, HL7/FHIR ready" },
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Image Acquisition",
      description:
        "Standard chest X-ray is performed and sent through PACS or direct upload.",
    },
    {
      number: "2",
      title: "AI Processing",
      description:
        "Advanced algorithms analyze the image for tuberculosis indicators and supporting findings.",
    },
    {
      number: "3",
      title: "Report Generation",
      description:
        "Structured report with annotations, probability scores and RT-PCR recommendation is generated.",
    },
    {
      number: "4",
      title: "Clinical Review",
      description:
        "Radiologist reviews AI findings with enhanced visualization tools and makes final diagnosis.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="TB Insightz — AI Tuberculosis Detection"
        description="AI-powered tuberculosis screening from chest X-rays with 99% detection confidence, device/artifact flagging, and cardiomegaly assessment."
        path="/products/tb-insightz"
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images-bg2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              TB Insightz
            </Badge>
            <div className="mb-6 flex items-center justify-center space-x-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-white">AI-Powered</span>
                <span className="text-blue-400"> Tuberculosis Detection</span>
              </h1>
            </div>
            <p className="text-xl text-gray-200 mb-8">
              High-accuracy AI screening for tuberculosis from chest X-rays,
              with supporting device/artifact detection and cardiomegaly
              assessment — delivering structured clinical reports in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => navigate("/demo-request")}
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
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
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built AI for accurate tuberculosis screening with
              supporting clinical findings from chest X-rays.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-none shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-gray-900">
                    {feature.title}
                  </CardTitle>
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

      {/* Detection Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Focused TB Detection Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                TB Insightz is purpose-built for tuberculosis screening, with
                supporting artifact and cardiac findings to give clinicians a
                complete picture from a single automated workflow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detectionCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">99%</div>
                  <CardTitle className="text-sm text-gray-600">
                    TB Detection Confidence
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">94%</div>
                  <CardTitle className="text-sm text-gray-600">
                    Overall Specificity
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">3</div>
                  <CardTitle className="text-sm text-gray-600">
                    Detection Categories
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">30s</div>
                  <CardTitle className="text-sm text-gray-600">
                    Analysis Time
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Clinical Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TB Insightz integrates seamlessly into your existing radiology
              workflow without disrupting established procedures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical information about TB Insightz capabilities and
              system requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications.map((spec, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-gray-600">
                    {spec.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-gray-900">
                    {spec.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Clinical Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven improvements in diagnostic accuracy, efficiency, and
              patient care outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">
                  Enhanced Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Reduce missed diagnoses and improve tuberculosis detection
                  rates with consistent, high-confidence AI screening.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">
                  Increased Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Streamline radiology workflows and reduce reporting time while
                  maintaining high-quality diagnostic standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">
                  Quality Assurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Consistent, standardized analysis provides additional
                  confidence and quality control for radiological
                  interpretations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Award className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your TB Screening Workflow
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join healthcare institutions using TB Insightz for fast, accurate
            tuberculosis detection and improved patient outcomes.
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

export default TbInsightz;
