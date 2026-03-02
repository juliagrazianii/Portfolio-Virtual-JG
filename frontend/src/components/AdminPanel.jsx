
import { useState } from "react"

const API = import.meta.env.VITE_API_URL

console.log("API:", API)

export default function AdminPanel({
  onClose,
  projects,
  skills,
  contactLinks,
  setProjects,
  setSkills,
  setContactLinks
}) {

  const token = localStorage.getItem("access_token")

  const gradients = [
    "from-pink-300 to-orange-200",
    "from-green-300 to-blue-300",
    "from-blue-300 to-purple-300",
    "from-purple-300 to-pink-300",
    "from-yellow-200 to-green-300",
    "from-pink-300 to-green-300"
  ]

  const [selectedGradient, setSelectedGradient] = useState(gradients[0])

  // ---------------- PROJECT ----------------

  const [projectTitle, setProjectTitle] = useState("")
  const [projectDesc, setProjectDesc] = useState("")
  const [projectDetailedDesc, setProjectDetailedDesc] = useState("")
  const [projectFeatures, setProjectFeatures] = useState("")
  const [projectGithub, setProjectGithub] = useState("")
  const [projectTech, setProjectTech] = useState("")
  const [editingProjectId, setEditingProjectId] = useState(null)

  function handleEditProject(project) {
    setProjectTitle(project.title)
    setProjectDesc(project.description)
    setProjectDetailedDesc(project.detailed_description || "")
    setProjectFeatures(project.features || "")
    setProjectGithub(project.github || "")
    setProjectTech(project.technologies)
    setSelectedGradient(project.gradient || gradients[0])
    setEditingProjectId(project.id)
  }

  async function saveProject() {
    if (!projectTitle || !projectDesc || !projectTech) return

    const url = editingProjectId
      ? `${API_URL}/api/projects/${editingProjectId}/`
      : `${API_URL}/api/projects/`

    const method = editingProjectId ? "PUT" : "POST"

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title: projectTitle,
        description: projectDesc,
        detailed_description: projectDetailedDesc,
        features: projectFeatures,
        technologies: projectTech,
        github: projectGithub,
        gradient: selectedGradient
      })
    })

    const data = await response.json()

    if (editingProjectId) {
      setProjects(prev =>
        prev.map(p => (p.id === editingProjectId ? data : p))
      )
    } else {
      setProjects(prev => [data, ...prev])
    }

    setProjectTitle("")
    setProjectDesc("")
    setProjectDetailedDesc("")
    setProjectFeatures("")
    setProjectGithub("")
    setProjectTech("")
    setEditingProjectId(null)
  }

  async function deleteProject(id) {
    await fetch(`${API_URL}/api/projects/${id}/`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    setProjects(prev => prev.filter(p => p.id !== id))
  }

  // ---------------- SKILLS ----------------

  const [skillName, setSkillName] = useState("")
  const [skillPerc, setSkillPerc] = useState("")
  const [skillCat, setSkillCat] = useState("")
  const [editingSkillId, setEditingSkillId] = useState(null)

  function handleEditSkill(skill) {
    setSkillName(skill.name)
    setSkillPerc(skill.percentage)
    setSkillCat(skill.category)
    setEditingSkillId(skill.id)
  }

  async function saveSkill() {
    if (!skillName || !skillPerc || !skillCat) return

    const url = editingSkillId
      ? `${API_URL}/api/skills/${editingSkillId}/`
      : `${API_URL}/api/skills/`

    const method = editingSkillId ? "PUT" : "POST"

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: skillName,
        percentage: Number(skillPerc),
        category: skillCat
      })
    })

    const data = await response.json()

    if (editingSkillId) {
      setSkills(prev =>
        prev.map(s => (s.id === editingSkillId ? data : s))
      )
    } else {
      setSkills(prev => [data, ...prev])
    }

    setSkillName("")
    setSkillPerc("")
    setSkillCat("")
    setEditingSkillId(null)
  }

  async function deleteSkill(id) {
    await fetch(`${API_URL}/api/skills/${id}/`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    setSkills(prev => prev.filter(s => s.id !== id))
  }

  // ---------------- CONTACT ----------------

  const [contactName, setContactName] = useState("")
  const [contactUrl, setContactUrl] = useState("")
  const [editingContactId, setEditingContactId] = useState(null)

  function handleEditContact(contact) {
    setContactName(contact.name)
    setContactUrl(contact.url)
    setEditingContactId(contact.id)
  }

  async function saveContact() {
    if (!contactName || !contactUrl) return

    const url = editingContactId
      ? `${API_URL}/api/contact/${editingContactId}/`
      : `${API_URL}/api/contact/`

    const method = editingContactId ? "PUT" : "POST"

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: contactName,
        url: contactUrl
      })
    })

    const data = await response.json()

    if (editingContactId) {
      setContactLinks(prev =>
        prev.map(c => (c.id === editingContactId ? data : c))
      )
    } else {
      setContactLinks(prev => [data, ...prev])
    }

    setContactName("")
    setContactUrl("")
    setEditingContactId(null)
  }

  async function deleteContact(id) {
    await fetch(`${API_URL}/api/contact/${id}/`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    setContactLinks(prev => prev.filter(c => c.id !== id))
  }

  // ---------------- RETURN ----------------

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-16 z-50">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">

        <div className="bg-gradient-to-r from-pink-400 to-green-400 p-6 flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold">Painel Admin</h2>
          <button onClick={onClose} className="text-white text-2xl hover:scale-110">✕</button>
        </div>

        <div className="p-8 space-y-10">

          {/* PROJETOS */}
          <Section title="Projetos">
            <Input value={projectTitle} onChange={setProjectTitle} placeholder="Título" />
            <Input value={projectDesc} onChange={setProjectDesc} placeholder="Descrição Curta" />
            <Textarea value={projectDetailedDesc} onChange={setProjectDetailedDesc} placeholder="Descrição Detalhada" />
            <Textarea value={projectFeatures} onChange={setProjectFeatures} placeholder="Features (separadas por vírgula)" />
            <Input value={projectTech} onChange={setProjectTech} placeholder="Tecnologias (separadas por vírgula)" />
            <Input value={projectGithub} onChange={setProjectGithub} placeholder="GitHub" />

            <div className="grid grid-cols-3 gap-3">
              {gradients.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedGradient(g)}
                  className={`h-10 rounded-lg bg-gradient-to-r ${g} ${selectedGradient === g ? "ring-4 ring-pink-400" : ""}`}
                />
              ))}
            </div>

            <MainButton onClick={saveProject}>
              {editingProjectId ? "Atualizar Projeto" : "+ Salvar Projeto"}
            </MainButton>

            {projects.map(p => (
              <ListItem
                key={p.id}
                text={p.title}
                onEdit={() => handleEditProject(p)}
                onDelete={() => deleteProject(p.id)}
              />
            ))}
          </Section>

          {/* SKILLS */}
          <Section title="Skills">
            <Input value={skillName} onChange={setSkillName} placeholder="Nome" />
            <Input value={skillPerc} onChange={setSkillPerc} placeholder="Porcentagem" type="number" />
            <Input value={skillCat} onChange={setSkillCat} placeholder="Categoria" />
            <MainButton onClick={saveSkill}>
              {editingSkillId ? "Atualizar Skill" : "+ Salvar Skill"}
            </MainButton>

            {skills.map(s => (
              <ListItem
                key={s.id}
                text={`${s.name} - ${s.percentage}%`}
                onEdit={() => handleEditSkill(s)}
                onDelete={() => deleteSkill(s.id)}
              />
            ))}
          </Section>

          {/* CONTATOS */}
          <Section title="Contatos">
            <Input value={contactName} onChange={setContactName} placeholder="Nome" />
            <Input value={contactUrl} onChange={setContactUrl} placeholder="URL" />
            <MainButton onClick={saveContact}>
              {editingContactId ? "Atualizar Contato" : "+ Salvar Contato"}
            </MainButton>

            {contactLinks.map(c => (
              <ListItem
                key={c.id}
                text={c.name}
                onEdit={() => handleEditContact(c)}
                onDelete={() => deleteContact(c.id)}
              />
            ))}
          </Section>

        </div>
      </div>
    </div>
  )
}

// COMPONENTES AUXILIARES

function Section({ title, children }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm space-y-4">
      <h3 className="font-bold text-lg">{title}</h3>
      {children}
    </div>
  )
}

function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-3 rounded-xl border"
    />
  )
}

function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-3 rounded-xl border"
    />
  )
}

function MainButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-400 to-green-400"
    >
      {children}
    </button>
  )
}

function ListItem({ text, onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
      <span>{text}</span>
      <div className="flex gap-3">
        <button onClick={onEdit} className="text-yellow-500 text-sm hover:underline">
          Editar
        </button>
        <button onClick={onDelete} className="text-red-500 text-sm hover:underline">
          Deletar
        </button>
      </div>
    </div>
  )
}