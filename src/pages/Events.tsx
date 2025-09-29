
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, FileText, Award, ExternalLink } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "RSNA 2024 - Radiology Conference",
      date: "December 1-5, 2024",
      location: "Chicago, IL, USA",
      type: "Conference",
      description: "Join us at the world's largest radiology conference where we'll showcase the latest advancements in AI-powered medical imaging.",
      status: "Upcoming"
    },
    {
      title: "Healthcare AI Summit 2025",
      date: "February 15-17, 2025", 
      location: "San Francisco, CA, USA",
      type: "Summit",
      description: "Presenting our research on stroke detection accuracy improvements and real-world clinical implementation results.",
      status: "Registration Open"
    }
  ];

  const pastEvents = [
    {
      title: "Imaging Update Conference - Goa",
      date: "August 15-17, 2024",
      location: "Goa, India",
      type: "Presentation",
      description: "Successfully presented our latest AI-powered stroke detection technology and clinical validation results to leading radiologists.",
      highlights: ["200+ attendees", "Live demo sessions", "Clinical case studies"],
      status: "Completed"
    },
    {
      title: "Indian Radiology & Imaging Association Annual Conference",
      date: "March 8-10, 2024",
      location: "Mumbai, India", 
      type: "Conference",
      description: "Showcased CXR Insightz capabilities and demonstrated real-world implementation across multiple healthcare facilities.",
      highlights: ["300+ medical professionals", "Product demonstrations", "Networking sessions"],
      status: "Completed"
    }
  ];

  const whitepapers = [
    {
      title: "The Future of Stroke Detection: AI-Powered Solutions in Emergency Medicine",
      author: "GenzaiLabs Research Team",
      date: "September 2024",
      description: "Comprehensive analysis of AI applications in stroke detection, covering current challenges and breakthrough solutions.",
      pages: "24 pages",
      type: "Research Paper"
    },
    {
      title: "Early Stroke Detection Using Deep Learning: A Clinical Validation Study",
      author: "Dr. Sarah Johnson, Dr. Rajesh Kumar",
      date: "July 2024", 
      description: "Multi-center study demonstrating the clinical effectiveness of AI-powered stroke detection in emergency settings.",
      pages: "18 pages",
      type: "Clinical Study"
    },
    {
      title: "Improving Chest X-ray Analysis Through Advanced AI: Real-world Implementation",
      author: "GenzaiLabs Clinical Team",
      date: "May 2024",
      description: "Detailed case studies and implementation guidelines for CXR Insightz in various healthcare environments.",
      pages: "32 pages", 
      type: "Implementation Guide"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Upcoming":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{status}</Badge>;
      case "Registration Open":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
      case "Completed":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              News & Events
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest Updates &
              <span className="text-blue-600"> Research</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Stay informed about our latest research, conference presentations, white papers, 
              and industry events where GenzaiLabs is advancing the future of AI-powered healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at these upcoming conferences and events where we'll be showcasing 
              our latest AI innovations and research findings.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600">{event.date}</span>
                    </div>
                    {getStatusBadge(event.status)}
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{event.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {event.description}
                  </CardDescription>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlights from our recent conference presentations and industry engagements.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600">{event.date}</span>
                    </div>
                    {getStatusBadge(event.status)}
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{event.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {event.description}
                  </CardDescription>
                  {event.highlights && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                      <ul className="space-y-1">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Award className="h-4 w-4 text-blue-600" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Summary
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers & Research */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & White Papers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our latest research publications, clinical studies, and technical white papers 
              on AI-powered healthcare solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <Badge variant="outline">{paper.type}</Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{paper.title}</CardTitle>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>By: {paper.author}</p>
                    <p>{paper.date} • {paper.pages}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6">
                    {paper.description}
                  </CardDescription>
                  <div className="flex flex-col space-y-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Download PDF
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      View Abstract
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Latest Research
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive updates on new research publications, 
            upcoming events, and breakthrough developments in AI-powered healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border-0 text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
