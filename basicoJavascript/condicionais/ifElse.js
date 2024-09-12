const idade = 34;

// CHECAR ESSA IDADE
// CASO A IDADE SEJA MAIOR OU IGUAL A 18,
// DETERMINAR PASSAGEM GARANTIDA OU PROIBIDA
// CASO CONTRÁRIO INFORME ERRO!
// REFATORAÇÃO - REESTRUTURAR
// ANINHAR     - ENCADEAR
// if (idade >= 55) {
//   console.log("Idosos não podem entrar");
// }
// else if (idade < 55) {
//   if (idade >= 18) {
//     console.log("Passagem garantida");
//   }
// }
// TESTAR PESSOAS MENORES DE 18 ANOS
const convidados = ['Batman', 'Superman', 'Mulher Maravilha']
const friend = 'Batman'

if (convidados.includes(friend)) {
  console.log('Olá, ' + friend + '! Pode entrar!');
} else {
  console.log('Não conheço essa pessoa' + friend + '!')
}