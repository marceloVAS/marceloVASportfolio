import ProjectItemHome from '../components/ui/ProjectItemHome';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section id="work">
      {projects.map((project) => (
        <ProjectItemHome
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          linkText={project.linkText}
          linkHref={project.linkHref}
        />
      ))}
    </section>
  );
}