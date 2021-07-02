var transacao = []

function Validarform(e){
    e.preventDefault();
    console.log("Botão clicado");
   
    var escolha = document.getElementById("escolha").value;
    console.log("escolha", escolha);

    var valor = document.getElementById("valor").value;
    console.log("valor", valor);

    var nome = document.getElementById("nome").value;
    console.log("nome", nome);

    var exite_erro = false;

    if(escolha == ""){
        exite_erro = true;
        celecalert.innerHTML = "*Selecione a modalidade desejada!";
    }

    if (nome == ""){
        exite_erro = true;
        nomealert.innerHTML = "*Preencha com o nome da mercadoria!";
    }

    if(valor == ""){
        exite_erro = true;
        valoret.innerHTML = "*Adicione o valor da transição!";
    }

    if(transacao == null){
        transacao=[]
    }

    if(!exite_erro){
        transacao.push({nome: nome, valor: valor, escolha: escolha})
        localStorage.setItem("transacao",JSON.stringify(transacao));
        listatransacao();
       
    }
}

function listatransacao(){
        transacao = JSON.parse(localStorage.getItem('transacao'))
        if(transacao != null){
            document.querySelector('#tjs').innerHTML = transacao.map((tra)=>{
                return (
                    ` <tr >
                <td id="sele" >+</td>
                <td id="nomer">`+tra.nome+`</td>
                <td class="vt" id="vlm"> R$ `+tra.valor+`</td>
            </tr>`
            )
            }).join('');
        }
}

