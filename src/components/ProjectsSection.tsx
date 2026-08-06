import FeaturedProjectCard, {
  CompactProjectCard,
  type Project,
} from "./ProjectCard";
import projectsData from "@/data/projects.json";
import { useSectionReveal } from "@/hooks/useScrollReveal";

const projects = projectsData as Project[];

// Preserve JSON order for featured hierarchy
const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const [lead, ...rest] = featured;

const ProjectsSection = () => {
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="hairline py-24 md:py-32">
      <div className="container">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div data-reveal className="eyebrow mb-6">
              Featured Work
            </div>
            <h2 data-reveal className="display text-display-sm md:text-display-md text-bone">
              Projects I've <span className="italic">Built</span>
            </h2>
          </div>
          <p
            data-reveal
            className="max-w-sm text-base font-light leading-relaxed text-muted-foreground md:text-right"
          >
            A selection of real projects — from AI-powered tools to modern
            business platforms.
          </p>
        </div>

        {/* Lead project gets the full width; the rest stagger left/right */}
        <div className="space-y-20 md:space-y-28">
          {lead && <FeaturedProjectCard project={lead} index={0} lead />}
          {rest.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-28 md:mt-36">
            <div className="mb-10 max-w-md md:ml-auto md:text-right">
              <div
                data-reveal
                className="eyebrow mb-5 md:flex-row-reverse md:before:hidden md:after:block md:after:h-px md:after:w-8 md:after:bg-ember/70 md:after:content-['']"
              >
                More Builds
              </div>
              <h3 data-reveal className="display text-3xl md:text-4xl text-bone">
                Other Projects
              </h3>
            </div>

            <div className="grid gap-x-16 md:grid-cols-2">
              {others.map((project) => (
                <CompactProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        <p
          data-reveal
          className="mt-20 max-w-md font-light text-muted-foreground"
        >
          And of course, this very portfolio site you're exploring right now.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
