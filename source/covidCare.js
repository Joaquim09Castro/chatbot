module.exports = (client, from) => {
  const response =
    `Síndrome pós-Covid:

Sintomas:
  ▪ Fadiga
  ▪ Fraqueza Muscular nas pernas e costas
  ▪ Dor Crônica
  ▪ Déficits Cognitivos

Até o momento, não há um tratamento específico para a Síndrome pós-Covid.
O mais recomendado é buscar e seguir as orientações médicas, para que o tratamento seja o mais condizente com caso.
Em caso de piora dos sintomas, contate médico.`;

  client.sendText(from, response);
}