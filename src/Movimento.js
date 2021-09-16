import React from 'react';
import "./Movimento.css";




export default function Movimento() {
//array que usarei para ser os andares do elevador
  let predio = [
    { andar: [1,2,3] }
  ];

  //estrutura responsável por pegar os itens do array e retornar sequencialmente em tela
  let movimentacaoAndar = predio.map((modificacao) => {
    modificacao.andar += 100;
    return modificacao;
  });

 

//estrutura responsável por pegar o input do formulário
window.onload=function(){
  var form = document.getElementById('formulario');
  var andarSolicitado = document.getElementById('andarSolicitado');
  

  form.addEventListener('submit', function (e) {
    // alerta o valor do campo
    alert(andarSolicitado.value);

    // impede o envio do form
    e.preventDefault();
  });

}

  return (
    <>
      <h1 className="posicao-atual">Posição Atual do Elevador: {(movimentacaoAndar.map)} º andar

      </h1>


      <p className="formulario-chamada">Formulário para chamada (informe o andar que você deseja ir)</p>

      <form id="formulario">
        <label>
          <input type="number" id="andarSolicitado" name="numero-andar" />
        </label>
        <input type="submit" value="Solicitar" />


      </form>





      <h1>Lista de chamadas pendentes</h1>
    </>
  )
};


  //          predio.andar[0] + "º andar"

  //https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx