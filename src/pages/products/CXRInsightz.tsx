
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Shield
} from "lucide-react";

const CXRInsightz = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Automated Detection",
      description: "AI-powered identification of pneumonia, tuberculosis, nodules, and other chest abnormalities."
    },
    {
      icon: <Scan className="h-8 w-8 text-blue-600" />,
      title: "Multi-pathology Analysis",
      description: "Comprehensive screening for multiple conditions in a single analysis workflow."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Structured Reporting",
      description: "Detailed, standardized reports with visual annotations and confidence scores."
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Quality Assessment",
      description: "Automatic image quality evaluation and positioning assessment for optimal results."
    }
  ];

  const detectionCapabilities = [
    "Pneumonia and infiltrates",
    "Pulmonary nodules and masses", 
    "Tuberculosis indicators",
    "Pneumothorax detection",
    "Cardiomegaly assessment",
    "Pleural effusion identification",
    "Atelectasis recognition",
    "Consolidation patterns"
  ];

  const specifications = [
    { label: "Image Types", value: "Digital Radiography (DR), Computed Radiography (CR)" },
    { label: "Processing Time", value: "< 30 seconds" },
    { label: "Sensitivity", value: "92%+ for pneumonia detection" },
    { label: "Specificity", value: "94%+ across all pathologies" },
    { label: "Integration", value: "PACS, RIS, EMR compatible" },
    { label: "Standards", value: "DICOM compliant, HL7/FHIR ready" }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Image Acquisition",
      description: "Standard chest X-ray is performed and sent through PACS or direct upload."
    },
    {
      number: "2", 
      title: "AI Processing",
      description: "Advanced algorithms analyze the image for multiple pathologies simultaneously."
    },
    {
      number: "3",
      title: "Report Generation", 
      description: "Comprehensive report with findings, annotations, and confidence scores is generated."
    },
    {
      number: "4",
      title: "Clinical Review",
      description: "Radiologist reviews AI findings with enhanced visualization tools and makes final diagnosis."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                CXR Insightz
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Advanced
                <span className="text-blue-600"> Chest X-ray Analysis</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive AI-powered chest X-ray analysis that detects multiple pathologies 
                simultaneously, helping radiologists provide faster, more accurate diagnoses with 
                enhanced confidence and detailed reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-12 rounded-2xl">
                <Heart className="h-40 w-40 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art deep learning technology trained on millions of chest X-rays 
              for comprehensive pathology detection and analysis.
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

      {/* Detection Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Detection Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                CXR Insightz can simultaneously detect and analyze multiple pathologies 
                in chest X-rays, providing comprehensive screening in a single automated workflow.
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
                  <CardTitle className="text-sm text-gray-600">Pneumonia Sensitivity</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">94%</div>
                  <CardTitle className="text-sm text-gray-600">Overall Specificity</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <CardTitle className="text-sm text-gray-600">Pathologies Detected</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="text-3xl font-bold text-blue-600">30s</div>
                  <CardTitle className="text-sm text-gray-600">Analysis Time</CardTitle>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Clinical Workflow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CXR Insightz integrates seamlessly into your existing radiology workflow 
              without disrupting established procedures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{step.title}</CardTitle>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical information about CXR Insightz capabilities and system requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clinical Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven improvements in diagnostic accuracy, efficiency, and patient care outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">Enhanced Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Reduce missed diagnoses and improve detection rates for critical conditions 
                  like pneumonia and tuberculosis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">Increased Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Streamline radiology workflows and reduce reporting time while maintaining 
                  high-quality diagnostic standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Consistent, standardized analysis provides additional confidence and 
                  quality control for radiological interpretations.
                </CardDescription>
              </CardContent>
            </Card>
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
            Transform Your Chest X-ray Analysis
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading healthcare institutions worldwide who rely on CXR Insightz 
            to enhance their diagnostic capabilities and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-3">
              Request Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CXRInsightz;
