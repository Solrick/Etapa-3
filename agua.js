const calcular = document.getElementById('calcular');

function agua () {
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');



    const valoragua = (peso* 35);
    resultado.textContent = `você deveria beber pelo menos ${valoragua} ml de água por dia`;
  
}

calcular.addEventListener('click', agua);