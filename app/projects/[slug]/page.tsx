import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  metaDescription: string;
  overview: string;
  problem: string;
  role: string;
  approach: string[];
  architecture: string;
  challenges: string;
  technologies: string[];
  outcome: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "mongodb-postgresql-migration",
    title: "MongoDB to PostgreSQL Migration Platform",
    category: "Data Migration / Backend Platform",
    image: "/projects/mongodb-postgresql-migration.jpg",
    imageAlt:
      "Preview of MongoDB to PostgreSQL Migration Platform dashboard showing schema mapping and data validation workflows",
    metaDescription:
      "Technical case study by Htun Linn Khant covering backend architecture, schema mapping, validation, deduplication, and PostgreSQL migration workflows.",
    overview:
      "A backend-focused migration platform for moving large and growing MongoDB datasets into PostgreSQL while preserving integrity and supporting schema mapping, validation, deduplication, warning handling, and final PostgreSQL export. The system is designed to handle datasets that grow continuously and must be migrated without data loss or duplication.",
    problem:
      "MongoDB source data can grow continuously and may not map directly to the PostgreSQL target schema. A direct import is not reliable — records may contain missing fields, unexpected types, or structural inconsistencies that break relational constraints. Beyond schema differences, duplicate records can accumulate across repeated source exports. The migration workflow needs to accommodate non-specialist users who require a clear, guided process rather than raw database tooling.",
    role:
      "I was responsible for the backend architecture, migration workflow design, schema mapping logic, deduplication strategy, data validation layer, warning detection and resolution workflows, and the final PostgreSQL export design.",
    approach: [
      "MongoDB dump and import into a staging environment for safe inspection",
      "Schema inspection to identify field types, nullability, and structural patterns",
      "Automatic schema mapping from MongoDB document structure to relational PostgreSQL tables",
      "Warning detection for fields that cannot be mapped automatically or contain unexpected values",
      "Manual warning resolution step for edge cases requiring human judgment",
      "Deduplication before insertion using identifier fields and fallback field combinations where a single unique key is not available",
      "Migration progress tracking so operators can monitor batch status",
      "PostgreSQL validation after insertion to confirm integrity",
      "Final export and handoff workflow",
    ],
    architecture:
      "The platform operates as a backend pipeline with discrete stages: source ingestion, schema analysis, transformation, deduplication, validation, and target insertion. Each stage is designed to be observable and recoverable — failed stages can be retried without reprocessing completed work. The deduplication layer uses configurable identifier combinations rather than assuming a single universal key, which makes it adaptable to different source dataset structures.",
    challenges:
      "The core engineering challenge is reliable deduplication across continuously growing datasets. Duplicate detection depends on identifiers and fallback field combinations because source data does not always contain a single guaranteed unique key. This requires a configurable deduplication strategy that can be tuned per dataset while still providing strong guarantees before insertion into PostgreSQL.",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Node.js",
      "ETL Pipeline Design",
      "Schema Mapping",
      "Data Validation",
      "Deduplication Logic",
      "Migration Automation",
    ],
    outcome:
      "The platform provides a structured, repeatable workflow for migrating MongoDB datasets into PostgreSQL without manual scripting for each migration. It surfaces warnings early, enables human resolution of edge cases, and enforces deduplication and validation before any data reaches the target database. The design supports future dataset growth by treating the migration as a pipeline rather than a one-time bulk operation.",
  },
  {
    slug: "multi-branch-pos",
    title: "Multi-Branch POS & Inventory System",
    category: "Retail / Business System",
    image: "/projects/multi-branch-pos.png",
    imageAlt:
      "Preview of Multi-Branch POS and Inventory System interface showing sales and stock management across branches",
    metaDescription:
      "Technical case study by Htun Linn Khant on backend system design for a multi-branch POS and inventory platform with RBAC, audit logs, and consolidated reporting.",
    overview:
      "A retail management platform supporting multiple branches with separate stock ledgers while allowing centralized management and reporting. The system covers the full retail operations workflow — from stock arrival and supplier management through daily sales and cashier shifts to management-level reporting across all branches.",
    problem:
      "Each branch must maintain its own inventory and sales operations independently so that stock movements, adjustments, and sales at one branch do not affect or interfere with another. At the same time, management needs consolidated visibility across all branches — total stock positions, cross-branch sales, expenses, and performance comparisons — without having to switch between separate systems. Standard single-inventory systems do not support this model cleanly.",
    role:
      "I was responsible for system architecture, backend workflow design, branch-aware inventory logic, RBAC planning and implementation, transaction flow design, audit logging architecture, and the reporting layer design.",
    approach: [
      "Branch-aware authentication and access control — users authenticate into a specific branch context",
      "Branch-specific inventory ledgers with isolated stock balances per branch",
      "Stock movement tracking: purchases in, sales out, manual adjustments, inter-branch visibility",
      "Sales transaction workflows covering standard sales, discounts, and receipt generation",
      "Purchase and supplier management per branch",
      "Returns processing with stock reconciliation",
      "Expense tracking per branch",
      "Cashier shift management with shift open/close workflows and shift history",
      "Audit logs capturing state changes with timestamps and operator identity",
      "Role and permission control distinguishing cashier, branch manager, and admin-level access",
      "Consolidated reporting aggregating data across branches for management view",
    ],
    architecture:
      "The backend is structured around branch isolation as a first-class concept. Each inventory, sales, and financial record carries a branch identifier, and all queries are scoped by branch context at the data layer rather than relying on application-level filtering alone. The RBAC model maps roles to both permissions and branch scope — a cashier can only act within their assigned branch, while a management role can query across branches. Audit logs are append-only and capture the actor, action, and affected records.",
    challenges:
      "The main engineering challenge is maintaining correct stock balances per branch while supporting consolidated reporting. Branch-level operations must be atomic — a sale must atomically decrement stock and create a transaction record — while management queries must aggregate across branches consistently without locking branch-level operations. Getting this balance right at the data layer is the core design constraint.",
    technologies: [
      "PostgreSQL",
      "Backend APIs",
      "RBAC",
      "Transactional Workflows",
      "Inventory Architecture",
      "Audit Logging",
      "Multi-Branch Data Design",
      "Reporting",
    ],
    outcome:
      "The system enables retail operations across multiple branches from a single platform. Branch staff operate entirely within their own context with no risk of cross-branch data contamination, while management has real-time consolidated visibility. The audit log design provides a reliable operations trail. The RBAC model supports the full staff hierarchy without requiring separate deployments per branch.",
  },
  {
    slug: "map-area-measurement",
    title: "Map Area Measurement Platform",
    category: "Geospatial / Mobile Backend",
    image: "/projects/map-area-measurement.png",
    imageAlt:
      "Preview of Map Area Measurement Platform with polygon-based land area measurement on a map interface",
    metaDescription:
      "Technical case study by Htun Linn Khant on backend and geospatial API design for a polygon-based land area measurement platform supporting mobile field applications.",
    overview:
      "A backend and geospatial platform supporting mobile applications that allow users to draw polygons on a map and calculate land or field area measurements. The platform receives coordinate data from mobile clients, processes geometry, calculates area, stores measurement records, and provides history retrieval — all through a structured REST API designed for mobile integration.",
    problem:
      "Mobile users working in the field need to define polygon boundaries on a map, calculate the area enclosed, and store measurements for later reference. The backend must reliably receive polygon coordinate sequences, validate the geometry, calculate area accurately, persist the measurement, and allow users to retrieve their measurement history. Coordinate data from mobile devices can vary in precision and sequence, so the backend must handle these variations consistently.",
    role:
      "I was responsible for the backend and API architecture, geospatial data model design, measurement record workflows, coordinate storage design, and the mobile-friendly REST API layer.",
    approach: [
      "Polygon coordinate submission endpoint accepting ordered coordinate sequences from mobile clients",
      "Geometry validation to confirm the submitted polygon is closed, non-self-intersecting, and has sufficient vertices",
      "Area calculation workflow applied to validated polygon geometry",
      "Measurement record storage associating the calculated area, coordinate data, and metadata with the authenticated user",
      "User measurement history retrieval with filtering and pagination support",
      "Mobile-friendly REST API design with consistent response structures and clear error codes",
      "Authentication to associate measurements with individual user accounts",
      "Structured error responses so mobile clients can surface meaningful feedback to users",
    ],
    architecture:
      "The API is structured around measurement as the core domain entity. A measurement request carries a coordinate sequence; the backend validates, calculates, and persists it as an atomic operation. Coordinate sequences are stored alongside the calculated result so historical measurements can be re-inspected or re-rendered on the mobile map. The API response design follows a consistent envelope pattern so the mobile client has predictable parsing logic regardless of the operation outcome.",
    challenges:
      "The core engineering challenge is handling polygon geometry and measurement data consistently between mobile and backend systems. Mobile clients submit coordinates in varying precision formats and sequence orders. The backend must normalize these inputs, confirm geometric validity, and calculate area in a way that produces stable, repeatable results — particularly for irregular field boundaries where coordinate density varies significantly across different user drawing styles.",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "REST APIs",
      "Geospatial Data Design",
      "Polygon Geometry",
      "Coordinate Processing",
      "Mobile Backend Integration",
      "System Architecture",
    ],
    outcome:
      "The platform provides a reliable backend foundation for mobile field measurement applications. Users can draw polygons, receive instant area calculations, and retrieve their full measurement history. The consistent REST API design keeps the mobile integration straightforward, and the geometry validation layer prevents malformed coordinate data from reaching the storage layer.",
  },
];

