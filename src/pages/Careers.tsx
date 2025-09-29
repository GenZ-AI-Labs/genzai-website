
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Heart,
  Lightbulb,
  Target,
  Award,
  Coffee,
  Laptop,
  Zap
} from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Develop and optimize deep learning models for medical image analysis and stroke detection.",
      requirements: ["Python, TensorFlow/PyTorch", "Computer Vision experience", "Medical imaging knowledge", "PhD/MS in CS/AI preferred"]
    },
    {
      title: "Clinical Affairs Specialist",
      department: "Clinical",
      location: "Remote/Bengaluru",
      type: "Full-time", 
      experience: "2-4 years",
      description: "Support clinical validation studies and regulatory submissions for our AI-powered diagnostic tools.",
      requirements: ["Medical/Clinical background", "Regulatory experience", "Clinical trial management", "Strong communication skills"]
    },
    {
      title: "Software Engineer - Backend",
      department: "Engineering",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Build scalable backend systems for AI model deployment and healthcare data processing.",
      requirements: ["Node.js/Python", "Cloud platforms (AWS/Azure)", "Database design", "Healthcare IT experience preferred"]
    },
    {
      title: "Product Manager - Healthcare AI",
      department: "Product",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Drive product strategy and roadmap for our AI-powered medical imaging solutions.",
      requirements: ["Healthcare/Medical device experience", "Product management", "AI/ML understanding", "Market research skills"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Healthcare & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family."
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-600" />,
      title: "Remote-First Culture",
      description: "Flexible work arrangements with state-of-the-art home office setup and modern workspaces."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Learning & Development", 
      description: "Continuous learning opportunities, conference attendance, and professional development budget."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Meaningful Impact",
      description: "Work on technology that directly improves patient outcomes and saves lives worldwide."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries, equity participation, and performance-based bonuses."
    },
    {
      icon: <Coffee className="h-8 w-8 text-blue-600" />,
      title: "Great Work Environment",
      description: "Collaborative culture, team events, and a supportive environment that values innovation."
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible in AI and healthcare technology."
    },
    {
      title: "Patient Focus",
      description: "Every decision we make is guided by how it will impact patient care and outcomes."
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage exploration of new technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Join Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Build the Future of
              <span className="text-blue-600"> Healthcare AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Join a passionate team of engineers, researchers, and healthcare professionals who are 
              revolutionizing medical diagnosis through cutting-edge AI technology. Make a meaningful 
              impact while growing your career at the forefront of healthcare innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
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

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help us transform healthcare through AI innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">{position.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{position.experience} experience</span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our team's success and well-being with comprehensive benefits and a supportive work environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed a transparent and efficient hiring process to help us get to know each other better.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-xl text-gray-900">Application</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Submit your application with resume and cover letter through our careers portal.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-xl text-gray-900">Initial Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Phone or video call with our hiring team to discuss your background and interests.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-xl text-gray-900">Technical Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Technical assessment and interview with team members relevant to your role.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-xl text-gray-900">Final Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Meet with leadership team and discuss culture fit, career goals, and expectations.
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
            <Zap className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our mission to transform healthcare through AI innovation. If you don't see a perfect 
            match in our current openings, we'd still love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-3">
              Send Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
