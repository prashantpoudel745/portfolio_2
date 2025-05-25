"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Progress from "../ui/progress";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "React Native", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "Express", level: 90 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "MySql", level: 70 },
      { name: "Firebase", level: 80 },
      { name: "Supabase", level: 85 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", level: 85 },
      { name: "GitHub Actions", level: 80 },
      { name: "AWS", level: 75 },
      // { name: "CI/CD", level: 80 },
      { name: "Kubernetes", level: 65 },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      // { name: "NLP", level: 85 },
      // { name: "Computer Vision", level: 70 },
      // { name: "LLM Fine-tuning", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Skills"
          subtitle="I've worked with a range of technologies in the web development and AI/ML space."
        />

        <div className="mt-8">
          <Tabs defaultValue="Frontend" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
              {skillsData.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className="transition-all"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillsData.map((category) => (
              <TabsContent
                key={category.category}
                value={category.category}
                className="mt-6"
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">{skill.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={skill.level} className="h-2" />
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>Beginner</span>
              <span>Advanced</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
