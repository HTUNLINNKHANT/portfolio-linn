'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const skills = {
  Frontend: {
    icon: '/icons/frontend.svg',
    items: [
      { name: 'HTML5', icon: '/icons/html5.svg', color: '#E34F26' },
      { name: 'CSS3', icon: '/icons/css3.svg', color: '#1572B6' },
      { name: 'JavaScript', icon: '/icons/javascript.svg', color: '#F7DF1E' },
      { name: 'React', icon: '/icons/react.svg', color: '#61DAFB' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg', color: '#7952B3' },
      { name: 'Tailwind', icon: '/icons/tailwind.svg', color: '#06B6D4' },
      { name: 'Next.js', icon: '/icons/nextjs.svg', color: '#000000' },
    ],
  },
  Backend: {
    icon: '/icons/backend.svg',
    items: [
      { name: 'PHP', icon: '/icons/php.svg', color: '#777BB4' },
      { name: 'Python', icon: '/icons/python.svg', color: '#3776AB' },
      { name: 'Node.js', icon: '/icons/nodejs.svg', color: '#339933' },
      { name: 'Laravel', icon: '/icons/laravel.svg', color: '#FF2D20' },
      { name: 'Django', icon: '/icons/django.svg', color: '#092E20' },
    ],
  },
  Databases: {
    icon: '/icons/database.svg',
    items: [
      { name: 'MySQL', icon: '/icons/mysql.svg', color: '#4479A1' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', color: '#336791' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg', color: '#47A248' },
    ],
  },
  'Development Tools': {
    icon: '/icons/tools.svg',
    items: [
      { name: 'Git', icon: '/icons/git.svg', color: '#F05032' },
      { name: 'Gitlab', icon: '/icons/gitlab.svg', color: '#F05032' },
      { name: 'Docker', icon: '/icons/docker.svg', color: '#2496ED' },
      { name: 'Postman', icon: '/icons/postman.svg', color: '#FF6C37' },
    ],
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-4 py-1 text-sm">
            Technical Expertise
          </Badge>
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Image
                        src={icon}
                        alt={category}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300"
                      >
                        <div
                          className="p-3 rounded-full mb-3"
                          style={{ backgroundColor: `${skill.color}15` }}
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                        <span className="text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
