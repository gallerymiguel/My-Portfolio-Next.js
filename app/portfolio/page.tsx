// app/portfolio/page.tsx
import Image from "next/image";
import Link from "next/link";
import projects from "../../data/projects";
import { Project } from "../../types/project";


const Portfolio: React.FC = () => {
  return (
    <main className="flex-1 py-12 px-4">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-h-screen">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="project bg-gray-800 rounded-lg shadow-md overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <i className="fas fa-info-circle text-4xl text-white"></i>
              </div>

              <Link href={`/projects/${project.slug}`} className="block">
                {project.promo_video ? (
                  <video
                    className="portfolio w-full h-52 object-cover"
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    <source src={project.promo_video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={project.image || "/fallback-image.png"}
                    alt={project.title}
                    width={400}
                    height={1000}
                    className="portfolio w-full h-52 object-cover"
                  />
                )}
              </Link>

              <div className="p-4 h-full">
                <h5 className="text-lg text-center font-semibold mb-2">{project.title}</h5>
                <div className="mt-auto flex justify-center space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
