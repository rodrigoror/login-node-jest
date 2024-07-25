const validarCPF = require('./cpfValidator'); // ajuste o caminho conforme necessário

test('CPF com formato inválido (menos de 11 dígitos) deve ser inválido', () => {
  expect(validarCPF('123.456.789')).toBe(false);
});
test('CPF com formato inválido (mais de 11 dígitos) deve ser inválido', () => {
    expect(validarCPF('123.456.789-455')).toBe(false);
  });
test('CPF com caracteres não numéricos deve ser inválido', () => {
  expect(validarCPF('123.456.789-0a')).toBe(false);
});

test('CPF com todos os dígitos iguais deve ser inválido', () => {
  expect(validarCPF('111.111.111-11')).toBe(false);
});

test('CPF com formato válido, mas inválido algoritmicamente deve ser inválido', () => {
  expect(validarCPF('000.000.000-09')).toBe(false);
});

test('CPF válido deve ser válido', () => {
  expect(validarCPF('111.444.777-35')).toBe(true);
  expect(validarCPF('11144477735')).toBe(true);
});
