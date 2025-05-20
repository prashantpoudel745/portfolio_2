"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BriefcaseBusiness, GraduationCap, Medal, Award } from "lucide-react";
import { useTheme } from "next-themes";
import SectionHeading from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  icon: "work" | "education" | "certificate";
  skills?: string[];
}

const experiences: TimelineItem[] = [
  {
    id: 1,
    title: " Full Stack Developer",
    location: "Kathmandu ,Nepal",
    description:
      "Led development of enterprise-grade web applications using React, Node.js, and PostgreSQL. Mentored junior developers and implemented CI/CD pipelines.",
    date: "2023 - Present",
    icon: "work",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    title: "junior ML Engineer",
    location: "AI Innovations, Remote",
    description:
      "Developed and deployed machine learning models for natural language processing and computer vision applications. Optimized model performance and integrated with web services.",
    date: "2023 - 2024",
    icon: "work",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    location: "Lalitpur ,Nepal",
    description:
      "Built and maintained modern web applications using React, Express, and MongoDB. Implemented responsive designs and RESTful APIs.",
    date: "2021 - 2023",
    icon: "work",
    skills: ["JavaScript", "React", "Express", "MongoDB", "REST APIs"],
  },
  {
    id: 4,
    title: "B.S. Computer Engineering",
    location: "State University",
    description:
      "Foundations in computer science, mathematics, and software engineering. Completed capstone project on real-time data processing systems.",
    date: "2023 - present",
    icon: "education",
  },
];

export default function Experience() {
  // Fix theme detection with explicit state management
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render component UI after mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if dark mode is active
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  // Set colors based on theme
  const iconBgColor = isDark ? "#1e293b" : "#f8fafc"; // Using Tailwind slate-800 and slate-50
  const iconColor = isDark ? "#f8fafc" : "#1e293b";
  const contentStyle = isDark
    ? {
        background: "#0f172a",
        color: "#f8fafc",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.5)",
      } // Darker background in dark mode
    : {
        background: "#ffffff",
        color: "#0f172a",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
      };
  const arrowStyle = isDark
    ? { borderRight: "7px solid #0f172a" }
    : { borderRight: "7px solid #ffffff" };

  // Prevent hydration issues by not rendering theme-dependent elements before mounting
  if (!mounted) {
    return <div className="w-full py-12 md:py-24 min-h-screen"></div>;
  }

  return (
    <section id="experience" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading
          title="My Experience"
          subtitle="A chronological journey through my professional career and education."
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <VerticalTimeline lineColor={isDark ? "#334155" : "#e2e8f0"}>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                date={experience.date}
                dateClassName={`font-medium ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
                contentStyle={contentStyle}
                contentArrowStyle={arrowStyle}
                iconStyle={{ background: iconBgColor, color: iconColor }}
                icon={getIconComponent(experience.icon)}
                visible={true} // Ensure visibility
              >
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <h4 className="text-sm font-medium opacity-75">
                  {experience.location}
                </h4>
                <p className="mt-2 text-sm opacity-90">
                  {experience.description}
                </p>

                {experience.skills && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <BriefcaseBusiness className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium">3+ Years</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Professional Experience
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Medal className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium">10+ Projects</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Completed Successfully
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium">3+ Certifications</h3>
            <p className="text-sm text-muted-foreground mt-1">
              In Development & AI
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function getIconComponent(iconType: string) {
  switch (iconType) {
    case "work":
      return <BriefcaseBusiness />;
    case "education":
      return <GraduationCap />;
    case "certificate":
      return <Award />;
    default:
      return <BriefcaseBusiness />;
  }
}
