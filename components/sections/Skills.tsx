'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { Code2, Database, Wrench, Palette, Star, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '/icons/frontend.svg',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'React/Next.js', level: 90, icon: '/icons/react.svg', color: '#61DAFB' },
      { name: 'JavaScript', level: 85, icon: '/icons/javascript.svg', color: '#F7DF1E' },
      { name: 'HTML5/CSS3', level: 95, icon: '/icons/html5.svg', color: '#E34F26' },
      { name: 'Tailwind CSS', level: 88, icon: '/icons/tailwind.svg', color: '#06B6D4' },
      { name: 'Bootstrap', level: 85, icon: '/icons/bootstrap.svg', color: '#7952B3' },
    ]
  },
  {
    title: 'Backend Development',
    icon: '/icons/backend.svg',
    color: 'bg-green-500/10 text-green-600 dark:text-green-400',
    skills: [
      { name: 'Laravel/PHP', level: 92, icon: '/icons/laravel.svg', color: '#FF2D20' },
      { name: 'Django/Python', level: 88, icon: '/icons/python.svg', color: '#3776AB' },
      { name: 'Node.js', level: 85, icon: '/icons/nodejs.svg', color: '#339933' },
      { name: 'PHP', level: 90, icon: '/icons/php.svg', color: '#777BB4' },
    ]
  },
  {
    title: 'Database & DevOps',
    icon: '/icons/database.svg',
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    skills: [
      { name: 'MySQL', level: 88, icon: '/icons/mysql.svg', color: '#4479A1' },
      { name: 'PostgreSQL', level: 85, icon: '/icons/postgresql.svg', color: '#336791' },
      { name: 'MongoDB', level: 82, icon: '/icons/mongodb.svg', color: '#47A248' },
      { name: 'Docker', level: 85, icon: '/icons/docker.svg', color: '#2496ED' },
    ]
  },
  {
    title: 'Development Tools',
    icon: '/icons/tools.svg',
    color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'Git', level: 90, icon: '/icons/git.svg', color: '#F05032' },
      { name: 'GitLab', level: 88, icon: '/icons/gitlab.svg', color: '#FC6D26' },
      { name: 'Postman', level: 88, icon: '/icons/postman.svg', color: '#FF6C37' },
      { name: 'Next.js', level: 85, icon: '/icons/nextjs.svg', color: '#000000' },
    ]
  }
];

const achievements = [
  { label: 'API Response Time Reduced', value: '35%', icon: <TrendingUp className="h-4 w-4" /> },
  { label: 'Daily Requests Handled', value: '50K+', icon: <Database className="h-4 w-4" /> },
  { label: 'Deployment Time Reduced', value: '85%', icon: <Code2 className="h-4 w-4" /> },
  { label: 'Years of Experience', value: '3+', icon: <Star className="h-4 w-4" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8 max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
            Technical Expertise
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills with proven track record in full-stack development and system optimization
          </p>
        </div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center justify-center mb-2 text-primary">
                  {achievement.icon}
                </div>
                <div className="text-xl font-bold text-primary mb-1">{achievement.value}</div>
                <div className="text-xs text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${category.color}`}>
                      <Image
                        src={category.icon}
                        alt={category.title}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
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
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-6 h-6 rounded p-1 flex items-center justify-center"
                            style={{ backgroundColor: `${skill.color}15` }}
                          >
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                          </div>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{
                          '--progress-background': `${skill.color}20`,
                          '--progress-foreground': skill.color
                        } as React.CSSProperties}
                      />
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
          <Card className="border-2 border-primary/10">
            <CardHeader className="text-center pb-4">
              <h3 className="text-lg font-semibold">Additional Technologies & Tools</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  'Spatie', 'JWT Authentication', 'Payment Gateways', 'WebSockets', 'Redis', 
                  'Nginx', 'Apache', 'AWS', 'Digital Ocean', 'Cloudflare', 'Figma', 'Adobe XD'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-xs px-3 py-1 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
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
