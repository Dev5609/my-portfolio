import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  language: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  HTML: "bg-orange-500",
  CSS: "bg-blue-400",
  Python: "bg-green-500",
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`w-3 h-3 rounded-full ${languageColors[project.language] || "bg-gray-400"}`} />
                <span className="text-sm text-muted-foreground font-mono">
                  {project.language}
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Demo link button
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          View Live Demo
          <ExternalLink className="w-4 h-4" />
        </a> */}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
