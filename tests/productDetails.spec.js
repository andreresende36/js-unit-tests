const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Arroz', 'Feijão'))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Arroz', 'Feijão').length).toEqual(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Arroz', 'Feijão')[0]).toBe('object')
    expect(typeof productDetails('Arroz', 'Feijão')[1]).toBe('object')
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const object1 = productDetails('Arroz', 'Feijão')[0];
    const object2 = productDetails('Arroz', 'Feijão')[1];
    expect(object1).not.toEqual(object2);
    // Teste se os dois productIds terminam com 123.
    const string1 = object1.details.productId;
    const substring1 = string1.substring(string1.length - 3, string1.length);
    const string2 = object2.details.productId;
    const substring2 = string2.substring(string2.length - 3, string2.length);
    expect(substring1).toEqual(substring2);

  });
});
