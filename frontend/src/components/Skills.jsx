export default function Skills({ skills }) {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-center mb-8 text-[#5A5A5A]">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-[#E88D95]">{skill.percentage}%</span>
              </div>
              <div className="relative bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-300 to-green-300 animate-pulse"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}