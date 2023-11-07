const data = [
    {
        "funcionario":"Vitoria da Cruz",
        "matricula":"010203",
        "setor":"Eletronico",
        "comissao":5,
        "vendas":[
            {
                "data":"03/02/2023",
                "valor":1250.00
            },
            {
                "data":"03/02/2023",
                "valor":899.00
            },
            {
                "data":"04/02/2023",
                "valor":5999.90
            }
        ]
    },
    {
        "funcionario":"Cecilia Martins",
        "matricula":"124578",
        "setor":"Eletronico",
        "comissao":5,
        "vendas":[
            {
                "data":"15/01/2023",
                "valor":3290.90
            },
            {
                "data":"16/01/2023",
                "valor":1320.99
            },
            {
                "data":"16/02/2023",
                "valor":990.90
            }
        ]
    },
    {
        "funcionario":"Joaquim Souza",
        "matricula":"124578",
        "setor":"Moveis",
        "comissao":12,
        "vendas":[
            {
                "data":"08/01/2023",
                "valor":4500.00
            },
            {
                "data":"08/01/2023",
                "valor":599.99
            },
            {
                "data":"09/01/2023",
                "valor":259.90
            }
        ]
    }
];

const table = document.querySelector("tbody");
const diaVenda = document.querySelector("#data");
const valorVenda = document.querySelector("#valor");
const funcionarios = document.querySelector("#funcionarios");

function preencherTabela() {
    table.innerHTML = "";

    for(let i = 0; i < data.length; i++) {
        let linha = document.createElement("tr");
        
        let matricula = document.createElement("td");
        let nome = document.createElement("td");
        let setor = document.createElement("td");
        let vendas = document.createElement("td");
        let comissao = document.createElement("td");
    
        let info = data[i];
    
        matricula.innerHTML = info.matricula;
        nome.innerHTML = info.funcionario;
        setor.innerHTML = info.setor;
    
        let total = 0;
    
        for(let j = 0; j < info.vendas.length; j++) {
            total += info.vendas[j].valor;
        }
    
        vendas.innerHTML = `R$ ${total.toFixed(2)}`;
    
        let com = total * (info.comissao / 100);
    
        comissao.innerHTML = `R$ ${com.toFixed(2)}`;
    
        linha.appendChild(matricula);
        linha.appendChild(nome);
        linha.appendChild(setor);
        linha.appendChild(vendas);
        linha.appendChild(comissao);
    
        table.appendChild(linha);
    }
}

function listarFuncionario() {
    for(let i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = data[i].funcionario;
        funcionarios.appendChild(option);
    }
}

function cadastrar() {
    let pos = Number(funcionarios.value);

    let venda = {
        "data":diaVenda.value,
        "valor":Number(valorVenda.value)
    }

    data[pos].vendas.push(venda);

    preencherTabela();
}

preencherTabela();
listarFuncionario();
