
import { DemoRequestData, FreeTrialData, BrochureDownloadData, ConsultationData } from "./schemas";

// Simulated API calls - replace with actual API endpoints
export const submitDemoRequest = async (data: DemoRequestData): Promise<{ success: boolean; message: string }> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log("Demo Request Submitted:", data);
  
  // Simulate success/failure
  if (Math.random() > 0.1) {
    return {
      success: true,
      message: "Thank you for your demo request! Our team will contact you within 24 hours to schedule your personalized demonstration."
    };
  } else {
    throw new Error("Failed to submit demo request. Please try again.");
  }
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
