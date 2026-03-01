import perfil_linkedin from "../assets/perfil_linkedin.jpg"

export default function Hero() {
  return (
    <section id="home" className="px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* TEXTO */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-lg font-medium mb-2 text-[#88C9A1]">
            Olá! Eu sou
          </p>

          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4 text-[#5A5A5A]">
            Júlia Graziani
          </h1>

          <h2 className="text-3xl lg:text-4xl font-light">
            Desenvolvedora{" "}
            <span className="bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent font-semibold">
              Full Stack
            </span>
          </h2>
        </div>

        {/* FOTO + BLOB */}
        <div className="flex-1 flex justify-center relative">

          {/* Blob pastel */}
          <div className="
            absolute
            w-80
            h-80
            bg-gradient-to-r
            from-pink-200
            via-purple-200
            to-green-200
            rounded-[45%]
            opacity-60
            animate-blob
            z-0
          " />

          {/* Foto */}
          <img
            src={perfil_linkedin}
            alt="Júlia Graziani"
            className="
              relative
              w-64
              h-64
              object-cover
              rounded-full
              shadow-2xl
              hover:scale-105
              transition
              duration-500
            "
          />

        </div>

      </div>
    </section>
  )
}