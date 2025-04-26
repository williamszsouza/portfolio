
---

## 🌌 Sobre o projeto

Este portfólio tem como temática o **espaço sideral**, representando a minha constante busca por novos conhecimentos, tecnologias e oportunidades.  
É um projeto pessoal feito com 💙, onde compartilho:

- Quem sou
- Meus projetos mais relevantes
- Minhas habilidades técnicas
- E uma forma direta de entrar em contato comigo

---

## 🛠️ Tecnologias Utilizadas

- **Vue.js** – Frontend responsivo e moderno
- **Vite** – Para um build rápido e leve
- **Nodemailer + Mailtrap** – Para envio seguro de e-mails via API
- **CSS3** – Com estilo espacial ✨
- **Vercel** – Hospedagem do projeto

---

## ✉️ API de Contato

Se alguém quiser falar comigo, basta preencher o formulário de contato. Os dados são enviados para uma **API Serverless** que usa o **Nodemailer** com o **Mailtrap** para teste de envio.

### 📬 Exemplo de requisição:

```bash
POST /api/enviar-email
Content-Type: application/json

{
  "nome": "Neil Armstrong",
  "email": "neil@nasa.gov",
  "mensagem": "Gostei do seu trabalho, vamos conversar!"
}
