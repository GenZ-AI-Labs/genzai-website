import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Seo } from "@/components/Seo";
import {
  BookOpen,
  Users,
  Calendar,
  FileText,
  ArrowRight,
  ExternalLink,
  Download,
} from "lucide-react";

interface Publication {
  title: string;
  authors: string[];
  journal: string;
  volume: string;
  date: string;
  paperId: string;
  abstract: string;
  keywords: string[];
  pdf: string;
}

const publications: Publication[] = [
  {
    title:
      "Integration of AI Stroke Analysis into Radiology Workflow: Real-World Experience with Stroke Insightz for MRI from Indian Perspective",
    authors: [
      "Dr. Yashraj Patil",
      "Dr. Sushil Kachewar",
      "Rahim Pathan (GenzAI Labs)",
    ],
    journal: "International Journal of Scientific Research",
    volume: "Vol. 15 | Issue 03",
    date: "March 2026",
    paperId: "DOI: 10.36106/ijsr | ISSN: 2277-8179",
    abstract:
      "A PRISMA-guided systematic review of the key workflow limitations hindering timely stroke diagnosis in India, synthesising global and Indian evidence on AI-enabled stroke imaging. The paper presents an embedded real-world case illustration of the Stroke Insightz MRI pipeline deployed at a tertiary Indian centre, demonstrating scan-to-AI completion times of 6–10 minutes, immediate AI-to-notification, and a >60% reduction in MRI post-processing workload.",
    keywords: [
      "Acute Ischaemic Stroke",
      "MRI Perfusion",
      "DWI-ASPECTS",
      "Workflow Integration",
      "Indian Healthcare",
    ],
    pdf: "/ijsr-stroke-insightz-mri-2026.pdf",
  },
  {
    title:
      "Experiences of Stroke Insightz AI for Stroke Analysis into MR Imaging Workflow: A Global Perspective",
    authors: [
      "Yashraj Patil",
      "Sushil Kachewar",
      "Rahim Pathan (GenzAI Labs)",
    ],
    journal: "British Journal of Medical & Health Sciences (BJMHS)",
    volume: "Vol. 8 | Issue 2",
    date: "February 2026",
    paperId: "Paper ID: BJMHS450537",
    abstract:
      "A PRISMA-2020 systematic synthesis of AI-powered MRI stroke analysis platforms evaluating diagnostic performance, workflow integration and clinical impact. The review confirms that MRI-based AI achieves pooled sensitivity and specificity of ~93% for acute ischaemic lesion detection, and positions Stroke Insightz as part of a new generation of clinical decision support tools standardising MRI stroke analysis and optimising turnaround time.",
    keywords: [
      "MRI Stroke",
      "DWI/ADC Segmentation",
      "Systematic Review",
      "PRISMA 2020",
      "Clinical Decision Support",
    ],
    pdf: "/bjmhs-stroke-insightz-global.pdf",
  },
  {
    title:
      "Validation of an AI-Based Tool for Detecting Radiographic Findings Suggestive of Tuberculosis: A Pilot Study",
    authors: [
      "Yashraj Patil",
      "Sushil Kachewar",
      "Rahim Pathan (GenzAI Labs)",
    ],
    journal: "British Journal of Medical & Health Sciences (BJMHS)",
    volume: "Vol. 8 | Issue 2",
    date: "February 2026",
    paperId: "Paper ID: BJMHS450536",
    abstract:
      "A pilot validation study of CXR Insightz (now TB Insightz) on a retrospective dataset of 170 chest X-rays (88 TB-positive, 82 normal). The AI tool achieved an overall accuracy of 93.53%, sensitivity of 100%, specificity of 86.59%, F1-score of 94.12%, ROC-AUC of 0.9329, and strong agreement with radiologist findings (Cohen's Kappa = 0.8698) — supporting its utility as a screening aid in large-scale TB workflows.",
    keywords: [
      "Tuberculosis",
      "Chest X-Ray",
      "TB Insightz",
      "AI Screening",
      "Clinical Validation",
    ],
    pdf: "/bjmhs-tb-insightz-validation.pdf",
  },
];

const Publications = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Publications"
        description="Peer-reviewed research publications from GenzAI Labs on AI stroke analysis, MRI perfusion workflow integration, and AI-based tuberculosis screening."
        path="/publications"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Publications
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Peer-Reviewed
            <span className="text-blue-600"> Research</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Published research papers validating the clinical performance and
            real-world workflow impact of GenzAI Labs' AI-powered medical
            imaging platforms.
          </p>
        </div>
      </section>

      {/* Publications list */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {publications.map((pub, i) => (
            <Card
              key={i}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900 leading-snug mb-3">
                      {pub.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span>{pub.authors.join(", ")}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mt-2">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">{pub.journal}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>
                          {pub.volume} — {pub.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{pub.paperId}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed mb-4">
                  {pub.abstract}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.keywords.map((kw, k) => (
                    <Badge
                      key={k}
                      variant="outline"
                      className="text-xs border-blue-200 text-blue-700"
                    >
                      {kw}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Paper
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <a href={pub.pdf} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Request Full Papers
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us for full-text copies of our published research or to
            collaborate on clinical validation studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
