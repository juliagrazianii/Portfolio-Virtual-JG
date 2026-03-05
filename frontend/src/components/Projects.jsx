import { useState } from "react"

export default function Projects({ projects }) {

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="px-6 py-20 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-center mb-12 text-[#5A5A5A]">
          Projetos 
        </h2>
        <p className="text-center text-pink-400 text-lg mb-12 mt-2">
          clique nos cards para ver mais detalhes
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300
                cursor-pointer
                bg-white
                hover:bg-pink-100
              "
            >

              {/* PARTE SUPERIOR COLORIDA */}
              <div
                className={`h-28 bg-gradient-to-r ${
                  project.gradient || "from-pink-300 to-orange-200"
                } flex items-center justify-center`}
              >
                <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center shadow">
                  💻
                </div>
              </div>

              {/* PARTE INFERIOR */}
              <div className="p-6">

                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="bg-pink-50 text-pink-500 text-xs px-3 py-1 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 rounded-full bg-pink-300 text-white text-sm hover:opacity-90 transition">
                  Ver Detalhes
                </button>

              </div>
            </div>

          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/40 flex justify-center items-center z-50 animate-fadeIn">

          <div className="bg-white/90 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 rounded-3xl shadow-xl relative animate-scaleIn border border-pink-100">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-pink-300 hover:text-pink-500 transition text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-3xl font-heading font-bold mb-4 text-[#5A5A5A]">
              {selectedProject.title}
            </h3>

            {/* Detailed Description */}
            {selectedProject.detailed_description && (
              <p className="mb-6 text-gray-600 leading-relaxed break-words whitespace-pre-line">
                {selectedProject.detailed_description}
              </p>
            )}

            {/* Technologies */}
            {selectedProject.technologies && (
              <>
                <h4 className="font-semibold mb-2 text-gray-700">
                  Tecnologias
                </h4>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies
                    .split(",")
                    .map((tech, index) => (
                      <span
                        key={index}
                        className="bg-pink-50 text-pink-500 text-sm px-3 py-1 rounded-full border border-pink-100"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                </div>
              </>
            )}

            {/* Features */}
            {selectedProject.features && (
              <>
                <h4 className="font-semibold mb-2 text-gray-700">
                  Features🌸
                </h4>

                <ul className="space-y-2 mb-6">
                  {selectedProject.features
                    .split(",")
                    .map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-pink-300">•</span>
                        {feature.trim()}
                      </li>
                    ))}
                </ul>
              </>
            )}

            {/* GitHub Button */}
            {selectedProject.github && (
              <a
                href={
                  selectedProject.github.startsWith("http")
                    ? selectedProject.github
                    : `https://${selectedProject.github}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-100 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-200 transition"
              >
                Ver no GitHub →
              </a>
            )}

          </div>
        </div>
      )}

    </section>
  )
}