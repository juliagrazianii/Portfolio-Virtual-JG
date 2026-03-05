export default function About() {
  return (
    <section id="about" className="px-6 py-20 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Título */}
    <h2 className="font-heading text-4xl font-bold text-center text-[#5A5A5A] mb-12">
      Sobre Mim
    </h2>

    {/* Grid principal */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* COLUNA ESQUERDA - CARDS */}
      <div className="grid grid-cols-2 gap-6">

        <div className="bg-pink-50 p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-pink-500">Frontend</h3>
          <p className="text-sm text-gray-500">
            React, Vite, JavaScript
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-green-500">Backend</h3>
          <p className="text-sm text-gray-500">
            Python, C++
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-blue-500">Database</h3>
          <p className="text-sm text-gray-500">
            MongoDB
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-yellow-500">Cloud</h3>
          <p className="text-sm text-gray-500">
            AWS
          </p>
        </div>

      </div>

      {/* COLUNA DIREITA - TEXTO */}
      <div>

        <p className="text-gray-500 leading-relaxed mb-6">
          Sou uma desenvolvedora apaixonada por criar soluções inovadoras
          e interfaces que encantam. Com experiência em desenvolvimento
          full stack, busco sempre combinar funcionalidade com design
          elegante.
        </p>

        {/* MÉTRICAS */}
        <div className="flex gap-4">

          <div className="bg-pink-100 px-6 py-4 rounded-xl">
            <p className="text-pink-500 font-bold text-xl">3+</p>
            <p className="text-sm text-gray-500">Anos Exp.</p>
          </div>

          <div className="bg-green-100 px-6 py-4 rounded-xl">
            <p className="text-green-500 font-bold text-xl">50+</p>
            <p className="text-sm text-gray-500">Projetos</p>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>
  )}