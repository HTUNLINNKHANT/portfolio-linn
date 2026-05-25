import { Code2, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="h-4 w-4 text-gray-900" />,
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-4 w-4 text-gray-900" />,
    skills: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    title: "Database",
    icon: <Database className="h-4 w-4 text-gray-900" />,
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="h-4 w-4 text-gray-900" />,
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Digital Ocean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg" },
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    ],
  },
];

const additionalSkills = [
  { name: "JWT Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Apache", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
        <div className="mt-1 w-10 h-0.5 bg-gray-900 rounded-full" />
        <p className="mt-3 text-gray-500 text-sm">
          Technologies and tools I work with on a daily basis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full hover:border-gray-300 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-default"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-4 h-4"
                    loading="lazy"
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {additionalSkills.length > 0 && (
        <div className="mt-5 group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <span className="text-gray-900 text-sm font-bold">+</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Other
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full hover:border-gray-300 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-default"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-4 h-4"
                  loading="lazy"
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
