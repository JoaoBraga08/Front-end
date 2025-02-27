// Obtém os elementos do DOM
const valor1 = document.getElementById("valor1");
const valor2 =  document.getElementById("valor2");

// Variável resultado
const resultado = document.getElementById("resultado");

function LiparCampos(){
    valor1.value = "";
   valor2.value = "";
}

function tempo() {
    setTimeout(function() {
        resultado.innerHTML = 0;
       }, 2000)
}

// Criando função SOMA
function somar(event) {
    event.preventDefault();
   let resultadoSoma = Number(valor1.value) + Number(valor2.value);
  
   resultado.innerHTML = resultadoSoma

   //Limpar campos
   LiparCampos();

   //função tempo
   tempo();
   
}

//Função sub
function sub(event) {
    event.preventDefault();

    let resultadoSub = Number(valor1.value) - Number(valor2.value);

    resultado.innerHTML = resultadoSub;

    //Limpar campos
   LiparCampos();

   //função tempo
   tempo();
}