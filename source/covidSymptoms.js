module.exports = (client, from) => {
  const response =
    `Covid 19

Sintomas mais comuns:
    ▪ febre
    ▪ tosse seca
    ▪ cansaço

Sintomas menos comuns:
    ▪ dores e desconfortos
    ▪ dor de garganta
    ▪ diarreia
    ▪ conjuntivite
    ▪ dor de cabeça
    ▪ perda de paladar ou olfato
    ▪ erupção cutânea na pele
    ▪ descoloração dos dedos das mãos ou dos pés

Sintomas graves:
    ▪ dificuldade de respirar ou falta de ar
    ▪ dor ou pressão no peito
    ▪ perda de fala ou movimento
    
Procure atendimento médico imediato se tiver sintomas graves. Sempre ligue antes de ir ao médico, posto de saúde, clínicas ou hospitais.
Pessoas saudáveis que apresentarem os sintomas leves devem acompanhar seus sintomas em casa.`;

  client.sendText(from, response);
}