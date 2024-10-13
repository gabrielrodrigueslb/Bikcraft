const formulario = document.querySelector("form");

function formularioEnviado(resposta){

    if(resposta.ok){
        formulario.innerHTML = "<p class='font-2-m' style='grid-column: 1/-1; padding: 1rem; border-radius:4px;background: #f7f7f7;'<span style= color:#317a00>Mensagem enviada!</span></p>";

    }else{
        formulario.innerHTML = "<p class='font-2-m' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px;background: #f7f7f7;align-items: center;><span style='color: #e00'>Erro no envio!</span>  Formulário PHP NÃO presente</p>"
    }

}


function enviarFormulario(event){
    event.preventDefault();
    const botao = document.querySelector('form button');
    botao.disabled = true;
    botao.innerText = "Enviando..."

    const data = new FormData(formulario);

    fetch("/", {
        method: "post",
        body: data,
    }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario )