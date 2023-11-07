//Variáveis, constantes globais e validação inicial
const colaborador = JSON.parse(localStorage.getItem("colaborador"));
const uri = "http://localhost:3000";
const oss = [];
const colaboradores = [];
const criaComentario = document.getElementById("formComentario");

//Verifica se existe usuário logado e preenche informações
if (colaborador == null) window.location.href = "../login/index.html";
else if (colaborador.setor != "Manutenção") window.location.href = "../home/index.html";
else {
  document.getElementById("nomeColaborador").innerHTML = colaborador.nome;
  carregarDados();
}

async function carregarDados() {
  await listarOSs();
  await listarColaboradores();
  await preencherOSs();
}

//Funções CRUD - CREATE
criaComentario.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {
    os: parseInt(criaComentario.os.value),
    colaborador: colaborador.matricula,
    comentario: criaComentario.comentario.value,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch(uri + "/comentarios", options)
    .then((resp) => {
      if (resp.status != 201) {
        return { error: "Erro ao criar Comentário" };
      } else return resp.json();
    })
    .then((resp) => {
      if (resp.error == undefined) {
        atualizarTela();
      } else {
        document.querySelector("#msg").innerHTML = resp.error;
      }
    });
});


//Funções CRUD - READ
async function listarOSs() {
  await fetch(uri + "/oss/open", { method: "GET" })
    .then((resp) => resp.json())
    .then((resp) =>
      resp.forEach((os) => oss.push(os))
    )
    .catch((err) => console.error(err));
}

async function listarColaboradores() {
  await fetch(uri + "/colaboradores", { method: "GET" })
    .then((resp) => resp.json())
    .then((resp) =>
      resp.forEach((colaborador) => colaboradores.push(colaborador))
    )
    .catch((err) => console.error(err));
}

function preencherOSs() {
  const cards = document.getElementById("oss");
  oss.forEach((os) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <div class="card-header">
                <h3>Id Ordem de Serviço: ${os.id}</h3>
            </div>
            <div class="card-body">
                <p>Data de Abertura: <input type="datetime-local" value="${os.abertura.slice(0, 10)} ${os.abertura.slice(11, 19)}" disabled=true> </p>
                <p>Descrição: ${os.descricao}</p>
                <p>Colaborador: ${colaboradores[colaboradores.findIndex((c) => c.matricula == os.colaborador)].nome}</p>
                <p>Designado á: ${os.executor == null ? "Ainda não designado" : colaboradores[colaboradores.findIndex((c) => c.matricula == os.executor)].nome}</p>
                <button onclick="detalhesOS.classList.remove('oculto');preencherDetalhesOS(${os.id})">Detalhes</button>
            </div>
        `;
    if (colaborador.matricula == os.executor)
      card.innerHTML += `<button onclick="concluir(${os.id})">Concluir OS</button>`;
    else
      card.innerHTML += `<button onclick="atribuir(${os.id})">Atribuir a mim</button>`;
    cards.appendChild(card);
  });
}

function preencherDetalhesOS(id) {
  formOs = document.querySelector("#formAtualizarOS");
  comentarios = document.querySelector("#comentarios");
  const options = {
    method: "GET",
    headers: { "User-Agent": "Insomnia/2023.5.6" },
  };

  fetch(uri + "/oss/" + id, { method: "GET" })
    .then((resp) => resp.json())
    .then((resp) => {
      formOs.id.value = resp.id;
      formOs.colaborador.value = colaborador.nome;
      formOs.abertura.value =
        resp.abertura.slice(0, 10) + " " + resp.abertura.slice(11, 19);
      formOs.descricao.value = resp.descricao;
      formOs.executor.value =
        resp.executor == null
          ? "Ainda não designado"
          : colaboradores[
            colaboradores.findIndex((c) => c.matricula == resp.executor)
          ].nome;
      return resp;
    })
    .then((resp) => {
      comentarios.innerHTML = "";
      resp.comentarios.forEach((c) => {
        const cardComent = document.createElement("div");
        cardComent.classList.add("comentario");
        cardComent.innerHTML = `
            <label>${colaboradores[
            colaboradores.findIndex((co) => co.matricula == c.colaborador)
          ].nome
          }</label>
            <label>${c.data.slice(0, 10)}</label>
            <label>${c.data.slice(11, 19)}</label>
            <label>${c.comentario}</label>`;
        if (c.colaborador == colaborador.matricula)
          cardComent.innerHTML += `<button onclick="excluirComentario(${c.id})">Excluir</button>`;
        comentarios.appendChild(cardComent);
      });
    })
    .catch((err) => console.error(err));
}

//Funções CRUD - UPDATE
function atribuir(id) {
  const body = {
    id: id,
    executor: parseInt(colaborador.matricula),
  }

  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'Insomnia/2023.5.6' },
    body: JSON.stringify(body)
  };

  fetch(uri + '/oss', options)
    .then((resp) => {
      if (resp.status != 202) {
        return {
          error:
            "Erro ao enviar dados ao Back-end.",
        };
      } else return {};
    })
    .then((resp) => {
      if (resp.error == undefined) {
        atualizarTela();
      } else {
        document.querySelector("#msg").innerHTML = resp.error;
      }
    });
}

function concluir(id) {
  document.getElementById('comentarioFinal').classList.remove('oculto');
  const form = document.getElementById('formFinal');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const body = {
      os: id,
      colaborador: colaborador.matricula,
      comentario: form.comentario.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch(uri + "/comentarios", options)
      .then((resp) => {
        if (resp.status != 201) {
          return { error: "Erro ao criar Comentário" };
        } else return resp.json();
      })
      .then((resp) => {
        if (resp.error == undefined) {
          fechar(id);
        } else {
          document.querySelector("#msg").innerHTML = resp.error;
        }
      });
  });
}

function fechar(id) {
  const body = {
    id: id,
    encerramento: new Date()
  }

  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'Insomnia/2023.5.6' },
    body: JSON.stringify(body)
  };

  fetch(uri + '/oss', options)
    .then((resp) => {
      if (resp.status != 202) {
        return {
          error:
            "Erro ao enviar dados ao Back-end.",
        };
      } else return {};
    })
    .then((resp) => {
      if (resp.error == undefined) {
        atualizarTela();
      } else {
        document.querySelector("#msg").innerHTML = resp.error;
      }
    });
}

//Funções CRUD - DELETE
function excluirComentario(id) {
  if (confirm(`Confirma a exclusão do seu comentário?`)) {
    fetch(uri + "/comentarios/" + id, { method: "DELETE" })
      .then((resp) => {
        if (resp.status != 204) {
          return {
            error: "Erro ao excluir comentário",
          };
        } else return {};
      })
      .then((resp) => {
        if (resp.error == undefined) {
          window.location.reload();
        } else {
          document.querySelector("#msg").innerHTML = resp.error;
        }
      });
  }
}

//Funções de controle de tela
function atualizarTela() {
  localStorage.removeItem("colaborador");
  fetch(uri + '/colaboradores/' + colaborador.matricula, { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => {
      localStorage.setItem("colaborador", JSON.stringify(resp));
      window.location.reload();
    })
    .catch(err => console.error(err));
}

function sair() {
  localStorage.removeItem("colaborador");
  window.location.href = "../login/index.html";
}