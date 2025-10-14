// Common Types
export interface NavItem {
  name: string;
  href: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon?: string;
  features?: string[];
  tech?: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  service: string;
  budget: string;
  description: string;
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
}



