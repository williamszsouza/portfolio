import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Método não permitido' });
  }

  const { nome, email, mensagem } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"${nome}" <${email}>`,
    to: 'williampereira0250@gmail.com',
    subject: 'Nova mensagem do formulário',
    html: `
      <div style="font-family: Arial;">
        <h2>Nova mensagem</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br>${mensagem.replace(/\n/g, '<br>')}</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao enviar e-mail', error: err.message });
  }
}
