const formCadastro = document.querySelector('#create');
const folhaPagamentos = []

//CRUD - Create
formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100000) + 1000; //Gerar id aleatorio entre 1000 e 100000
    folhaPagamentos.push(new Pagamento(id, formCadastro.funcionario.value, formCadastro.salario.value));
    preecherCards();
    sorteiaFuncionario();
});

//CRUD - Read
function preecherCards() {
    const cards = document.querySelector('#cards');
    cards.innerHTML = '';
    folhaPagamentos.forEach(pagamento => {
        cards.innerHTML += `
        <div class="card">
            <div class="card-header">
                <h1>Pagamento Id: ${pagamento.id}</h1>
                <button type="button" class="btn btn-danger" onclick="excluir(${pagamento.id})">-</button>
            </div>
            <div class="card-body">
                <p class="card-title">Funcionário: ${pagamento.funcionario}</p>
                <p class="card-subtitle mb-2 text-muted">Data: ${pagamento.data.toLocaleDateString()}</p>
                <p class="card-text">Salário: R$ ${pagamento.salario}</p>
                <p class="card-text">INSS: R$ ${pagamento.inss().toFixed(2)}</p>
                <p class="card-text">Salário Base: R$ ${pagamento.salarioBase}</p>
                <p class="card-text">IRRF: R$ ${pagamento.irrf().toFixed(2)}</p>
                <p class="card-text">Salário Líquido: R$ ${pagamento.salarioLiquido}</p>
            </div>
        </div>`
    });
    console.table(folhaPagamentos);
}

//CRUD - Delete
function excluir(id) {
    const index = folhaPagamentos.findIndex(pagamento => pagamento.id == id);
    folhaPagamentos.splice(index, 1);
    preecherCards();
}