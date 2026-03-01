export default function Navbar({ onAdminClick }) {
  return (
    <nav className="relative z-10 px-6 py-4 backdrop-blur-sm bg-white/70">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <a href="#home" className="font-heading text-2xl font-bold text-[#E88D95]">
          JG<span className="text-[#88C9A1]">.</span>
        </a>

        <div className="flex gap-8 items-center">
          <a href="#about" className="nav-link font-medium text-[#7BA3C9]">Sobre</a>
          <a href="#skills" className="nav-link font-medium text-[#7BA3C9]">Skills</a>
          <a href="#projects" className="nav-link font-medium text-[#7BA3C9]">Projetos</a>
          <a href="#contact" className="nav-link font-medium text-[#7BA3C9]">Contato</a>

          {/* BOTÃO ADMIN */}
          <button
            type="button"
            onClick={onAdminClick}
            className="bg-gradient-to-r from-pink-400 to-green-400 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition"
          >
            Admin
          </button>

        </div>

      </div>
    </nav>
  )
}