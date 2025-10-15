import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, Globe, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description:
        "Pushing the boundaries of AI technology to create breakthrough solutions in healthcare.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Precision",
      description:
        "Delivering accurate, reliable results that healthcare professionals can trust.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaboration",
      description:
        "Working closely with medical experts to understand real-world healthcare challenges.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Impact",
      description:
        "Creating solutions that improve patient outcomes and save lives worldwide.",
    },
  ];

  const stats = [
    { number: "500+", label: "Healthcare Institutions" },
    { number: "1M+", label: "Scans Analyzed" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              About GenzaiLabs
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pioneering the Future of
              <span className="text-blue-600"> AI Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              GenzaiLabs is at the forefront of medical AI innovation,
              developing cutting-edge solutions that enable healthcare
              professionals to make faster, more accurate diagnoses and deliver
              exceptional patient care through the power of artificial
              intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are dedicated to revolutionizing healthcare through
                AI-powered stroke detection and medical imaging analysis. Our
                mission is to provide healthcare professionals with the tools
                they need to deliver faster, more accurate diagnoses in
                real-time.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By leveraging advanced machine learning algorithms and deep
                neural networks, we're creating solutions that not only improve
                patient outcomes but also streamline clinical workflows and
                reduce the burden on healthcare systems worldwide.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Clinically validated and trusted by medical professionals
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/our-mission.png"
                alt="Our Mission"
                className="h-50 w-100 mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and drive our commitment to
              excellence in healthcare AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-none shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to improving healthcare
              outcomes worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/ai-tech.avif"
                alt="Our Mission"
                className="h-50 w-100 mx-auto rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced AI Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform utilizes state-of-the-art deep learning algorithms
                specifically designed for medical imaging analysis. We employ
                convolutional neural networks and advanced computer vision
                techniques to achieve unprecedented accuracy in stroke detection
                and medical diagnosis.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through continuous learning and improvement, our AI models are
                trained on vast datasets of medical images, ensuring they can
                detect even the most subtle indicators of stroke and other
                medical conditions with remarkable precision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Real-time image processing and analysis
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Continuous model improvement and updates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Integration with existing healthcare systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team of experienced professionals combining expertise in AI,
              healthcare, and technology innovation.
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Our multidisciplinary team includes AI researchers, medical
              professionals, software engineers, and healthcare specialists who
              work together to create solutions that make a real difference in
              patient care and clinical outcomes.
            </p>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Join our team - View open positions
            </Badge>
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Meet the Team
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            At GenzaiLabs, our team is a blend of visionary leaders, AI
            specialists, and medical experts dedicated to transforming
            healthcare. Each member brings a wealth of knowledge and passion,
            working collaboratively to push the boundaries of stroke detection
            and diagnosis. Together, we are committed to delivering innovative
            solutions that improve patient outcomes and redefine medical
            technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <img
                src="/Picture2.png"
                alt="Shri. Balaji Naidu"
                className="h-48 w-48 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Shri. Balaji Naidu
              </h3>
              <p className="text-gray-600">Director</p>
              <p className="text-gray-500 mt-2">
                Shri. Balaji Naidu leads with a vision to integrate cutting-edge
                AI into healthcare, bringing decades of leadership experience to
                guide our mission.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/profile.png"
                alt="Rahim Pathan"
                className="h-48 w-48 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Rahim Pathan
              </h3>
              <p className="text-gray-600">Founder and CEO</p>
              <p className="text-gray-500 mt-2">
                Rahim Pathan, as the founder, drives innovation with his
                expertise in AI and healthcare, shaping GenzaiLabs into a leader
                in medical technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
