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
import { motion } from "framer-motion";
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

const CXRInsightz = () => {
  // Report download
  const handleDownload = (fileName) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const navigate = useNavigate();
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Automated Detection",
      description:
        "AI-powered identification of pneumonia, tuberculosis, nodules, and other chest abnormalities.",
    },
    {
      icon: <Scan className="h-8 w-8 text-blue-600" />,
      title: "Multi-pathology Analysis",
      description:
        "Comprehensive screening for multiple conditions in a single analysis workflow.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Structured Reporting",
      description:
        "Detailed, standardized reports with visual annotations and confidence scores.",
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Quality Assessment",
      description:
        "Automatic image quality evaluation and positioning assessment for optimal results.",
    },
  ];

  const detectionCapabilities = [
    "Pneumonia and infiltrates",
    "Pulmonary nodules and masses",
    "Tuberculosis indicators",
    "Pneumothorax detection",
    "Cardiomegaly assessment",
    "Pleural effusion identification",
    "Atelectasis recognition",
    "Consolidation patterns",
  ];

  const specifications = [
    {
      label: "Image Types",
      value: "Digital Radiography (DR), Computed Radiography (CR)",
    },
    { label: "Processing Time", value: "< 30 seconds" },
    { label: "Sensitivity", value: "92%+ for pneumonia detection" },
    { label: "Specificity", value: "94%+ across all pathologies" },
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
        "Advanced algorithms analyze the image for multiple pathologies simultaneously.",
    },
    {
      number: "3",
      title: "Report Generation",
      description:
        "Comprehensive report with findings, annotations, and confidence scores is generated.",
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
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Video */}
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
        {/* Overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                CXR Insightz
              </Badge>
              <div className="mb-6 flex items-center space-x-4">
                <div className="bg-white p-0 rounded-lg border-2 border-blue-300 hover:border-blue-900 transition-colors">
                  <img
                    src="/cxr-logo1.png"
                    alt="CXR Insightz Logo"
                    className="h-40 w-60 object-contain"
                  />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  <span className="text-white">Advanced</span>
                  <span className="text-blue-600"> Chest X-ray Analysis</span>
                </h1>
              </div>
              <p className="text-xl text-gray-200 mb-8">
                Comprehensive AI-powered chest X-ray analysis that detects
                multiple pathologies simultaneously, helping radiologists
                provide faster, more accurate diagnoses with enhanced confidence
                and detailed reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => navigate("/demo-request")}
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-black/80 to-blue-900/80 p-6 rounded-2xl border-2 border-cyan-300 hover:border-white hover:scale-110 transition-all duration-300">
                <img
                  src="/chest-3D-image.png"
                  alt="Chest 3D Image"
                  className="h-60 w-60 object-contain mx-auto opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
      CXR <span className="text-blue-600">Report Showcase</span>
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
      {/* Report Image and Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          CXR Insightz Report
        </h3>
        <img
          src="/cxr-report-images.png"
          alt="CXR Report Images"
          className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        />
      </motion.div>

      {/* Report Description and Key Features */}
      <div className="w-full max-w-md text-center md:text-left">
        <p className="text-gray-600 leading-relaxed mb-6">
          The AI-powered CXR Insightz Report delivers automated analysis of
          chest X-rays, detecting multiple conditions to assist radiologists
          with quick and accurate diagnosis.
        </p>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Key Highlights
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Displays essential patient details like ID, age, and study time.</li>
            <li>Detects metallic artifacts or implants that may affect accuracy.</li>
            <li>Analyzes bone and lung structures for abnormalities or infections.</li>
            <li>Provides a cardio-thoracic ratio for assessing heart size.</li>
            <li>Compares disease probabilities for clear visual insights.</li>
            <li>Specially highlights tuberculosis detection with a suggestion for RT-PCR testing to confirm infectious concerns.</li>
          </ul>
        </div>
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
              State-of-the-art deep learning technology trained on millions of
              chest X-rays for comprehensive pathology detection and analysis.
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
                Comprehensive Detection Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                CXR Insightz can simultaneously detect and analyze multiple
                pathologies in chest X-rays, providing comprehensive screening
                in a single automated workflow.
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
                  <div className="text-3xl font-bold text-blue-600">92%</div>
                  <CardTitle className="text-sm text-gray-600">
                    Pneumonia Sensitivity
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
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <CardTitle className="text-sm text-gray-600">
                    Pathologies Detected
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
              CXR Insightz integrates seamlessly into your existing radiology
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
              Detailed technical information about CXR Insightz capabilities and
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
                  Reduce missed diagnoses and improve detection rates for
                  critical conditions like pneumonia and tuberculosis.
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
            Transform Your Chest X-ray Analysis
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading healthcare institutions worldwide who rely on CXR
            Insightz to enhance their diagnostic capabilities and improve
            patient outcomes.
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

export default CXRInsightz;
