import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        {/* Section header */}
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
            A collection of projects showcasing my journey in web development—from
            simple utilities to full-stack applications.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center mt-12">
          And of course, this very portfolio site you're exploring right now!
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