// ─── Static params (required for output: export) ─────────────────────────────

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};

  const url = `https://htunlinnkhant.dev/projects/${cs.slug}`;
  return {
    title: `${cs.title} | Htun Linn Khant`,
    description: cs.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${cs.title} | Htun Linn Khant`,
      description: cs.metaDescription,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[780px] mx-auto px-6 sm:px-8 py-16">

        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Projects
        </Link>

        <article>
          {/* Category */}
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            {cs.category}
          </span>

          {/* Title */}
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {cs.title}
          </h1>

          {/* Hero image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 mt-8">
            <Image
              src={cs.image}
              alt={cs.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 780px) 100vw, 780px"
            />
          </div>

          {/* ── Overview ── */}
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-gray-900">Project Overview</h2>
            <div className="mt-1 w-8 h-0.5 bg-gray-900 rounded-full" />
            <p className="mt-4 text-gray-600 leading-relaxed">{cs.overview}</p>
          </section>

          {/* ── Problem ── */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">Problem</h2>
            <div className="mt-1 w-8 h-0.5 bg-gray-900 rounded-full" />
            <p className="mt-4 text-gray-600 leading-relaxed">{cs.problem}</p>
          </section>

          {/* ── My Role ── */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">My Role</h2>
            <div className="mt-1 w-8 h-0.5 bg-gray-900 rounded-full" />
            <p className="mt-4 text-gray-600 leading-relaxed">{cs.role}</p>
          </section>

          {/* ── Technical Approach ── */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">Technical Approach</h2>
            <div className="mt-1 w-8 h-0.5 bg-gray-900 rounded-full" />
            <ul className="mt-4 space-y-2">
              {cs.approach.map((step) => (
                <li key={step} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Core Architecture ── */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">Core Architecture</h2>
            <div className="mt-1 w-8 h-0.5 bg-gray-900 rounded-full" />
            <p className="mt-4 text-gray-600 leading-relaxed">{cs.architecture}</p>
          </section>

          {/* ── Key Engineering Challenges ── */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">Key Engineering Challenge</h2>
            <div className="mt-1 w-8 h-0.5 bg-gray-900 rounded-full" />
            <p className="mt-4 text-gray-600 leading-relaxed">{cs.challenges}</p>
          </section>

          {/* ── Technologies ── */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">Technologies</h2>
            <div className="mt-1 w-8 h-0.5 bg-gray-900 rounded-full" />
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* ── Outcome ── */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">Outcome / What the System Enables</h2>
            <div className="mt-1 w-8 h-0.5 bg-gray-900 rounded-full" />
            <p className="mt-4 text-gray-600 leading-relaxed">{cs.outcome}</p>
          </section>

          {/* ── Footer back link ── */}
          <div className="mt-14 pt-8 border-t border-gray-100">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
