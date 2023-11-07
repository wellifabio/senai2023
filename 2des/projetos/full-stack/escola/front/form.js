const dados = document.querySelector('#dados')

const options = { method: 'GET' };

fetch('http://localhost:3000/aluno/listar', options)
  .then(response => response.json())
  .then(response => {
    response.forEach(element => {
      let linha = document.createElement('div')
      linha.innerHTML = `Ra:${element.ra} Nome:${element.nome} Data:${element.nascto} Turma:${element.id_turma}`
      dados.appendChild(linha)

    });
  })
  .catch(err => console.error(err));