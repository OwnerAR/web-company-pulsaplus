import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(100, "Nama maksimal 100 karakter"),
  email: z.string().email("Email tidak valid"),
  subject: z.string().min(5, "Subjek minimal 5 karakter").max(200, "Subjek maksimal 200 karakter"),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(1000, "Pesan maksimal 1000 karakter"),
});

export const quoteRequestSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(100, "Nama maksimal 100 karakter"),
  email: z.string().email("Email tidak valid"),
  service: z.string().min(1, "Pilih layanan"),
  budget: z.string().min(1, "Budget harus diisi"),
  description: z.string().min(20, "Deskripsi minimal 20 karakter").max(2000, "Deskripsi maksimal 2000 karakter"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuoteRequestData = z.infer<typeof quoteRequestSchema>;



