function Validarform(){
    console.log("Botão clicado");
   
    var selecione = document.getElementById("primeiro_botao").value;
    console.log("Selecionado", selecione);

    if(selecione == ""){
        let acionado =document.getElementById("celecalert").value;
        celecalert.innerHTML = "*Selecione a modalidade desejada!";
        console.log("Não selecionado", celecalert)
    }

    var nomeM = document.getElementById("Nm").value;
    console.log("Nome", nomeM);

    if (nomeM == ""){
        let nomevazio = document.getElementById("nomealert").value;
        nomealert.innerHTML = "*Preencha com o nome da mercadoria!";
        console.log("Sem nome", nomealert );
    }

    var valor = document.getElementById("Vm").value;
    console.log("Valor", valor);

    if(valor == ""){
        var valor = document.getElementById("valoret")
            let valor_nulo =document.getElementById("valoret").value;
            valoret.innerHTML = "*Adicione o valor da transição!"
            console.log("Valor indefinido", valoret);
        }
}
