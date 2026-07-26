import { motion } from "framer-motion";
import { Archive } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import projectsData from "@/data/projects.json";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  language: string;
  featured?: boolean;
}

const projects = projectsData as Project[];

// Preserve JSON order for featured hierarchy: BhumiPoojan -> SummarIQ -> Milletify
const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        {/* Featured Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects I've Built
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of real projects — from AI-powered tools to modern
            business platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-24 mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
                More Builds
              </span>
              <h3 className="text-3xl md:text-4xl font-bold">
                Other Projects
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {others.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-center mt-16">
          And of course, this very portfolio site you're exploring right now!
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
