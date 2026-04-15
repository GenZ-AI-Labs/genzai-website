import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Activity,
  Layers,
  FileText,
  Target,
} from "lucide-react";
import { getProductBySlug } from "@/data/perfusionProducts";

const PerfusionProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) return <Navigate to="/products" replace />;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images-bg2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                {product.badge}
              </Badge>
              <div className="mb-6 flex items-center space-x-4">
                <div className="bg-white p-2 rounded-lg border-2 border-blue-300">
                  <img
                    src={product.logo}
                    alt={`${product.title} Logo`}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="text-white">{product.heroHeadline}</span>{" "}
                  <span className="text-blue-400">{product.heroHighlight}</span>
                </h1>
              </div>
              <p className="text-lg text-gray-200 mb-8">{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-black/80 to-blue-900/80 p-12 rounded-2xl border-2 border-cyan-300 hover:border-white hover:scale-105 transition-all duration-300">
                <img
                  src={product.heroImage}
                  alt={product.title}
                  className="h-64 w-64 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline + Maps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">How it works</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processing Pipeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fully automated from DICOM ingest to clinical report.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl text-gray-900">
                    Pipeline
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {product.pipeline.map((step, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Layers className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl text-gray-900">
                    {product.mapsTitle}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.maps.map((m, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{m}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinical metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Clinical output</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {product.metricsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.metrics.map((m, i) => (
              <Card
                key={i}
                className="border-none shadow-md hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-lg text-gray-900">
                      {m.label}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {m.value}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical use cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Use cases</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Clinical Applications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.useCases.map((uc, i) => (
              <Card
                key={i}
                className="border-none shadow-md hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {uc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {uc.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample generated outputs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Sample output</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Generated Visualizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A preview of the parameter maps and overlays generated by
              {" "}{product.title}. For the complete clinical report,{" "}
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                contact us
              </button>
              .
            </p>
          </div>

          {product.sampleImages && product.sampleImages.length > 0 ? (
            <div className="space-y-10">
              {product.sampleImages.map((img, i) => (
                <Card key={i} className="border-none shadow-lg overflow-hidden bg-black">
                  <div className="p-4">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                  <CardContent className="bg-white pt-6">
                    <CardDescription className="text-center text-gray-700 text-base">
                      {img.caption}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Report Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.reportFeatures.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-xl text-gray-900">
                      Get the Full Report
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600">
                    The full clinical PDF report is confidential. Please
                    contact us if you'd like to review a sample under NDA.
                  </CardDescription>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => navigate("/contact")}
                  >
                    Contact for Sample Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to experience {product.title}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our AI-powered perfusion
            analysis transforms your clinical workflow.
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

export default PerfusionProductDetail;
