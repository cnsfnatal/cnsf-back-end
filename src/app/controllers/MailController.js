import nodeMailer from "nodemailer";
require("dotenv").config();

class MainController {
  store(req, res) {
    const transport = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_ACCESS,
        pass: process.env.PASS_ACCESS
      }
    });

    const mailOption = {
      from: ' "Email do form do URA" pedrotrab2123@gmail.com',
      to: "pedrojogos2132@gmail.com",
      subject: req.body.nome,
      text: req.body.mensagem,
      html: req.body.mensagem
    };

    transport.sendMail(mailOption, (error, info) => {
      if (error) return console.log(error);

      console.log("Message %s send: %s", info.messageId, info.response);
    });

    const { email, nome, mensagem } = req.body;

    return res.json({ email, nome, mensagem });
  }
}

export default new MainController();
