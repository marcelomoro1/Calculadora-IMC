//Evento de submit do formulário
//Seleciona o formulário inteiro
const form = document.querySelector('#formulario');
//Quando clicar em submit no form, executar a função evento
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //Constante que vai selecionar o input peso
    const inputPeso = event.target.querySelector('#peso');
    //Constante que vai selecionar o input altura
    const inputAltura = event.target.querySelector('#altura');
    //Constante que vai salvar o valor do input peso em numero
    const peso = Number(inputPeso.value);
    //Constante que vai salvar o valor do input altura em numero
    const altura = Number(inputAltura.value);
    
    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }
    let imc = getImc(peso, altura);
    if (imc < 18.5){
        setResultado(`Seu imc é: ${imc} e voce está abaixo do peso`, true);
    }
    else if((imc >= 18.5) && (imc <=24.9)){
        setResultado(`Seu imc é: ${imc} e voce está com o peso normal`, true);
    }
    else if((imc >= 25) && (imc <=29.9)){
        setResultado(`Seu imc é: ${imc} e voce está com sobrepeso`, true);
    }
    else if((imc >= 30) && (imc <=34.9)){
        setResultado(`Seu imc é: ${imc} e voce está com obesidade grau 1`, true);
    }
    else if((imc >= 35) && (imc <=39.9)){
        setResultado(`Seu imc é: ${imc} e voce está com obesidade grau 2`, true);
    }
    else if(imc >= 40){
        setResultado(`Seu imc é: ${imc} e voce está com obesidade grau 3`, true);
    }
});
function getImc(x, y){
    const imc = (x/(y*y));
    return imc.toFixed(2);
}

function criaParagrafo(){
    //Cria constante que cria um elemento paragrafo
    const p = document.createElement('p');
    return p;
}

//FUNÇÃO QUE CRIA UM PARAGRAFO NO HTML na DIV resultado
function setResultado(msg, ehvalido){
    //Cria constante resultado que seleciona a div resultado
    const resultado = document.querySelector('#resultado');
    //Nessa div adiciona um campo em branco
    resultado.innerHTML = '';
    //Cria constante que vai puxar a função cria paragrafo
    const p = criaParagrafo();
    //Se o resultado for valido, realiza o if, se não for realiza o else
    if (ehvalido){
        //Nesse paragrafo adiciona uma classe paragrafo-resultado
        p.classList.add('paragrafo-resultado')
    }
    else {
        p.classList.add('paragrafo-resultado-invalido')
    }
    //Agora dentro do paragráfo adiciona o texto
    p.innerHTML = msg;
    //Adiciona o parágrafo dentro da DIV resultado
    resultado.appendChild(p);
}


