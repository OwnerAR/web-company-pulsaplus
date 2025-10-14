import type { Metadata } from "next";
import { ApiDocsClient } from "@/components/sections/ApiDocsClient";

export const metadata: Metadata = {
  title: 'API Documentation',
};

export default function ApiDocsPage() {
  return <ApiDocsClient />;
}
