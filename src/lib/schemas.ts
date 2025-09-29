
import { z } from "zod";

export const demoRequestSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organization: z.string().min(2, "Organization is required"),
  role: z.string().optional(),
  productInterest: z.enum(["stroke-insightz", "cxr-insightz", "general-inquiry", "partnership"]),
  preferredDate: z.date().optional(),
  message: z.string().min(10, "Please provide more details about your requirements"),
});

export const freeTrialSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organization: z.string().min(2, "Organization is required"),
  role: z.string().min(2, "Role/Title is required"),
  hospitalSize: z.enum(["small", "medium", "large", "enterprise"]),
  currentSolution: z.string().optional(),
  trialType: z.enum(["stroke-insightz", "cxr-insightz", "both"]),
});

export const brochureDownloadSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization is required"),
  role: z.string().min(2, "Role/Title is required"),
  brochureType: z.enum(["company-overview", "stroke-insightz", "cxr-insightz", "all-products"]),
});

export const consultationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organization: z.string().min(2, "Organization is required"),
  role: z.string().min(2, "Role/Title is required"),
  consultationType: z.enum(["technical", "business", "implementation", "partnership"]),
  preferredDate: z.date().optional(),
  timeSlot: z.enum(["morning", "afternoon", "evening"]).optional(),
  message: z.string().min(10, "Please describe what you'd like to discuss"),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;
export type FreeTrialData = z.infer<typeof freeTrialSchema>;
export type BrochureDownloadData = z.infer<typeof brochureDownloadSchema>;
export type ConsultationData = z.infer<typeof consultationSchema>;
