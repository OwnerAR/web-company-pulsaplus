import type { Metadata } from "next";
import { ApiDocsClient } from "@/components/sections/ApiDocsClient";
import { SidebarNavigation } from "@/components/sections/SidebarNavigation";

export const metadata: Metadata = {
  title: 'API Documentation',
};

export default function ApiDocsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SidebarNavigation />
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto scroll-smooth">
        <ApiDocsClient />
      </main>
    </div>
  );
}
