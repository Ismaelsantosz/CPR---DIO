// Informações

let saldoVitorias = soma(150, 5)
let nivelHeroi = ""


// Calculadora de Partidas Rankeadas 

function soma(vitorias, derrotas){
    let somatorio = vitorias - derrotas
    return somatorio
}


if(saldoVitorias < 10){
    nivelHeroi = "Ferro"}

if(saldoVitorias >= 11 && saldoVitorias <= 20){
    nivelHeroi = "Bronze"}    

if(saldoVitorias >= 21 && saldoVitorias <= 50){
    nivelHeroi = "Prata"}

if(saldoVitorias >= 51 && saldoVitorias <= 80){
    nivelHeroi = "Ouro"}
    
if(saldoVitorias >= 81 && saldoVitorias <= 90){
    nivelHeroi = "Diamante"}
    
if(saldoVitorias >= 91 && saldoVitorias <= 100){
    nivelHeroi = "Lendário"}

if(saldoVitorias >= 101){
    nivelHeroi = "Imortal"}


//Saída    
console.log("o Herói tem saldo de " + saldoVitorias + " vitórias está no nível de " + nivelHeroi)