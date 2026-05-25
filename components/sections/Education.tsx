import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master's Degree in Information Technology",
    institution: "INTI International University",
    location: "Malaysia",
    period: "2025 – 2026",
    description:
      "Focus on advanced software development, cloud computing, and project management.",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Edinburgh Napier University",
    location: "Scotland, UK",
    period: "2020 – 2021",
    description:
      "Project Management for Information Systems, DevOps, Web Technologies, Software Development, and Database Systems.",
  },
  {
    degree: "HND in Computing (Pearson BTEC Level 5)",
    institution: "Info Myanmar University & Edinburgh Napier University",
    location: "Myanmar",
    period: "2019 – 2020",
    description:
      "Programming, networking, and database management. Achieved distinction in web development modules.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-10">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
        <div className="mt-1 w-10 h-0.5 bg-gray-900 rounded-full" />
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-gray-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  
                </div>
                <p className="text-gray-900 text-sm font-medium mt-0.5">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-400 mt-0.5">
                  {edu.location} · {edu.period}
                </p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
