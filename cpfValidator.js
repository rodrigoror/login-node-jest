function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf.length !== 11) {
      return false;
    }
  
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = (resto < 2) ? 0 : 11 - resto;
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = (resto < 2) ? 0 : 11 - resto;
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  }
  
  module.exports = validarCPF;
  