
import { DemoRequestData, FreeTrialData, BrochureDownloadData, ConsultationData } from "./schemas";

// Simulated API calls - replace with actual API endpoints
// src/lib/form-utils.ts
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_71vjckg";
const ADMIN_TEMPLATE_ID = "template_h0ssayo";
const AUTO_REPLY_ID = "template_b5gvufn";
const USER_ID = "hU4RpiH0HQW3_Hevo";

if (!SERVICE_ID || !ADMIN_TEMPLATE_ID || !AUTO_REPLY_ID || !USER_ID) {
  throw new Error("EmailJS environment variables are missing");
}

/* Helper – short title for the auto-reply */
const buildTitle = (d: DemoRequestData) =>
  `${d.productInterest.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())} – ${d.organization}`;

export const submitDemoRequest = async (data: DemoRequestData) => {
  const commonParams = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    organization: data.organization,
    role: data.role || "—",
    productInterest: data.productInterest,
    message: data.message,
    submittedAt: new Date().toLocaleString("en-IN"),
    year: new Date().getFullYear(),
  };

  /* 1. Send ADMIN EMAIL (notification) */
  await emailjs.send(SERVICE_ID!, ADMIN_TEMPLATE_ID!, commonParams, USER_ID!);

  /* 2. Send AUTO-REPLY TO USER */
  const title = buildTitle(data);
  const replyParams = {
    ...commonParams,
    title,
    to_email: data.email, // Important for EmailJS recipient
  };

  const replyResult = await emailjs.send(
    SERVICE_ID!,
    AUTO_REPLY_ID!,
    replyParams,
    USER_ID!
  );

  if (replyResult.status !== 200) {
    throw new Error("Auto-reply failed");
  }

  return { message: "Demo request sent – check your inbox for confirmation!" };
};


export const submitFreeTrialRequest = async (data: FreeTrialData): Promise<{ success: boolean; message: string }> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log("Free Trial Request Submitted:", data);
  
  if (Math.random() > 0.1) {
    return {
      success: true,
      message: "Your free trial request has been submitted! Check your email for setup instructions and trial access credentials."
    };
  } else {
    throw new Error("Failed to submit trial request. Please try again.");
  }
};

export const submitBrochureRequest = async (data: BrochureDownloadData): Promise<{ success: boolean; message: string; downloadUrl?: string }> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Brochure Request Submitted:", data);
  
  if (Math.random() > 0.1) {
    return {
      success: true,
      message: "Thank you! Your brochure download has started and a copy has been sent to your email.",
      downloadUrl: "/brochures/genzailabs-overview.pdf" // Placeholder URL
    };
  } else {
    throw new Error("Failed to process download request. Please try again.");
  }
};

export const submitConsultationRequest = async (data: ConsultationData): Promise<{ success: boolean; message: string }> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log("Consultation Request Submitted:", data);
  
  if (Math.random() > 0.1) {
    return {
      success: true,
      message: "Your consultation request has been received! Our team will contact you within 4 hours to confirm your appointment time."
    };
  } else {
    throw new Error("Failed to submit consultation request. Please try again.");
  }
};
