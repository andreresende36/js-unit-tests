/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const verifyOnlyNumbersArray = (array) => {
  let notNumber = 0;
  array.forEach((element) => {
    if (typeof element !== 'number') {
      notNumber += 1;
    }
  });
  if (notNumber !== 0) {
    throw new Error(null);
  }
};

const verifyEmptyArray = (array) => {
  if (array.length === 0) {
    throw new Error(null);
  }  
};

const average = (array) => {
  let sum = 0;
  let averagePrint = 0;
  try {
    verifyEmptyArray(array);
    verifyOnlyNumbersArray(array);
    array.forEach((element) => {
      sum += element;
    });
    averagePrint = Number((sum / array.length).toFixed());
    return averagePrint;
    // return `${averagePrint} é do tipo ${typeof averagePrint}`;
  } catch (e) {
    // return error;
  }
};
console.log(average([1, 2, 3, '4', 5]));
module.exports = average;
