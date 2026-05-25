import { ArrowRight, Mail, MapPin } from "lucide-react";

const metrics = [
  { value: "3+", label: "Years Experience" },
  { value: "50K+", label: "Daily Requests" },
  { value: "35%", label: "API Latency Reduced" },
];

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-10">
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left — Content */}
        <div>
          {/* Status badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Available for work
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight">
            Hi, I&apos;m Htun Linn Khant.
            <br />
            <span className="text-gray-900">Full Stack Developer.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base text-gray-500 leading-relaxed max-w-[520px]">
            I build high-performance web applications and scalable backend
            systems. Specialized in API optimization, DevOps, and delivering
            production-ready solutions that handle real-world traffic.
          </p>

          {/* Location */}
          <div className="mt-4 flex items-center gap-1.5 text-sm text-gray-400">
            <MapPin className="h-3.5 w-3.5" />
            Based in Malaysia · Working globally
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              View Experience
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right — Metrics */}
        <div className="hidden lg:flex flex-col gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/50 min-w-[200px]"
            >
              <div className="text-3xl font-bold text-gray-900">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile metrics */}
      <div className="grid grid-cols-3 gap-3 mt-10 lg:hidden">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 text-center"
          >
            <div className="text-xl font-bold text-gray-900">{metric.value}</div>
            <div className="mt-0.5 text-xs text-gray-500">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
