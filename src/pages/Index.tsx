import { Button } from "@/components/ui/button";
import "./Index.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ArrowLeft,
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
  Heart,
} from "lucide-react";
import { FreeTrialModal } from "@/components/modals/FreeTrialModal";
import { BrochureDownloadModal } from "@/components/modals/BrochureDownloadModal";
import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { LiveChat } from "@/components/LiveChat";
import React from "react";
import strokeLogo from "/prod-stroke-logo.png";
import cxrLogo from "/prod-cxr-logo.png";

const Index = () => {
  const [demoModalOpen, setDemoModalOpen] = React.useState(false);
  const [trialModalOpen, setTrialModalOpen] = React.useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = React.useState(false);
  const [consultationModalOpen, setConsultationModalOpen] =
    React.useState(false);
  const navigate = useNavigate();

  // Logos for partners
  const logos = [
    { src: "/noble-hospital.png", alt: "Partner 1" },
    { src: "/dmh.png", alt: "Partner 2" },
    { src: "/navale.png", alt: "Partner 3" },
    { src: "/dpu.png", alt: "Partner 4" },
  ];

  // Incubated by
  const incubators = [
    {
      src: "/AIC-SEED-logo-pune.jpg",
      alt: "AIC-SEED",
      link: "https://seedforstartup.in/",
    },
    {
      src: "/DPU-logo-pune.png",
      alt: "Dr. D. Y. Patil Vidyapeeth",
      link: "https://dpu.edu.in/",
    },
  ];

  // Video speed manage for hero section
  const videoRef = React.useRef(null);
  const videoRefImages = React.useRef(null);
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // Video speed manage for images section (stroke)
  React.useEffect(() => {
    if (videoRefImages.current) {
      videoRefImages.current.playbackRate = 1;
    }
  }, []);

  // Make hero section tagline changing
  const phrases = [
    "AI-powered solutions",
    "faster medical diagnosis",
    "accurate decision-making",
    "stroke detection",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Accuracy",
      description:
        "Advanced machine learning algorithms provide precise stroke detection through comprehensive imaging analysis.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Clinically Validated",
      description:
        "Rigorously tested in real-world medical settings to ensure reliability and effectiveness in patient care.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Fast & Reliable",
      description:
        "Near real-time scan processing enables faster decision-making and improved patient outcomes.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Customizable Workflows",
      description:
        "Flexible integration capabilities seamlessly adapt to existing hospital systems and protocols.",
    },
  ];

  // awards
  const awards = [
    {
      id: 1,
      image: "/award1.jpeg",
      title: "Innovation in AI Healthcare",
      description:
        "Recognized for pioneering AI solutions in stroke detection at the Global Health Tech Summit.",
      date: "October 2024",
    },
    {
      id: 2,
      image: "/award2.jpeg",
      title: "Best Medical Startup",
      description:
        "Honored for excellence in medical innovation by the Indian Medical Association.",
      date: "March 2025",
    },
    {
      id: 3,
      image: "/Indian-Patent-Provisional.jpeg",
      title:
        "MRI Stroke Analysis and Perfusion Decision Support System and Method Thereof",
      description:
        "Provisional patent filed with the Indian Patent Office (Application No. 202521099215) for an AI-based MRI stroke analysis and perfusion decision support system.",
      date: "October 14, 2025",
    },
  ];

  const products = [
    {
      title: "Stroke Insightz",
      description:
        "AI-powered stroke detection and analysis for CT scans with real-time alerts.",
      image: strokeLogo,
      link: "/products/stroke-insightz",
    },
    {
      title: "CXR Insightz",
      description:
        "Chest X-ray analysis with automated detection of abnormalities and pathologies.",
      image: cxrLogo,
      link: "/products/cxr-insightz",
    },
    {
      title: "Next Product Soon...",
      description:
        "A new chapter begins soon. Stay tuned. We've been tirelessly crafting the next evolution in design and function. Prepare to experience the future.",
      icon: <Activity className="h-12 w-12 text-blue-600" />,
      link: "/products",
    },
  ];

  // Events and news
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const scrollRef = React.useRef(null);
  const [isAutoScroll, setIsAutoScroll] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Events info
  const events = [
    {
      id: 1,
      image: "/first-event.jpg",
      title: "GenZ AI Labs Joins DPU FIIIE as an Officially Incubated Startup",
      summary:
        "Excited to share a proud milestone for GenZ AI Labs Pvt Ltd! We are now officially an Incubated Startup at DPU Foundation For Innovation Incubation & Entrepreneurship (DPU FIIIE).",
      date: "September 23, 2025",
      location: "Dr. D. Y. Patil Medical College, Pune",
      type: "Milestone",
      status: "Past",
      fullDescription:
        "Excited to share a proud milestone for GenZ AI Labs Pvt Ltd! We are now officially an Incubated Startup at DPU Foundation For Innovation Incubation & Entrepreneurship (DPU FIIIE). At GenZ AI Labs, we are committed to building cutting-edge AI solutions for MRI, CT, and X-ray scans. Our flagship product, Stroke Insightz, is designed to assist doctors in stroke detection and analysis, ensuring clinical reliability, data security, and seamless hospital integration. A heartfelt thanks to Prof. Dr. Sushil Kachewar MD, DNB, Ph.D, along with the faculties, deans, and directors of Dr. D. Y. Patil Medical College, Hospital & Research Centre, Pimpri, Pune, and the team at DPU FIIIE for their support and recognition. This is just the beginning of our journey towards transforming medical imaging with AI.",
      highlights: [
        "Official incubation at DPU FIIIE",
        "Support from Dr. D. Y. Patil Medical College",
        "Recognition for Stroke Insightz innovation",
        "Commitment to AI in medical imaging",
      ],
    },
    {
      id: 2,
      image: "/third-event.jpg",
      title:
        "Genzai Labs presented Stroke Insightz at Imaging Update August 2024 Conference in Goa",
      summary:
        "We successfully presented our flagship product, Stroke Insightz, at the Imaging Update 2024 conference in Goa, drawing significant interest from healthcare professionals.",
      date: "August 17, 2024",
      location: "Goa, India",
      type: "Conference",
      status: "Past",
      fullDescription:
        "We are excited to announce that GenzaiLabs successfully presented our flagship product, Stroke Insightz, at the Imaging Update 2024 conference, organized by the Indian Imaging Academy in Goa. Our team set up a dedicated stall showcasing the power of AI-driven stroke detection, which drew significant interest from healthcare professionals and industry experts alike. Attendees were able to experience firsthand how Stroke Insightz delivers fast, accurate, and reliable stroke detection, revolutionizing patient care. This event provided an excellent opportunity for us to engage with leading medical imaging specialists and demonstrate the potential of AI technology in transforming stroke diagnostics. We look forward to future collaborations and continuing to innovate in the healthcare space.",
      highlights: [
        "Presented Stroke Insightz at Imaging Update 2024",
        "Dedicated stall showcasing AI-driven stroke detection",
        "Engaged with leading medical imaging specialists",
        "Demonstrated potential of AI in stroke diagnostics",
      ],
    },
    {
      id: 3,
      image: "/stroke-logo.png",
      title:
        "The Future of Stroke Detection: How Genzai Labs is Revolutionizing Healthcare",
      summary:
        "As healthcare moves toward faster and more precise diagnostics, GenzaiLabs is at the forefront of this transformation with cutting-edge AI technology.",
      date: "August 17, 2024",
      location: "Virtual Webinar",
      type: "Webinar",
      status: "Past",
      fullDescription:
        "As healthcare moves toward faster and more precise diagnostics, GenzaiLabs is at the forefront of this transformation. With cutting-edge AI technology, we are reshaping stroke detection, reducing diagnostic time, and improving patient outcomes. Key Points: The current challenges in stroke detection, How GenzaiLabs' AI-powered tools enhance accuracy and speed, Real-world applications of GenzaiLabs' technology in stroke care, The profound impact on patient care and medical workflows.",
      highlights: [
        "Current challenges in stroke detection",
        "AI-powered tools for enhanced accuracy and speed",
        "Real-world applications in stroke care",
        "Impact on patient care and medical workflows",
      ],
    },
    {
      id: 4,
      image: "/genz-main-logo.png",
      title: "Early Stroke Detection: Why Every Second Counts with GenzaiLabs",
      summary:
        "In stroke cases, time is crucial, and every second can save a life. GenzaiLabs' AI-driven technology enables healthcare professionals to detect and treat strokes with unprecedented speed.",
      date: "August 17, 2024",
      location: "Pune, India",
      type: "Workshop",
      status: "Past",
      fullDescription:
        "In stroke cases, time is crucial, and every second can save a life. GenzaiLabs' AI-driven technology enables healthcare professionals to detect and treat strokes with unprecedented speed, preventing critical damage and improving recovery rates. Key Points: The importance of early intervention in stroke treatment, Traditional methods vs. GenzaiLabs' AI-powered stroke detection, How GenzaiLabs' technology minimizes treatment delays, Success stories of improved patient outcomes using GenzaiLabs' solutions.",
      highlights: [
        "Importance of early intervention in stroke treatment",
        "Traditional methods vs. AI-powered stroke detection",
        "Minimizing treatment delays with GenzaiLabs technology",
        "Success stories of improved patient outcomes",
      ],
    },
  ];

  const getStatusBadge = (status) => {
    return status === "Past" ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        Past Event
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        Upcoming
      </span>
    );
  };

  // Auto-scroll functionality
  React.useEffect(() => {
    if (!isAutoScroll || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollAmount = scrollRef.current.offsetWidth;
        scrollRef.current.scrollLeft += scrollAmount;
        // Reset to start after last item
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.offsetWidth
        ) {
          setTimeout(() => {
            scrollRef.current.scrollLeft = 0;
          }, 500);
        }
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background2.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-4 border-blue-400 bg-black/40 text-blue-400 hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out rounded-xl">
            Transforming Healthcare with AI
          </Badge>

          {/* Animated Heading */}
          <h1
            className="text-6xl md:text-7xl font-bold mb-10 animate-fadeInUp text-center"
            style={{
              animationDelay: "0.3s",
              color: "#ffffff",
            }}
          >
            Transforming Healthcare
            <span
              key={index}
              className="animate-fadeText inline-block"
              style={{
                color: "#3586e8",
                textShadow: `
                          1px 1px 0 #1e3a8a,
                        -1px 1px 0 #1e3a8a,
                          1px -1px 0 #1e3a8a,
                        -1px -1px 0 #1e3a8a
                        `,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              {" "}
              with {phrases[index]}
            </span>
          </h1>

          <p
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            Revolutionary AI-powered solutions enabling healthcare professionals
            to make faster, more accurate diagnoses and deliver better patient
            outcomes through cutting-edge technology.
          </p>

          <div
            className="flex justify-center animate-fadeInUp"
            style={{ animationDelay: "0.9s" }}
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:border-blue-400 hover:text-blue-400"
              onClick={() => navigate("/demo-request")}
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Curve section */}
      <section className="relative -mt-[80px] z-10">
        <div className="curve-container !h-[120px] !overflow-hidden">
          <div className="curve-content relative -top-[2px]"></div>
        </div>
      </section>

      {/* Images of stroke and chest*/}
      <section className="relative flex flex-col items-center pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16 overflow-hidden bg-black min-h-[auto] md:min-h-screen">
        {/* Background Video */}
        <video
          ref={videoRefImages}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images-bg2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        {/* Heading */}
        <h1 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6 md:mb-8">
          AI Analysis Images
        </h1>

        {/* Image Containers */}
        <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          {/* Stroke Images */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 p-4 sm:p-6 bg-gradient-to-b from-blue-900/40 to-black/80 border border-blue-300 rounded-xl transition-all duration-300 hover:scale-105 hover:border-white w-full flex-1 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] place-items-center max-w-[500px] lg:max-w-[600px]">
            <img
              src="stroke-img-1.png"
              alt="Stroke 1"
              className="rounded-lg w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[180px] object-contain bg-transparent opacity-85"
            />
            <img
              src="stroke-img-2.png"
              alt="Stroke 2"
              className="rounded-lg w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[180px] object-contain bg-transparent opacity-85"
            />
            <img
              src="stroke-img-3.png"
              alt="Stroke 3"
              className="rounded-lg w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[180px] object-contain bg-transparent opacity-85"
            />
            <img
              src="stroke-img-4.png"
              alt="Stroke 4"
              className="rounded-lg w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[180px] object-contain bg-transparent opacity-85"
            />
          </div>

          {/* Chest Images */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 p-4 sm:p-6 bg-gradient-to-b from-blue-900/40 to-black/80 border border-blue-300 rounded-xl transition-all duration-300 hover:scale-105 hover:border-white w-full flex-1 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] place-items-center max-w-[500px] lg:max-w-[600px]">
            <img
              src="chest-img-1.png"
              alt="Chest 1"
              className="rounded-lg w-full h-auto max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] object-contain bg-transparent opacity-70"
            />
            <img
              src="chest-img-2.png"
              alt="Chest 2"
              className="rounded-lg w-full h-auto max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] object-contain bg-transparent opacity-70"
            />
            <img
              src="chest-img-1.png"
              alt="Chest 1"
              className="rounded-lg w-full h-auto max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] object-contain bg-transparent opacity-70"
            />
            <img
              src="chest-img-2.png"
              alt="Chest 2"
              className="rounded-lg w-full h-auto max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] object-contain bg-transparent opacity-70"
            />
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered diagnostic solutions designed to
              revolutionize medical imaging and improve patient outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={`${product.title} logo`}
                        className="h-20 w-40 object-contain"
                      />
                    ) : (
                      product.icon
                    )}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6">
                    {product.description}
                  </CardDescription>
                  <Link to={product.link}>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
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
                Our platform is built with enterprise-grade security measures to
                protect sensitive patient data while maintaining regulatory
                compliance across all healthcare standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    End-to-end data encryption
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Cloud and on-premise deployment options
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    HIPAA and regulatory compliance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Secure backup and disaster recovery
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative group w-72 h-80 overflow-hidden rounded-full transition-transform duration-500 hover:scale-105">
                <video
                  src="/security-img-animated1.mp4"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 group-hover:to-black/40 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="relative py-12 bg-white-100 overflow-hidden">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Our Partners
        </h2>

        <div className="scroll-container">
          <div className="scroll-content">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.src} alt={logo.alt} className="logo-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubated By */}
      <section className="relative py-12 sm:py-16 bg-white-50">
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Incubated By
        </h2>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            {incubators.map((incubator, index) => (
              <div
                key={`incubator-${index}`}
                className="w-full sm:w-1/2 max-w-[200px] sm:max-w-[250px]"
              >
                <a
                  href={incubator.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <img
                    src={incubator.src}
                    alt={incubator.alt}
                    className="w-full h-auto object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News & Events
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest presentations, research, and industry
              partnerships.
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={() => navigate("/events")}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm underline"
              >
                View All Events →
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 scroll-smooth"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 w-80 hover:shadow-lg transition-shadow border-none shadow-md cursor-pointer rounded-lg snap-center"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 bg-white rounded-b-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-sm text-gray-600">
                          {event.date}
                        </span>
                      </div>
                      {getStatusBadge(event.status)}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.summary}
                    </p>
                    <button
                      className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-md text-sm"
                      onClick={() => setSelectedEvent(event)}
                    >
                      View Summary
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 -ml-2 z-10 transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 -mr-2 z-10 transition-all duration-200"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal/Popup for Event Details */}
      {selectedEvent && (
        <dialog
          open
          className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 top-12 rounded-2xl"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedEvent(null);
          }}
        >
          <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedEvent(null)}
              >
                ✕
              </button>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-100 max-w-full h-80 object-cover mx-auto rounded-lg mb-4"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                {selectedEvent.title}
              </h2>
              <div className="flex items-start space-x-4 justify-center">
                <div className="flex-shrink-0">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">
                      {selectedEvent.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs">
                      {selectedEvent.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {selectedEvent.fullDescription}
                </p>
              </div>

              {selectedEvent.highlights &&
                selectedEvent.highlights.length > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      <span>Event Highlights</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </dialog>
      )}

      {/* Awards Sections */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our achievements and the trust placed in our AI-driven
              healthcare solutions.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {awards.map((award) => (
              <div
                key={award.id}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-50 object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                  {award.title}
                </h3>
                <p className="text-gray-600 mb-2 text-center">
                  {award.description}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  {award.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
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
              onClick={() => navigate("/demo-request")}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Modals */}
      {/* <DemoRequestModal open ={demoModalOpen} onOpenChange={setDemoModalOpen} /> */}
      <FreeTrialModal open={trialModalOpen} onOpenChange={setTrialModalOpen} />
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
