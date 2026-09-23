import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "MOT",
    location: "Remote",
    period: "Aug 2025 – Present",
    current: true,
    achievements: [
      "Designing and developing scalable web platforms using modern full-stack technologies",
      "Building and integrating RESTful APIs to support business-critical workflows",
      "Collaborating with cross-functional teams to deliver features on schedule",
    ],
    technologies: ["React", "Next.js", "Node.js", "Laravel", "PostgreSQL", "Docker"],
  },
  {
    title: "Remote Backend Developer",
    company: "Startrick Sdn Bhd",
    location: "Malaysia",
    period: "Jun 2024 – Apr 2025",
    current: false,
    achievements: [
      "Developed and optimized backend systems and APIs in Python, Node.js, and PHP, reducing API latency by 35%",
      "Enhanced MySQL/PostgreSQL performance to support 50K+ daily requests with zero downtime",
      "Implemented Docker-based CI/CD pipelines, cutting deployment time from hours to under 15 minutes",
    ],
    technologies: ["Python", "Node.js", "PHP", "MySQL", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    title: "System Developer",
    company: "MPT-KSGM",
    location: "Myanmar",
    period: "Aug 2023 – Apr 2024",
    current: false,
    achievements: [
      "Built responsive web applications using Django, PHP, and SQL, reducing page load time by 25%",
      "Integrated and optimized RESTful APIs, boosting data processing efficiency by 15%",
      "Coordinated with cross-functional teams to deliver projects 10% ahead of schedule",
    ],
    technologies: ["Django", "JavaScript", "PHP", "SQL", "RESTful APIs"],
  },
  {
    title: "Web Developer",
    company: "Royal Express",
    location: "Myanmar",
    period: "Jul 2022 – Aug 2023",
    current: false,
    achievements: [
      "Developed and maintained websites with Laravel, HTML, CSS, JavaScript, and SQL",
      "Built secure authentication systems, eliminating unauthorized access attempts",
      "Enhanced mobile responsiveness, increasing mobile engagement by 35%",
    ],
    technologies: ["Laravel", "JavaScript", "SQL", "Authentication", "Spatie"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
        <div className="mt-1 w-10 h-0.5 bg-gray-900 rounded-full" />
        <p className="mt-3 text-gray-500 text-sm">
          Over 4 years of progressive experience in full-stack development, backend optimization, and system architecture.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gray-200 hidden sm:block" />

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div key={index} className="relative sm:pl-8">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-3 w-[15px] h-[15px] rounded-full border-[3px] ${exp.current ? "border-gray-900 bg-gray-900" : "border-gray-300 bg-white"} hidden sm:block`} />

              <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-gray-900 font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 flex-shrink-0">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-2 w-1 h-1 bg-gray-900 rounded-full flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded-full"
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
    </section>
  );
}
