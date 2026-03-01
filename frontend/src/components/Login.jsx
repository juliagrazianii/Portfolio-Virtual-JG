import { useState } from "react"

export default function Login({ onClose, onLoginSuccess }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleLogin() {

    if (!username || !password) {
      setError("Preencha todos os campos.")
      return
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("access_token", data.access)
        onLoginSuccess()
      } else {
        setError("Usuário ou senha incorretos.")
      }

    } catch {
      setError("Erro ao conectar com o servidor.")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md relative">

        {/* BOTÃO FECHAR */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-400 to-green-400 hover:opacity-90 transition"
        >
          Entrar
        </button>

      </div>
    </div>
  )
}