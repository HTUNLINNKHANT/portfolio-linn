"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  engineeringFocus: string;
  image: string;
  imageAlt: string;
  caseStudySlug?: string;
}

const projects: Project[] = [
  {
    title: "MongoDB to PostgreSQL Migration Platform",
    category: "Data Migration / Backend Platform",
    description:
      "A migration platform designed to move large and continuously growing MongoDB datasets into PostgreSQL while preserving data integrity. Handles schema transformation, deduplication, validation, warning resolution, and final PostgreSQL export across datasets designed to scale to hundreds of thousands of records.",
    tags: ["MongoDB", "PostgreSQL", "ETL", "Schema Mapping", "Data Validation", "Deduplication", "Migration Automation"],
    engineeringFocus: "Engineering focus: reliable data integrity guarantees across schema transformation and incremental batch processing.",
    image: "/projects/mongodb-postgresql-migration.png",
    imageAlt: "Preview of MongoDB to PostgreSQL Migration Platform dashboard showing schema mapping and data validation workflows",
    caseStudySlug: "mongodb-postgresql-migration",
  },
  {
    title: "Multi-Branch POS & Inventory System",
    category: "Retail / Business System",
    description:
      "A multi-branch point-of-sale platform for retail operations. Each branch maintains independent stock while management accesses consolidated reporting. Covers sales history, inventory movement, stock adjustments, purchases, returns, expenses, supplier management, cashier shifts, RBAC, and audit logs.",
    tags: ["Multi-Branch Architecture", "Inventory Management", "RBAC", "PostgreSQL", "Audit Logs", "Transaction Workflows", "Reporting"],
    engineeringFocus: "Key challenge: isolated per-branch stock operations with consolidated cross-branch business visibility.",
    image: "/projects/multi-branch-pos.png",
    imageAlt: "Preview of Multi-Branch POS and Inventory System interface showing sales and stock management across branches",
    caseStudySlug: "multi-branch-pos",
  },
  {
    title: "Movie Streaming Platform",
    category: "Media Platform",
    description:
      "A full-stack streaming platform built around content management, user access control, media discovery, playback workflows, and scalable backend services. The architecture supports structured content libraries, API-driven integration, and authentication flows for a media-focused application.",
    tags: ["Backend APIs", "Authentication", "Content Management", "Database Design", "Streaming Workflows", "Full-Stack Development"],
    engineeringFocus: "Engineering focus: scalable backend API design supporting content delivery, user sessions, and media access control.",
    image: "/projects/movie-streaming-platform.png",
    imageAlt: "Preview of Movie Streaming Platform showing content library and playback interface",
  },
  {
    title: "E-Commerce Platform",
    category: "Commerce Platform",
    description:
      "A production-oriented e-commerce system covering product catalog management, customers, orders, inventory tracking, authentication, and admin operations. Built with a payments-ready architecture and deployment workflows designed for reliable production operations.",
    tags: ["Next.js", "Backend APIs", "PostgreSQL", "Authentication", "Product Management", "Order Management", "CI/CD"],
    engineeringFocus: "Engineering focus: clean domain separation across catalog, orders, and inventory with CI/CD-backed deployment.",
    image: "/projects/e-commerence.png",
    imageAlt: "Preview of E-Commerce Platform showing product catalog and order management dashboard",
  },
  {
    title: "E-Learning Platform",
    category: "Education Platform",
    description:
      "A learning platform supporting structured educational content, user access management, course delivery, progress-oriented workflows, and administration. Designed with role and permission controls and a scalable application architecture appropriate for educational use cases.",
    tags: ["User Management", "Learning Content", "Backend APIs", "Role & Permission", "Database Design", "Full-Stack Development"],
    engineeringFocus: "Engineering focus: role-based access across learner, instructor, and admin workflows with structured content delivery.",
    image: "/projects/elearning-platform.png",
    imageAlt: "Preview of E-Learning Platform showing course management and learner progress interface",
  },
  {
    title: "Map Area Measurement Platform",
    category: "Geospatial / Mobile Backend",
    description:
      "A geospatial backend platform supporting polygon-based land and field area measurement. Users draw polygons via a mobile application; the backend handles coordinate storage, geometry processing, measurement records, and REST APIs that serve field-based mobile clients.",
    tags: ["Polygon Geometry", "Geospatial Data", "REST APIs", "PostgreSQL", "Mobile Backend", "Coordinate Processing", "System Architecture"],
    engineeringFocus: "Engineering focus: accurate polygon geometry processing and a clean REST API layer for mobile-first field applications.",
    image: "/projects/map-area-measurement.png",
    imageAlt: "Preview of Map Area Measurement Platform with polygon-based land area measurement on a map interface",
    caseStudySlug: "map-area-measurement",
  },
];

function ProjectImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="w-full aspect-video rounded-xl bg-gray-100 flex items-center justify-center">
        <span className="text-xs text-gray-400 px-4 text-center">{title}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setErrored(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 530px"
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Selected Projects</h2>
        <div className="mt-1 w-10 h-0.5 bg-gray-900 rounded-full" />
        <p className="mt-4 text-sm text-gray-500 max-w-[600px] leading-relaxed">
          Selected backend, full-stack, data, and system architecture projects I
          have worked on across migration, commerce, retail, education, media,
          and geospatial applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Preview image */}
            <div className="p-4 pb-0">
              <ProjectImage
                src={project.image}
                alt={project.imageAlt}
                title={project.title}
              />
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
              {/* Category */}
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="mt-2 text-base font-semibold text-gray-900 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Engineering focus */}
              <p className="mt-4 text-xs text-gray-400 italic leading-relaxed">
                {project.engineeringFocus}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Case study link */}
              {project.caseStudySlug && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <Link
                    href={`/projects/${project.caseStudySlug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
