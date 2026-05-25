import { Code2, Globe, Server, Wifi } from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="h-5 w-5 text-gray-900" />,
    title: "Full Stack Development",
    description: "End-to-end web application development with modern frameworks",
  },
  {
    icon: <Server className="h-5 w-5 text-gray-900" />,
    title: "Backend Optimization",
    description: "High-performance APIs and database systems at scale",
  },
  {
    icon: <Globe className="h-5 w-5 text-gray-900" />,
    title: "Scalable Systems",
    description: "Architecture designed for growth and reliability",
  },
  {
    icon: <Wifi className="h-5 w-5 text-gray-900" />,
    title: "Remote Collaboration",
    description: "Experienced in distributed teams and async workflows",
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
            I am a results-driven Full-Stack Developer with over three years of
            experience designing, building, and optimizing web applications,
            APIs, and backend systems. Skilled in PHP, Python, Node.js, Laravel,
            Django, and modern frontend technologies, I specialize in creating
            scalable, secure, and high-performance solutions.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            My work has reduced API response times by up to 35%, scaled platforms
            to handle 50,000+ daily requests, and streamlined deployments with
            Docker and CI/CD pipelines. I thrive in collaborative, fast-paced
            environments where problem-solving, clean code, and business impact
            go hand in hand.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-3">
          <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="text-sm text-gray-500">Location</div>
            <div className="font-medium text-gray-900">Malaysia — Working Globally</div>
          </div>
          <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="text-sm text-gray-500">Experience</div>
            <div className="font-medium text-gray-900">3+ Years in Full Stack Development</div>
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
