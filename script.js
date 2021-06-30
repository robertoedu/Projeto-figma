function Validarform(){
    console.log("Botão clicado");
   
    var selecione = document.getElementById("primeiro_botao").value;
    console.log("Selecionado", selecione);

    var valor = document.getElementById("Vm").value;
    console.log("Valor", valor);

    var nomeM = document.getElementById("Nm").value;
    console.log("Nome", nomeM);

    var exite_erro = false;

    if(selecione == ""){
        exite_erro = true;
        celecalert.innerHTML = "*Selecione a modalidade desejada!";
    }

    if (nomeM == ""){
        exite_erro = true;
        nomealert.innerHTML = "*Preencha com o nome da mercadoria!";
    }

    if(valor == ""){
        exite_erro = true;
        valoret.innerHTML = "*Adicione o valor da transição!";
    }

    if(!exite_erro){
        localStorage.setItem("Ação desejada",selecione);
        localStorage.setItem("Nome da mercadoria",nomeM);
        localStorage.setItem("Valor",valor);
    }
}
