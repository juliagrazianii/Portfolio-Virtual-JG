# 🌐 Portfolio Virtual – Julia Graziani

Aplicação full-stack desenvolvida com **Django REST Framework** e **React (Vite)** para gerenciamento dinâmico de portfólio profissional.

O sistema permite cadastro, edição e exclusão de projetos, habilidades e contatos, com autenticação administrativa protegida por JWT.

---

## 🚀 Tecnologias Utilizadas

### 🔹 Backend
- Python 3
- Django
- Django REST Framework
- Simple JWT (Autenticação)
- PostgreSQL (Neon)
- Gunicorn
- Render (Deploy)

### 🔹 Frontend
- React
- Vite
- TailwindCSS
- Vercel (Deploy)

---

## 🏗 Arquitetura do Sistema

A aplicação segue arquitetura cliente-servidor com separação entre frontend e backend.


### 🔐 Fluxo de Autenticação

Admin → Login → /api/token/ → Recebe JWT → Envia Bearer Token nas requisições protegidas


## 🗂 Estrutura do Projeto
Portfolio-Virtual-JG/
│
├── backend/
│ ├── backend/ # Configurações principais do Django
│ ├── portfolio/ # App principal (models, views, serializers)
│ ├── manage.py
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md



---

## 📡 Rotas da API

### 🔐 Autenticação

| Método | Rota | Descrição |
|--------|------|------------|
| POST | `/api/token/` | Obter access e refresh token |
| POST | `/api/token/refresh/` | Atualizar access token |

---

### 📁 Projetos

| Método | Rota |
|--------|------|
| GET | `/api/projects/` |
| POST | `/api/projects/` |
| PUT | `/api/projects/{id}/` |
| DELETE | `/api/projects/{id}/` |

---

### 🧠 Skills

| Método | Rota |
|--------|------|
| GET | `/api/skills/` |
| POST | `/api/skills/` |
| PUT | `/api/skills/{id}/` |
| DELETE | `/api/skills/{id}/` |

---

### 📬 Contatos

| Método | Rota |
|--------|------|
| GET | `/api/contact/` |
| POST | `/api/contact/` |
| PUT | `/api/contact/{id}/` |
| DELETE | `/api/contact/{id}/` |

---

## 🛠 Guia de Execução Local

### 🔹 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/Portfolio-Virtual-JG.git
cd Portfolio-Virtual-JG

🔹 2. Configurar o Backend
cd backend
python -m venv venv
source venv/bin/activate  # (Linux/Mac)
venv\Scripts\activate     # (Windows)

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

O backend estará disponível em:

http://127.0.0.1:8000
🔹 3. Configurar o Frontend
cd frontend
npm install
npm run dev

O frontend estará disponível em:

http://localhost:5173


🌍 Deploy
🔹 Backend

Hospedado no Render.

🔹 Banco de Dados

PostgreSQL hospedado no Neon.

🔹 Frontend

Hospedado no Vercel.

👩‍💻 Desenvolvido por

Julia Graziani
Engenharia Biomédica
