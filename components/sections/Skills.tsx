'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { Code2, Database, Wrench, TrendingUp, Star, Zap, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="w-5 h-5" />,
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/50',
    glowColor: 'neon-glow',
    skills: [
      { name: 'React/Next.js', level: 90, color: '#61DAFB' },
      { name: 'JavaScript', level: 85, color: '#F7DF1E' },
      { name: 'HTML5/CSS3', level: 95, color: '#E34F26' },
      { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
      { name: 'Bootstrap', level: 85, color: '#7952B3' },
    ]
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/50',
    glowColor: 'neon-glow-purple',
    skills: [
      { name: 'Laravel/PHP', level: 92, color: '#FF2D20' },
      { name: 'Django/Python', level: 88, color: '#3776AB' },
      { name: 'Node.js', level: 85, color: '#339933' },
    ]
  },
  {
    title: 'Database & DevOps',
    icon: <Cpu className="w-5 h-5" />,
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/50',
    glowColor: 'neon-glow-pink',
    skills: [
      { name: 'MySQL', level: 88, color: '#4479A1' },
      { name: 'PostgreSQL', level: 85, color: '#336791' },
      { name: 'MongoDB', level: 82, color: '#47A248' },
      { name: 'Docker', level: 85, color: '#2496ED' },
    ]
  },
  {
    title: 'Development Tools',
    icon: <Wrench className="w-5 h-5" />,
    color: 'from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-500/50',
    glowColor: 'neon-glow',
    skills: [
      { name: 'Git', level: 90, color: '#F05032' },
      { name: 'GitLab', level: 88, color: '#FC6D26' },
      { name: 'Postman', level: 88, color: '#FF6C37' },
    ]
  }
];

const achievements = [
  { label: 'API Response Time Reduced', value: '35%', icon: <TrendingUp className="h-5 w-5" />, color: 'text-cyan-400' },
  { label: 'Daily Requests Handled', value: '50K+', icon: <Database className="h-5 w-5" />, color: 'text-purple-400' },
  { label: 'Deployment Time Reduced', value: '85%', icon: <Zap className="h-5 w-5" />, color: 'text-pink-400' },
  { label: 'Years of Experience', value: '3+', icon: <Star className="h-5 w-5" />, color: 'text-yellow-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Neon Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12 max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium glass-effect neon-border text-cyan-400">
              <Zap className="w-4 h-4 mr-2 inline" />
              Technical Expertise
            </Badge>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold neon-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Skills & Technologies
          </h2>
          <p className="text-base text-cyan-100/60 max-w-2xl mx-auto">
            Comprehensive technical skills with proven track record in full-stack development and system optimization
          </p>
        </div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect neon-border rounded-xl p-6 text-center hover:neon-glow transition-all duration-300 cursor-pointer group"
            >
              <div className={`flex items-center justify-center mb-3 ${achievement.color} group-hover:animate-pulse`}>
                {achievement.icon}
              </div>
              <div className={`text-2xl md:text-3xl font-bold mb-2 ${achievement.color} neon-text`}>
                {achievement.value}
              </div>
              <div className="text-xs text-cyan-100/60">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full glass-effect neon-border hover:${category.glowColor} transition-all duration-300 group border-l-4 ${category.borderColor}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-cyan-300 group-hover:neon-text transition-all">
                      {category.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-cyan-100/80">{skill.name}</span>
                        <span className="text-xs font-bold text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                          className="h-full rounded-full relative"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                            boxShadow: `0 0 10px ${skill.color}80, inset 0 0 10px ${skill.color}40`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient-shift" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect neon-border hover:neon-glow transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <h3 className="text-xl font-semibold text-cyan-300">Additional Technologies & Tools</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  'Spatie', 'JWT Authentication', 'Payment Gateways', 'WebSockets', 'Redis', 
                  'Nginx', 'Apache', 'AWS', 'Digital Ocean', 'Cloudflare', 'Figma'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-sm px-4 py-2 glass-effect neon-border hover:neon-glow text-cyan-300 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
