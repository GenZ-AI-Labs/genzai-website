import { Button } from "@/components/ui/button";
import "./Index.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Activity,
  Target,
  Award,
  Stethoscope,
  Heart,
  Waves,
  Microscope,
  BookOpen,
  FileText,
} from "lucide-react";
import { FreeTrialModal } from "@/components/modals/FreeTrialModal";
import { BrochureDownloadModal } from "@/components/modals/BrochureDownloadModal";
import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { StatCounter } from "@/components/StatCounter";
import { AiAnalysisShowcase } from "@/components/AiAnalysisShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import React from "react";

const Index = () => {
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
      src: "/DPU-logo-pune.png",
      alt: "Dr. D. Y. Patil Vidyapeeth",
      link: "https://dpu.edu.in/",
    },
  ];

  // Video speed manage for hero section
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // Make hero section tagline changing
  const phrases = [
    "acute stroke triage",
    "tumor perfusion analysis",
    "gadolinium-free ASL",
    "TB screening at scale",
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
      Icon: Brain,
      title: "Purpose-Built Precision",
      description:
        "AI pipelines designed specifically for perfusion imaging — not retrofitted general-purpose models.",
    },
    {
      Icon: Award,
      title: "Peer-Reviewed & Patent-Filed",
      description:
        "3 published papers, an Indian provisional patent, and active clinical validation underway.",
    },
    {
      Icon: Zap,
      title: "Sub-30 Second Analysis",
      description:
        "Full perfusion maps, ASPECTS, and structured reports in under 30 seconds per scan.",
    },
    {
      Icon: Target,
      title: "Seamless PACS Integration",
      description:
        "Deploys directly into existing hospital PACS and DICOM workflows — no disruption to radiologists.",
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
      title: "CT Stroke Insightz",
      description:
        "CT Perfusion for acute stroke triage — core/penumbra, CT-ASPECTS, collateral assessment.",
      Icon: Heart,
      gradient: "from-red-500 to-orange-500",
      link: "/products/ct-stroke-insightz",
      stats: ["ASPECTS", "Core/Penumbra", "<5 min"],
    },
    {
      title: "MR Stroke Insightz",
      description:
        "MRI DSC perfusion with DWI-ASPECTS and FLAIR mismatch for onset estimation.",
      Icon: Activity,
      gradient: "from-purple-500 to-indigo-500",
      link: "/products/mr-stroke-insightz",
      stats: ["DWI-ASPECTS", "FLAIR Mismatch", "DSC"],
    },
    {
      title: "MRI ASL Insightz",
      description:
        "Non-contrast brain perfusion — gadolinium-free CBF for 7 clinical indications.",
      Icon: Waves,
      gradient: "from-cyan-500 to-teal-500",
      link: "/products/asl-insightz",
      stats: ["Gadolinium-free", "Absolute CBF", "7 Indications"],
    },
    {
      title: "MRI Tumor Insightz",
      description:
        "Neuro-oncology DSC perfusion with nCBV/PSR/K2 and tumor differential diagnosis.",
      Icon: Microscope,
      gradient: "from-pink-500 to-rose-500",
      link: "/products/tumor-insightz",
      stats: ["nCBV · PSR · K2", "Differential Dx", "Hot-Spot Biopsy"],
    },
    {
      title: "TB Insightz",
      description:
        "AI-powered tuberculosis screening from chest X-rays with device/artifact and cardiomegaly checks.",
      Icon: Stethoscope,
      gradient: "from-emerald-500 to-green-600",
      link: "/products/tb-insightz",
      stats: ["93.53% Accuracy", "100% Sensitivity", "κ = 0.87"],
    },
  ];

  // Events and news
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const scrollRef = React.useRef(null);

  // Events info
  const events = [
    {
      id: 1,
      image: "/first-event.jpg",
      title: "GenzAI Labs Joins DPU FIIIE as an Officially Incubated Startup",
      summary:
        "Excited to share a proud milestone for GenzAI Labs Pvt Ltd! We are now officially an Incubated Startup at DPU Foundation For Innovation Incubation & Entrepreneurship (DPU FIIIE).",
      date: "September 23, 2025",
      location: "Dr. D. Y. Patil Medical College, Pune",
      type: "Milestone",
      status: "Past",
      fullDescription:
        "Excited to share a proud milestone for GenzAI Labs Pvt Ltd! We are now officially an Incubated Startup at DPU Foundation For Innovation Incubation & Entrepreneurship (DPU FIIIE). At GenzAI Labs, we are committed to building cutting-edge AI solutions for MRI, CT, and X-ray scans. Our flagship product, Stroke Insightz, is designed to assist doctors in stroke detection and analysis, ensuring clinical reliability, data security, and seamless hospital integration. A heartfelt thanks to Prof. Dr. Sushil Kachewar MD, DNB, Ph.D, along with the faculties, deans, and directors of Dr. D. Y. Patil Medical College, Hospital & Research Centre, Pimpri, Pune, and the team at DPU FIIIE for their support and recognition. This is just the beginning of our journey towards transforming medical imaging with AI.",
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
        "GenzAI Labs presented Stroke Insightz at Imaging Update August 2024 Conference in Goa",
      summary:
        "We successfully presented our flagship product, Stroke Insightz, at the Imaging Update 2024 conference in Goa, drawing significant interest from healthcare professionals.",
      date: "August 17, 2024",
      location: "Goa, India",
      type: "Conference",
      status: "Past",
      fullDescription:
        "We are excited to announce that GenzAI Labs successfully presented our flagship product, Stroke Insightz, at the Imaging Update 2024 conference, organized by the Indian Imaging Academy in Goa. Our team set up a dedicated stall showcasing the power of AI-driven stroke detection, which drew significant interest from healthcare professionals and industry experts alike. Attendees were able to experience firsthand how Stroke Insightz delivers fast, accurate, and reliable stroke detection, revolutionizing patient care. This event provided an excellent opportunity for us to engage with leading medical imaging specialists and demonstrate the potential of AI technology in transforming stroke diagnostics. We look forward to future collaborations and continuing to innovate in the healthcare space.",
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
        "The Future of Stroke Detection: How GenzAI Labs is Revolutionizing Healthcare",
      summary:
        "As healthcare moves toward faster and more precise diagnostics, GenzAI Labs is at the forefront of this transformation with cutting-edge AI technology.",
      date: "August 17, 2024",
      location: "Virtual Webinar",
      type: "Webinar",
      status: "Past",
      fullDescription:
        "As healthcare moves toward faster and more precise diagnostics, GenzAI Labs is at the forefront of this transformation. With cutting-edge AI technology, we are reshaping stroke detection, reducing diagnostic time, and improving patient outcomes. Key Points: The current challenges in stroke detection, How GenzAI Labs' AI-powered tools enhance accuracy and speed, Real-world applications of GenzAI Labs' technology in stroke care, The profound impact on patient care and medical workflows.",
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
      title: "Early Stroke Detection: Why Every Second Counts with GenzAI Labs",
      summary:
        "In stroke cases, time is crucial, and every second can save a life. GenzAI Labs' AI-driven technology enables healthcare professionals to detect and treat strokes with unprecedented speed.",
      date: "August 17, 2024",
      location: "Pune, India",
      type: "Workshop",
      status: "Past",
      fullDescription:
        "In stroke cases, time is crucial, and every second can save a life. GenzAI Labs' AI-driven technology enables healthcare professionals to detect and treat strokes with unprecedented speed, preventing critical damage and improving recovery rates. Key Points: The importance of early intervention in stroke treatment, Traditional methods vs. GenzAI Labs' AI-powered stroke detection, How GenzAI Labs' technology minimizes treatment delays, Success stories of improved patient outcomes using GenzAI Labs' solutions.",
      highlights: [
        "Importance of early intervention in stroke treatment",
        "Traditional methods vs. AI-powered stroke detection",
        "Minimizing treatment delays with GenzAI Labs technology",
        "Success stories of improved patient outcomes",
      ],
    },
  ];

  const getStatusBadge = (status) => {
    return status === "Past" ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
        Past Event
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
        Upcoming
      </span>
    );
  };

  // Auto-scroll functionality for events carousel
  React.useEffect(() => {
    if (!scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollAmount = scrollRef.current.offsetWidth;
        scrollRef.current.scrollLeft += scrollAmount;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.offsetWidth
        ) {
          setTimeout(() => {
            if (scrollRef.current) scrollRef.current.scrollLeft = 0;
          }, 500);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
      <Seo
        title="AI Medical Imaging for Stroke, Tumor & TB Diagnosis"
        description="GenzAI Labs builds AI-powered medical imaging platforms for acute stroke triage, tumor perfusion analysis, and tuberculosis screening — validated in peer-reviewed clinical studies."
        path="/"
      />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background2.mp4" type="video/mp4" />
        </video>

        {/* Layered gradient overlay for contrast + depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(2,6,23,0.6)_100%)]"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/40 text-teal-300 text-[11px] font-semibold tracking-[0.18em] uppercase mb-6 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Transforming Healthcare with AI
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp text-center tracking-tight leading-[1.1]"
            style={{ animationDelay: "0.35s" }}
          >
            <span className="block text-white">Transforming Healthcare</span>
            <span className="block mt-2">
              <span className="text-slate-300">with </span>
              <span
                key={index}
                className="animate-fadeText inline-block bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent"
              >
                {phrases[index]}
              </span>
            </span>
          </h1>

          <p
            className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto animate-fadeInUp leading-relaxed"
            style={{ animationDelay: "0.55s" }}
          >
            AI-powered medical imaging that helps radiologists and clinicians
            make faster, more accurate decisions — validated in peer-reviewed
            clinical studies.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "0.75s" }}
          >
            <Button
              size="lg"
              className="bg-teal-500 text-white hover:bg-teal-400 px-8 py-3 rounded-full shadow-lg shadow-teal-500/30 transition-all duration-300"
              onClick={() => navigate("/demo-request")}
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-slate-900 hover:border-white px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => navigate("/products")}
            >
              View Solutions
            </Button>
          </div>

          {/* Mini stat pills */}
          <div
            className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3 animate-fadeInUp"
            style={{ animationDelay: "0.9s" }}
          >
            {[
              { label: "99% TB Accuracy", Icon: Shield },
              { label: "<30s Analysis", Icon: Zap },
              { label: "4+ Clinical Partners", Icon: Users },
              { label: "3 Peer-Reviewed Papers", Icon: BookOpen },
            ].map(({ label, Icon }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold"
              >
                <Icon className="h-3.5 w-3.5 text-teal-300" />
                {label}
              </div>
            ))}
          </div>

          <p
            className="mt-6 text-xs text-slate-400 tracking-wide animate-fadeInUp"
            style={{ animationDelay: "1.05s" }}
          >
            Trusted by Datta Meghe Hospital &nbsp;·&nbsp; DPU Super Specialty &nbsp;·&nbsp; Smt. Kashibai Navale Medical College
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fadeInUp" style={{ animationDelay: "1.2s" }}>
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center p-1">
              <div className="w-0.5 h-2 bg-white/80 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>
      {/* AI-Segmented Analysis Showcase — auto-rotating carousel */}
      <AiAnalysisShowcase />

      {/* Trust Strip — animated stat counters */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCounter
              value={5}
              label="AI-Powered Products"
              icon={<Brain className="h-6 w-6" />}
            />
            <StatCounter
              value={4}
              suffix="+"
              label="Clinical Partners"
              icon={<Users className="h-6 w-6" />}
            />
            <StatCounter
              value={99}
              suffix="%"
              label="TB Detection Accuracy"
              icon={<Shield className="h-6 w-6" />}
            />
            <StatCounter
              value={30}
              suffix="s"
              label="Average Analysis Time"
              prefix="<"
              icon={<Zap className="h-6 w-6" />}
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-8 max-w-2xl mx-auto">
            TB detection confidence reflects results from the peer-reviewed validation
            study (BJMHS, Feb 2026). Analysis times vary by modality and study size.
          </p>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionHeading
              kicker="Our Solutions"
              title="Our Products"
              subtitle="Comprehensive AI-powered diagnostic solutions designed to revolutionize medical imaging and improve patient outcomes."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="group relative h-full bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 rounded-xl overflow-hidden">
                  {/* Hover bloom from icon */}
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 pointer-events-none`}
                  />
                  <CardHeader className="text-center pb-4 relative">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                      >
                        <product.Icon className="h-8 w-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-900">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative">
                    <CardDescription className="text-slate-600 mb-5 leading-relaxed">
                      {product.description}
                    </CardDescription>
                    <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                      {product.stats.map((stat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700 group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-teal-700 transition-colors duration-300"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                    <Link to={product.link}>
                      <Button
                        variant="outline"
                        className="border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group/btn"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Explore All card — 6th slot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: products.length * 0.08 }}
            >
              <Link to="/products" className="block h-full">
                <div className="group relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-800 hover:border-teal-400/50 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center p-8 min-h-[320px]">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-teal-500/30 blur-3xl group-hover:bg-teal-500/50 transition-colors duration-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-teal-500/10 border border-teal-400/30 flex items-center justify-center mb-5 group-hover:bg-teal-500 group-hover:border-teal-500 transition-colors duration-300">
                      <ArrowRight className="h-7 w-7 text-teal-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Explore All Products
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Deep-dive into specs, pipelines, and clinical reports for every solution.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why GenzAI — value props */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionHeading
              kicker="Why GenzAI"
              title="Built for Clinicians, Backed by Evidence"
              subtitle="Every decision in our stack is driven by clinical workflow realities — not generic AI hype."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-xl bg-white border border-slate-200 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-teal-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-colors duration-300">
                    <feature.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Evidence Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionHeading
              kicker="Clinical Evidence"
              title="Clinically Validated & Peer-Reviewed"
              subtitle="Our platforms are backed by published research, clinical validation studies, and an active patent portfolio."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: BookOpen,
                stat: "3",
                statLabel: "Peer-Reviewed Papers",
                title: "Published in IJSR & BJMHS",
                description:
                  "Active publications in International Journal of Scientific Research and British Journal of Medical & Health Sciences (2024–2026).",
                link: "/publications",
                cta: "Read Publications",
              },
              {
                Icon: FileText,
                stat: "1",
                statLabel: "Provisional Patent",
                title: "Indian Patent Office Filing",
                description:
                  "MRI Stroke Analysis & Perfusion Decision Support System — Application No. 202521099215, October 2025.",
              },
              {
                Icon: Award,
                stat: "93.53%",
                statLabel: "TB Validation Accuracy",
                title: "Pilot Study on 170 Chest X-Rays",
                description:
                  "100% sensitivity and Cohen's Kappa of 0.87 vs. radiologist readings — published BJMHS, Feb 2026.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 rounded-xl">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-colors duration-300">
                        <card.Icon className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-teal-600 bg-clip-text text-transparent font-mono leading-none">
                          {card.stat}
                        </div>
                        <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-500 mt-1">
                          {card.statLabel}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-900 leading-tight">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed mb-4">
                      {card.description}
                    </CardDescription>
                    {card.link && (
                      <Link to={card.link}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                        >
                          {card.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionHeading
              kicker="Clinician Voices"
              title="Trusted by Radiologists & Hospitals"
              subtitle="We are actively deploying across our partner hospitals. Pilot results and clinician testimonials coming soon."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                hospital: "Datta Meghe Hospital",
                city: "Wardha, Maharashtra",
                status: "Pilot Active",
                note: "Active pilot — stroke perfusion workflow in daily clinical use.",
              },
              {
                hospital: "DPU Super Specialty Hospital",
                city: "Pimpri-Chinchwad, Pune",
                status: "Research Partner",
                note: "Research partnership — DSC perfusion & tumor neuro-oncology cases.",
              },
              {
                hospital: "Smt. Kashibai Navale Medical College",
                city: "Narhe, Pune",
                status: "Validation",
                note: "Clinical validation ongoing — MRI stroke dataset review.",
              },
            ].map((site, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-dashed border-2 border-slate-300 bg-white/60 shadow-none hover:border-teal-300 hover:bg-white hover:shadow-md transition-all duration-300 rounded-xl">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-[10px] font-semibold tracking-[0.12em] uppercase mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                      {site.status}
                    </div>
                    <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-slate-400" />
                    </div>
                    <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                      {site.note}
                    </p>
                    <p className="text-sm font-semibold text-slate-900">{site.hospital}</p>
                    <p className="text-xs text-slate-500 mt-1">{site.city}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-8 max-w-2xl mx-auto">
            Formal clinician quotes will appear here once pilot evaluations complete.
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">
                Enterprise Security
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Healthcare-Grade Security by Design
              </h2>
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                Built on DICOM standards and aligned with HIPAA, our platform is
                deployment-ready for hospital networks — protecting patient data
                without slowing down clinical workflows.
              </p>
              <div className="space-y-3">
                {[
                  "End-to-end data encryption (AES-256 at rest, TLS 1.3 in transit)",
                  "Cloud and on-premise deployment — your data, your infrastructure",
                  "Role-based access control with per-user audit logs",
                  "Every AI inference logged and traceable for compliance",
                  "PACS & DICOM integration-ready for seamless hospital workflows",
                  "Secure backup and disaster recovery across redundant zones",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Compliance badge row */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
                  Standards & Alignment
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HIPAA-Aligned",
                    "DICOM Compliant",
                    "ISO 27001 Roadmap",
                    "On-Prem or Cloud",
                  ].map((badge, i) => (
                    <motion.span
                      key={badge}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-teal-200 hover:text-teal-700 hover:bg-teal-50 transition-colors duration-300"
                    >
                      <Shield className="h-3 w-3" />
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group w-72 h-80 md:w-80 md:h-96 overflow-hidden rounded-3xl transition-transform duration-500 hover:scale-105 border border-slate-200 shadow-lg"
              >
                <video
                  src="/security-img-animated1.mp4"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20 group-hover:to-slate-900/30 transition-all duration-500"></div>
                {/* Floating compliance ring */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/70 border border-teal-400/40 backdrop-blur text-teal-300 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Secure
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionHeading
              kicker="Partnerships"
              title="Our Partners"
            />
          </div>
        </div>
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
      <section className="relative py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionHeading
              kicker="Supported By"
              title="Incubated By"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Logo — 2/5 cols */}
              <div className="md:col-span-2 flex justify-center">
                {incubators.map((incubator, index) => (
                  <a
                    key={`incubator-${index}`}
                    href={incubator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer transition-transform duration-300 hover:scale-105 max-w-[240px]"
                  >
                    <img
                      src={incubator.src}
                      alt={incubator.alt}
                      className="w-full h-auto object-contain"
                    />
                  </a>
                ))}
              </div>
              {/* Description — 3/5 cols */}
              <div className="md:col-span-3">
                <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                  Part of the{" "}
                  <span className="font-semibold text-slate-900">
                    DPU Foundation for Innovation Incubation & Entrepreneurship (FIIIE)
                  </span>
                  , supporting deep-tech healthcare startups in India.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
                    <Calendar className="h-3 w-3" />
                    Since September 2025
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                    <MapPin className="h-3 w-3" />
                    Pune, India
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                    <Award className="h-3 w-3" />
                    Deep-Tech Healthcare
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <SectionHeading
              kicker="Newsroom"
              title="Latest News & Events"
              subtitle="Stay updated with our latest presentations, research, and industry partnerships."
            />
            <button
              onClick={() => navigate("/events")}
              className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 font-semibold text-sm -mt-6 mb-12 transition-colors"
            >
              View All Events
              <ArrowRight className="h-4 w-4" />
            </button>
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
                  className="flex-shrink-0 w-80 bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 shadow-sm cursor-pointer rounded-xl snap-center overflow-hidden"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-teal-600" />
                        <span className="text-sm text-slate-600">
                          {event.date}
                        </span>
                      </div>
                      {getStatusBadge(event.status)}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                      {event.summary}
                    </p>
                    <button
                      className="w-full border border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 py-2 rounded-md text-sm transition-all"
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
              <ArrowLeft className="h-5 w-5 text-slate-700" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 -mr-2 z-10 transition-all duration-200"
            >
              <ArrowRight className="h-5 w-5 text-slate-700" />
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
                className="text-slate-400 hover:text-slate-700"
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
              <h2 className="text-2xl font-bold text-slate-900 text-center">
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
                    <span className="text-sm text-slate-600">
                      {selectedEvent.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs">
                      {selectedEvent.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-slate-700 leading-relaxed">
                  {selectedEvent.fullDescription}
                </p>
              </div>

              {selectedEvent.highlights &&
                selectedEvent.highlights.length > 0 && (
                  <div className="bg-teal-50 border border-teal-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center space-x-2">
                      <Award className="h-5 w-5 text-teal-600" />
                      <span>Event Highlights</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-slate-700"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
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
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <SectionHeading
              kicker="Recognition"
              title="Awards & Recognition"
              subtitle="Celebrating our achievements and the trust placed in our AI-driven healthcare solutions."
            />
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 transition-all duration-500"
              >
                <div className="flex justify-center mb-6 overflow-hidden rounded-xl">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-52 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center leading-snug">
                  {award.title}
                </h3>
                <p className="text-slate-600 mb-2 text-center leading-relaxed">
                  {award.description}
                </p>
                <p className="text-sm text-slate-500 text-center">
                  {award.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
        {/* Ambient accent glows */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-teal-400/60"
              style={{
                top: `${20 + i * 14}%`,
                left: `${10 + i * 18}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
            Get Started
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-base md:text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Join 4+ clinical partners across India already using GenzAI Labs for
            perfusion analysis, stroke triage, and TB screening.
          </p>
          <p className="text-sm text-teal-300/80 mb-10 font-semibold">
            Peer-reviewed · Patent-filed · Clinically deployed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="relative overflow-hidden bg-teal-500 text-white hover:bg-teal-400 px-8 py-3 shadow-lg shadow-teal-500/30 transition-all group"
              onClick={() => navigate("/demo-request")}
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <span className="relative z-10 flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-slate-900 hover:border-white px-8 py-3 transition-all"
              onClick={() => setBrochureModalOpen(true)}
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Modals */}
      <FreeTrialModal open={trialModalOpen} onOpenChange={setTrialModalOpen} />
      <BrochureDownloadModal
        open={brochureModalOpen}
        onOpenChange={setBrochureModalOpen}
      />
      <ConsultationModal
        open={consultationModalOpen}
        onOpenChange={setConsultationModalOpen}
      />

    </div>
  );
};

export default Index;
