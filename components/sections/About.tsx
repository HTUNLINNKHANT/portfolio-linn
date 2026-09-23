import { Code2, Globe, Server, Layers } from "lucide-react";

const highlights = [
  {
    icon: <Server className="h-5 w-5 text-gray-900" />,
    title: "Backend Engineering",
    description: "Scalable APIs, business logic, database systems, and integrations",
  },
  {
    icon: <Code2 className="h-5 w-5 text-gray-900" />,
    title: "Full-Stack Development",
    description: "Production web applications using modern frontend and backend technologies",
  },
  {
    icon: <Layers className="h-5 w-5 text-gray-900" />,
    title: "System Architecture",
    description: "Reliable application architecture designed for growth and maintainability",
  },
  {
    icon: <Globe className="h-5 w-5 text-gray-900" />,
    title: "DevOps & Delivery",
    description: "CI/CD, Docker, deployment automation, and production operations",
  },
];

export default function About() {
  return (
    <section id="about" className="py-10">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">About</h2>
        <div className="mt-1 w-10 h-0.5 bg-gray-900 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <p className="text-gray-600 leading-relaxed">
            I&apos;m Htun Linn Khant, a Backend and Full-Stack Developer from
            Myanmar, currently based in Malaysia. With more than four years of
            professional experience, I specialise in building backend systems,
            production APIs, and full-stack web applications that are designed
            to scale.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            My core stack includes Node.js, NestJS, PostgreSQL, and Next.js on
            the backend and full-stack side, alongside Laravel and Python/Django
            for server-side work. I pay close attention to database design,
            query optimisation, and system architecture. On the delivery side I
            work with Docker, CI/CD pipelines, and cloud deployments to keep
            production systems reliable and maintainable.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            My work has reduced API response times by up to 35%, scaled
            platforms to handle 50,000+ daily requests, and streamlined
            deployments through automation. I work well in collaborative,
            distributed teams where clean code and business impact matter.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-3">
          <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="text-sm text-gray-500">Location</div>
            <div className="font-medium text-gray-900">From Myanmar · Based in Malaysia</div>
          </div>
          <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="text-sm text-gray-500">Experience</div>
            <div className="font-medium text-gray-900">4+ Years in Backend &amp; Full-Stack Development</div>
          </div>
          <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="text-sm text-gray-500">Status</div>
            <div className="font-medium text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Available for Remote Work
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3">
              {item.icon}
            </div>
            <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
