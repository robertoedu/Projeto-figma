var transacao = [];
var total = 0;
var produtos = [];
// Mascára monetária finalizando ela, feita com regex
function formatarMoeda() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseFloat(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if (valor == 'NaN') elemento.value = '';

    if (valor == 'null') elemento.value = '';

}

// Validação de cada campo do formulário com visualização de cada item, contendo o evento para não recarregar a pafina
function Validarform(e) {
    e.preventDefault();
    console.log("Botão clicado");

    var escolha = document.getElementById("escolha").value;
    console.log("escolha", escolha);

    var valor = document.getElementById("valor").value;
    console.log("valor", valor);

    var nome = document.getElementById("nome").value;
    console.log("nome", nome);

    var exite_erro = false;

    if (escolha == "") {
        exite_erro = true;
        celecalert.innerHTML = "*Selecione a modalidade desejada!";
    }

    if (nome == "") {
        exite_erro = true;
        nomealert.innerHTML = "*Preencha com o nome da mercadoria!";
    }

    if (valor == "") {
        exite_erro = true;
        valoret.innerHTML = "*Adicione o valor da transição!";
    }

    // Salvando em Localstorage, em string para poder vizualizar no console, com o recarregamento dos compos inputs, para não precisar ficar apagando
    if (!exite_erro) {
        if (transacao == null) {
            transacao = [];
        }

        if (escolha == "-") {
            valor = parseFloat(valor) * -1;
        } else {
            valor = parseFloat(valor) * 1;
        }
        transacao.push({ nome: nome, valor: valor, escolha: escolha });
        localStorage.setItem("transacao", JSON.stringify(transacao));
        console.log("valor", valor);
        listatransacao();
        document.getElementById("nome").value = "";
        document.getElementById("escolha").value = "";
        document.getElementById("valor").value = "";

    }
    return false;
}
// listando os produtos cada vez que clicar no botão, fazendo uma lista dinamica

function listatransacao() {
    transacao = JSON.parse(localStorage.getItem('transacao'));
    document.getElementById("tjs").innerHTML = "";
    total = 0;
    var Lucro = 'Lucro';
    var Prejuizo = 'Prejuízo';
    var Neutro = '';
    var nem = "Nenhuma transação adicionada"
    for (let idx_prod in transacao) {
        total += parseFloat(transacao[idx_prod].valor);
        document.querySelector('#tjs').innerHTML +=
            ` <tr >
                <td id="sele" >`+ transacao[idx_prod].escolha + `</td>
                <td id="nomer">`+ transacao[idx_prod].nome + `</td>
                <td class="vt" id="vlm"> R$ `+ transacao[idx_prod].valor + `</td>
            </tr>`
    }

    document.getElementById('rs').innerHTML = `
            <td id="rs" >  `+ total + `</td> `;


    if (total > 0) {
        document.getElementById('lc').innerHTML = `<td colspan="3" class="vt" id="lc">` + Lucro + `</td>`
    } if (total < 0) {
        document.getElementById('lc').innerHTML = `<td colspan="3" class="vt" id="lc">` + Prejuizo + `</td>`
    }
    else {
        document.getElementById('lc').innerHTML = `<td colspan="3" class="vt" id="lc">` + Neutro + `</td>`
    }

}

function listaprod() {
    fetch('https://api.airtable.com/v0/appRNtYLglpPhv2QD/Historico?maxRecords=3&view=Grid%20view', {
        headers: {
            authorization: 'Bearer key2CwkHb0CKumjuM'
        }
    }).then((resp) => {
        return resp.json()
    }).then((data) =>{
        produtos = data.records
    })
}
