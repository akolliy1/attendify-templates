const { MailtrapClient } = require("mailtrap");

const TOKEN = "";
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "mailtrap@myattendify.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "osbaconsulting@gmail.com",
  },
  {
    email: "adesanmiakoladedotun@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);