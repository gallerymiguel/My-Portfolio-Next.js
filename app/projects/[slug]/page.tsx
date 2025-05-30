// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import projects from "../../../data/projects";
import Image from "next/image";
import "../../../styles/ProjectPage.css"; // Ensure you have this CSS file for styles

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="container mx-auto p-6 text-white my-5">
      <div className="glass-card p-4 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">{project.title}</h1>
        <p className="text-lg text-center mb-6">{project.description}</p>

        {project.demo_video && (
          <div className="glass-card my-4">
            <video
              src={project.demo_video}
              className="w-full rounded-lg shadow-lg"
              controls
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card p-3 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-3 shadow-sm">
            <h3 className=" text-xl font-semibold mb-2">Tech Stack</h3>
            <ul className="list-disc list-inside">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-card p-3 shadow-sm flex justify-center gap-4 mt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Live Site
            </a>
          )}
        </div>

        <h3 className="text-2xl font-bold mt-10 text-center">Screenshots</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {project.images.map((img, index) => (
            <div key={index} className="glass-card shadow-sm overflow-hidden rounded-lg shadow-md">
              {typeof img === "string" ? (
                <Image
                  src={img}
                  alt={`Screenshot ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <Image
                  src={img.src}
                  alt={`Screenshot ${index + 1}`}
                  width={800}
                  height={600}
                  style={{ aspectRatio: img.aspect }}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
