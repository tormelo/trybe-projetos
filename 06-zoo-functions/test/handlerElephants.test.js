const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    const actual = handlerElephants('count');
    expect(actual).toStrictEqual(4);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const actual = handlerElephants('names');
    expect(actual).toContain('Jefferson');
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    expect(actual).toBeCloseTo(10.5);
  });
  it('Para o argumento location deve retornar a string NW', () => {
    const actual = handlerElephants('location');
    expect(actual).toBe('NW');
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    const actual = handlerElephants('popularity');
    expect(actual).toBeGreaterThanOrEqual(5);
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const actual = handlerElephants('availability');
    expect(actual).not.toContain('Monday');
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
  it('Passando um argumento que não é string a função deve retornar um aviso', () => {
    const actual = handlerElephants(10);
    expect(actual).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Passando um argumento de propriedade que não existe a função deve retornar null', () => {
    const actual = handlerElephants('cachorro');
    expect(actual).toBeNull();
  });
});
