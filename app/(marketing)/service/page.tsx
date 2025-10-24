import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobile,
  faCloud,
  faDatabase,
  faServer,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: 'Service - Layanan Kami',
  description: 'Layanan digital profesional Pulsa Plus: Web Development, Mobile Apps, API Development, Cloud & DevOps, UI/UX Design. Solusi lengkap untuk bisnis Anda.',
  keywords: ['layanan', 'web development', 'mobile apps', 'api development', 'cloud devops', 'ui ux design', 'digital services'],
  openGraph: {
    title: 'Layanan Digital Profesional - Pulsa Plus',
    description: 'Web Development, Mobile Apps, API Development, Cloud & DevOps, UI/UX Design.',
    type: 'website',
  },
};

export default function ServicePage() {
  const services = [
    {
      icon: faCode,
      title: "Web Development",
      description: "Pembuatan website profesional dengan teknologi modern",
      features: [
        "Website Company Profile",
        "E-Commerce Platform",
        "Web Application",
        "Progressive Web Apps (PWA)",
        "Landing Pages",
      ],
      tech: ["Next.js", "React", "Node.js", "Laravel", "WordPress"],
    },
    {
      icon: faMobile,
      title: "Mobile App Development",
      description: "Aplikasi mobile untuk iOS dan Android",
      features: [
        "Native Apps (iOS & Android)",
        "Cross-Platform Apps",
        "Hybrid Apps",
        "App Maintenance & Updates",
        "App Store Deployment",
      ],
      tech: ["Flutter", "React Native", "Swift", "Kotlin"],
    },
    {
      icon: faCloud,
      title: "API Development & Integration",
      description: "RESTful API dan integrasi sistem",
      features: [
        "RESTful API Development",
        "GraphQL API",
        "Third-Party Integration",
        "Payment Gateway Integration",
        "API Documentation",
      ],
      tech: ["Node.js", "NestJS", "Go", "Express.js"],
    },
    {
      icon: faDatabase,
      title: "Database Design & Management",
      description: "Perancangan dan optimasi database",
      features: [
        "Database Architecture",
        "Query Optimization",
        "Data Migration",
        "Backup & Recovery",
        "Database Monitoring",
      ],
      tech: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      icon: faServer,
      title: "Cloud & DevOps",
      description: "Deployment dan infrastruktur cloud",
      features: [
        "Cloud Deployment",
        "CI/CD Pipeline",
        "Server Management",
        "Docker & Kubernetes",
        "Monitoring & Logging",
      ],
      tech: ["AWS", "Google Cloud", "Docker", "GitHub Actions"],
    },
    {
      icon: faPaintBrush,
      title: "UI/UX Design",
      description: "Desain antarmuka yang menarik dan user-friendly",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Prototyping",
        "Design System",
        "Responsive Design",
      ],
      tech: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS"],
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-lg text-gray-600">
            Kami menyediakan berbagai layanan digital profesional untuk membantu
            bisnis Anda berkembang di era digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="h-7 w-7 text-blue-600"
                />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Fitur:</h3>
                <ul className="space-y-1 text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Teknologi:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


