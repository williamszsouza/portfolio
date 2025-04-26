const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')


const app = express()

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "biologobiologo1@gmail.com",
      pass: "oxvp ywsq jxoc ngnh"
    }
  });

app.post('/enviar-email', async (req, res) => {
    const {nome,email,mensagem,assunto} = req.body;

   const mailParams = {
        from:`"${nome} <${email}>"`,
        to:'ywillsz16@gmail.com',
        subject:assunto,
        text:mensagem,
        html:`<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
      <h2 style="color: #333;">Nova mensagem recebida</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
        ${mensagem.replace(/\n/g, '<br>')}
      </div>
      <p style="margin-top: 30px; font-size: 12px; color: #888;">
        Esta mensagem foi enviada pelo formulário do seu site.
      </p>
    </div>
  `
         };
     try{
        await transporter.sendMail(mailParams);
        res.status(200).json({message:'email enviado com sucesso'});
    }catch(err){
        console.error('erro no envio',err)
        res.status(500).json({message:'erro'})
    }
    
})


app.listen(3000,()=>{
    console.log('rodando')
})