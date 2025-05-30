/* app/projects/[slug]/page.tsx */
import { notFound } from "next/navigation";
import projects from "../../../data/projects";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ⬇️  unwrap the promise once
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="container mx-auto p-6 text-white my-5">
      <div className="glass-card p-4 shadow-lg rounded-lg">
        {/* Title & description */}
        <h1 className="text-3xl font-bold text-center mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-center mb-6">{project.description}</p>

        {/* Demo video (optional) */}
        {project.demo_video && (
          <div className="glass-card my-4">
            <video
              src={project.demo_video}
              className="w-full rounded-lg shadow-lg"
              controls
            />
          </div>
        )}

        {/* Features + Tech */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card p-3 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-3 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
            <ul className="list-disc list-inside">
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
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
              Live&nbsp;Site
            </a>
          )}
        </div>

        {/* Screenshots */}
        <h3 className="text-2xl font-bold mt-10 text-center">Screenshots</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="glass-card shadow-sm overflow-hidden rounded-lg"
            >
              <Image
                src={typeof img === "string" ? img : img.src}
                alt={`Screenshot ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                style={
                  typeof img === "object" ? { aspectRatio: img.aspect } : {}
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
