import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  FileText,
  Award,
  ExternalLink,
} from "lucide-react";

const Events = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // white-paper
  const whitepapers = [
    {
      title: "Through the Lens of Stroke Insights",
      author: "GenzaiLabs Research Team",
      date: "October 2025",
      description:
        "AI-powered clinical decision support (CDS) software helps physicians make life-changing decisions faster. But only CDS tools with clinical depth identify, locate, characterize and quantify suspected conditions with an unrivaled degree of accuracy.",
      pages: "20 pages",
      type: "White Paper",
    },
  ];

  const handleDownload = () => {
    navigate("/stroke-white-paper");
  };

  const upcomingEvents = [
    {
      title: "RSNA 2024 - Radiology Conference",
      date: "December 1-5, 2024",
      location: "Chicago, IL, USA",
      type: "Conference",
      description:
        "Join us at the world's largest radiology conference where we'll showcase the latest advancements in AI-powered medical imaging.",
      status: "Upcoming",
    },
    {
      title: "Healthcare AI Summit 2025",
      date: "February 15-17, 2025",
      location: "San Francisco, CA, USA",
      type: "Summit",
      description:
        "Presenting our research on stroke detection accuracy improvements and real-world clinical implementation results.",
      status: "Registration Open",
    },
  ];

  // events
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Upcoming":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            {status}
          </Badge>
        );
      case "Registration Open":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            {status}
          </Badge>
        );
      case "Completed":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            {status}
          </Badge>
        );
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
              Latest Updates &<span className="text-blue-600"> Research</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Stay informed about our latest research, conference presentations,
              white papers, and industry events where GenzaiLabs is advancing
              the future of AI-powered healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events
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
      </section> */}

      {/* Events and News*/}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Events & News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest breakthroughs, innovations, and
              developments at GenzaiLabs. Explore our upcoming events, product
              launches, industry conferences, and expert insights. Follow our
              journey as we continue to revolutionize stroke detection and
              medical AI solutions.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {events.map((event) => (
              <div
                key={event.id}
                className="hover:shadow-lg transition-shadow border-none shadow-md cursor-pointer rounded-lg"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.summary}
                  </p>
                  <button
                    className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-md"
                    onClick={() => setSelectedEvent(event)}
                  >
                    View Summary
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Popup for Event Details */}
      {selectedEvent && (
        <dialog
          open
          className="rounded-2xl fixed inset-0 bg-black/30 flex items-center justify-center p-4 top-12"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedEvent(null);
          }}
        >
          <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[82vh] overflow-y-auto">
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

      {/* White Papers & Research */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research & White Papers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our latest research publications, clinical studies, and
              technical white papers on AI-powered healthcare solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="hover:shadow-lg transition-shadow border-none shadow-md rounded-2xl"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {paper.type}
                    </span>
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2 font-semibold">
                    {paper.title}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>By: {paper.author}</p>
                    <p>
                      {paper.date} • {paper.pages}
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-6">{paper.description}</p>
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={handleDownload}
                      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Latest Research
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive updates on new research
            publications, upcoming events, and breakthrough developments in
            AI-powered healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border-0 text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 w-19 h-15">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
