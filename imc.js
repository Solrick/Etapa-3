const calcular = document.getElementById('calcular');

function imc () {
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

if (altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura * altura));
    let classificacao = '';

    if (valorIMC < 18.5){
        classificacao = 'você está abaixo do peso.';
    }else if (valorIMC < 25) {
        classificacao = 'você está com peso ideal. Parabéns!';
    }else if (valorIMC < 30){
        classificacao = 'você está sobrepeso';
    }else if (valorIMC < 35){
        classificacao = 'você está com obesidade grau I.';
    }else if (valorIMC < 40){
        classificacao = 'você está com obesidade grave';
    }else {
        classificacao = 'com obesidade grau III. Cuidado!!';
    }
    resultado.textContent = `Seu IMC é ${valorIMC} e ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);