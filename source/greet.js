module.exports = (client, from) => {
  const response =
    `Bem vindo ao ChatBot de Cuidados Pós-CoVid

  1️⃣ - Sintômas Covid-19.
  2️⃣ - Reabilitação Pós-Covid.
  3️⃣ - Agendamento de consultas.
  
  `;

  client.sendText(from, response)
}