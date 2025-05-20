import { cn } from "@/lib/utils"
import AnimatedText from "./animated-text"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2 text-center mb-12", className)}>
      <AnimatedText 
        text={title} 
        className="text-3xl font-bold tracking-tight sm:text-4xl" 
      />
      {subtitle && (
        <p className="max-w-[42rem] mx-auto text-muted-foreground leading-normal">
          {subtitle}
        </p>
      )}
    </div>
  )
}