// Desafio-Exericio//

// qual será o valor impresso no console ??
/* let INDICE = 13;
let SOMA = 0;
let K = 0

// 
while(K < INDICE){
    K ++ 
    SOMA = SOMA + K  
}
console.log(SOMA) */
//91
 
//2)
//expression
function isFibonacci(num) {
    let a = 0;
    let b = 1;
    for (let i = 0; b < num; i++) {
      
      let temp = b;//1;2;
      b = a + b;//1;2;
      a = temp;//1;1;
    }
   if(b === num || num === 0){
    return "Is sequenci Fibonacci"
   } else{
    return "Not is sequenci Fibonacci"
   }
  }
  
  //console.log(isFibonacci(2))
  // saida true


  
//3)

//a)9,
//b)128
//c)45
//d)84
//e)13
//f)20

    
//4)
//Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?
//destino carro ribeirao => frança velo k/h
let carro = 110;
// destino caminhão FRANCA => Ribeirão velo k/h
let caminhao = 80 ;

//distancia entre cidades km
let distancia = 100;
// pedagio Equivale a 10 minutos para o caminhão oque o atrasaria
let obstaculoCaminhao = 10;

/*Resposta
Acredito que pela lógica ambos terão a mesma distancia em relação a cidade no momento em  que se encontrarem.

 


//5)

function revert(params){
let letter = ""

for(let i = params.length;i>=0 ; i++){
    letter = letter + params[i]
}

return letter;
}

//console.log(revert("ewerton"))
//saida = notrewe*/