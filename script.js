let vitorias = prompt("Quantas partidas você ganhou ?: ");
let derrotas = prompt("Quantas partidas você perdeu ?: ");

function saldoDasRankeadas() {
  let saldoDeVitorias = vitorias - derrotas;
  let nivel 
    if (saldoDeVitorias < 10) {
      nivel = "Ferro";
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
      nivel = "Bronze";
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
      nivel = "Prata";
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
      nivel = "Ouro";
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
      nivel = "Diamante";
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
    return `O Herói tem um saldo de ${saldoDeVitorias}, e está no nível de ${nivel}`;  
}

console.log(saldoDasRankeadas());