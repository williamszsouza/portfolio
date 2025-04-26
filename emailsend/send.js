const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e79e1de1285237",
      pass: "8f9ff023e49740"
    }
  });

  const mailParams = {
     from:'william souza <william.teste@email.com>',
     to:'teste123 <teste123@email.com>',
     subject:'Tentativa de contato',
     text:'Opa, vi que você gostaria de entrar em contato comigo, responda esse email com um numero de contato por favor.',
     html:'<h1>Opa, vi que você gostaria de entrar em contato comigo</h1> <br> <b>responda esse email com um numero de contato por favor.</b>'
  }


  transporter.sendMail(mailParams, (error,info) =>{
    if (error){
        return console.log(error)
    }
    console.log('enviado com sucesso')
  })