"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Globe, ExternalLink } from "lucide-react"
import SectionHeading from "@/components/section-heading"

interface ProjectType {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  repo: string
  demo: string
  category: string
  challenges: string
  solutions: string
  role: string
  features: string[]
}

const projects: ProjectType[] = [
  {
    id: "chatgpt-app",
    title: "ChatGPT Application",
    description: "A full-featured ChatGPT-like application with web and mobile versions. Supports conversation history, custom user profiles, and model selection.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Redux"],
    repo: "https://github.com",
    demo: "https://demo.example.com",
    category: "AI/ML",
    challenges: "Implementing real-time streaming responses while maintaining conversation context and ensuring optimal token usage with the OpenAI API.",
    solutions: "Developed a custom streaming solution using Server-Sent Events and implemented efficient token management with context windowing techniques.",
    role: "Full Stack Developer responsible for frontend architecture, backend API design, and deployment infrastructure.",
    features: [
      "Real-time streaming responses",
      "Conversation history management",
      "Custom user profiles and settings",
      "Multiple AI model support",
      "Cross-platform compatibility"
    ]
  },
  {
    id: "healthcare-monorepo",
    title: "Healthcare Monorepo Project",
    description: "A comprehensive healthcare system with patient management, appointment scheduling, and medical records. Built as a monorepo with shared components across web and mobile.",
    image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["TypeScript", "NestJS", "React", "React Native", "PostgreSQL"],
    repo: "https://github.com",
    demo: "https://demo.example.com",
    category: "Full Stack",
    challenges: "Maintaining type safety across the entire stack while ensuring HIPAA compliance and handling complex medical data relationships.",
    solutions: "Implemented a robust TypeScript schema validation system and utilized code generation for type-safe database access.",
    role: "Lead Developer managing a team of 5, overseeing architecture decisions and ensuring code quality.",
    features: [
      "Secure patient data management",
      "Appointment scheduling system",
      "Medical records management",
      "Role-based access control",
      "Audit logging for compliance"
    ]
  },
  {
    id: "ecommerce-system",
    title: "E-commerce Management System",
    description: "A complete e-commerce platform with inventory management, order processing, and customer analytics dashboards.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "Stripe API"],
    repo: "https://github.com",
    demo: "https://demo.example.com",
    category: "Full Stack",
    challenges: "Scaling the system to handle high traffic during promotional periods while maintaining real-time inventory updates.",
    solutions: "Implemented efficient caching strategies with Redis and optimized database queries for high-traffic scenarios.",
    role: "Full Stack Developer responsible for the entire application lifecycle from concept to deployment.",
    features: [
      "Advanced inventory management",
      "Order processing workflows",
      "Customer analytics dashboard",
      "Payment processing integration",
      "Real-time inventory updates"
    ]
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    description: "A feature-rich Twitter clone with real-time updates, user authentication, and content moderation capabilities.",
    image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Firebase", "Tailwind CSS", "Node.js", "WebSockets"],
    repo: "https://github.com",
    demo: "https://demo.example.com",
    category: "Full Stack",
    challenges: "Implementing real-time timeline updates and notifications while maintaining performance across different devices.",
    solutions: "Utilized WebSockets for real-time features and implemented efficient rendering strategies with React virtualization.",
    role: "Frontend Specialist focusing on the UI/UX and real-time features implementation.",
    features: [
      "Real-time feed updates",
      "User authentication system",
      "Content moderation tools",
      "Direct messaging functionality",
      "Media upload capabilities"
    ]
  },
  {
    id: "neural-networks",
    title: "Custom Neural Networks Framework",
    description: "A lightweight neural networks framework built from scratch for educational purposes, supporting various architectures and training algorithms.",
    image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Python", "NumPy", "Matplotlib", "TensorFlow", "Jupyter"],
    repo: "https://github.com",
    demo: "https://demo.example.com",
    category: "AI/ML",
    challenges: "Balancing performance with educational clarity and implementing backpropagation algorithms for complex network architectures.",
    solutions: "Created extensive documentation and visualizations to explain the inner workings while optimizing critical code paths.",
    role: "Sole Developer responsible for implementation, documentation, and example creation.",
    features: [
      "Custom neural network implementations",
      "Interactive learning tutorials",
      "Performance optimizations",
      "Various activation functions",
      "Detailed visualizations"
    ]
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase())

  return (
    <section id="projects" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work spanning full-stack development and AI/ML projects."
        />
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="Full Stack">Full Stack</TabsTrigger>
            <TabsTrigger value="AI/ML">AI & Machine Learning</TabsTrigger>
          </TabsList>
          
          <TabsContent value={filter} className="mt-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.title}
            width={600}
            height={400}
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">{project.category}</Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <div className="flex gap-2">
            <Button asChild size="sm" variant="outline">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="ghost">
                Details
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.description}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">My Role</h4>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Challenges</h4>
                      <p className="text-sm text-muted-foreground">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Solutions</h4>
                      <p className="text-sm text-muted-foreground">{project.solutions}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 mt-4">
                  <Button asChild variant="outline">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  )
}