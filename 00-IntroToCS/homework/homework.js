function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0
  var numeroRevertido = num.split('').reverse().join('')


  for (let i = 0; i < numeroRevertido.length; i++) {
    suma = suma + numeroRevertido[i] * 2 ** i;
  }
  return suma;
}



function DecimalABinario(num) {
  // tu codigo aca
  let binario = "";
  while( num != 0 ){          
  binario = num % 2 + binario  
  num = Math.floor(num/2); 
  }
  return binario; 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}