//Variáveis, constantes globais e validação inicial
const colaborador = JSON.parse(localStorage.getItem("colaborador"));
const colaboradores = [];
const uri = "http://localhost:3000";
const criaOS = document.getElementById("formOS");
const criaComentario = document.getElementById("formComentario");
const atualizarPerfil = document.getElementById("formPerfil");
const atualizarOs = document.getElementById("formAtualizarOS");

//Verifica se existe usuário logado e preenche informações
if (colaborador == null) window.location.href = "../login/index.html";
else {
  document.getElementById("nomeColaborador").innerHTML = colaborador.nome;
  carregarDados();
}

async function carregarDados() {
  await validarSetor();
  await preencherPerfil();
  await listarColaboradores();
  await preencherOSs();
}

//Funções CRUD - CREATE
criaOS.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {
    colaborador: colaborador.matricula,
    descricao: criaOS.descricao.value,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch(uri + "/oss", options)
    .then((resp) => {
      if (resp.status != 201) {
        return { error: "Erro ao criar OS" };
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
async function listarColaboradores() {
  await fetch(uri + "/colaboradores", { method: "GET" })
    .then((resp) => resp.json())
    .then((resp) =>
      resp.forEach((colaborador) => colaboradores.push(colaborador))
    )
    .catch((err) => console.error(err));
}

function validarSetor() {
  if (colaborador.setor == "Manutenção") {
    document.querySelector(
      "#menu"
    ).innerHTML += `<button onclick="window.location.href='../os/index.html'">OSs</button>`;
  }
}

function preencherPerfil() {
  const perfil = document.getElementById("formPerfil");
  perfil.matricula.value = colaborador.matricula;
  perfil.nome.value = colaborador.nome;
  perfil.cargo.value = colaborador.cargo;
  perfil.setor.value = colaborador.setor;
}

function preencherOSs() {
  const oss = document.getElementById("oss");
  colaborador.os_abertas.forEach((os) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <div class="card-header">
                <h3>Id Ordem de Serviço: ${os.id}</h3>
            </div>
            <div class="card-body">
                <p>Data de Abertura: <input type="datetime-local" value="${os.abertura.slice(0, 10)} ${os.abertura.slice(11, 19)}" disabled=true> </p>
                <p>Descrição: ${os.descricao}</p>
                <p>Colaborador: ${colaborador.nome}</p>
                <p>Designado á: ${os.executor == null ? "Ainda não designado" : colaboradores[colaboradores.findIndex((c) => c.matricula == os.executor)].nome}</p>
                <button onclick="detalhesOS.classList.remove('oculto');preencherDetalhesOS(${os.id})">Detalhes</button>
                <button onclick="excluirOS(${os.id})">Excluir</button>
            </div>
        `;
    oss.appendChild(card);
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
atualizarPerfil.addEventListener("submit", (e) => {
  e.preventDefault();
  if (atualizarPerfil.pin.value != atualizarPerfil.confirmPin.value) {
    document.querySelector("#msg").innerHTML = "PINs não coincidem";
    return;
  } else {
    const body = {
      matricula: parseInt(atualizarPerfil.matricula.value),
      nome: atualizarPerfil.nome.value,
      cargo: atualizarPerfil.cargo.value,
      setor: atualizarPerfil.setor.value,
    };
    if (atualizarPerfil.pin.value.length > 0)
      body.pin = parseInt(atualizarPerfil.pin.value);
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch(uri + "/colaboradores", options)
      .then((resp) => {
        if (resp.status == 400) {
          return { error: "Erro ao atualizar dados" };
        } else return resp.json();
      })
      .then((resp) => {
        if (resp.error == undefined) {
          atualizarTela();
        } else {
          document.querySelector("#msg").innerHTML = resp.error;
        }
      });
  }
});

atualizarOs.addEventListener("submit", (e) => {
  e.preventDefault();
  const body = {
    id: parseInt(atualizarOs.id.value),
    descricao: atualizarOs.descricao.value,
  };
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch(uri + "/oss", options)
    .then((resp) => {
      if (resp.status == 400) {
        return { error: "Erro ao atualizar dados" };
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

//Funções CRUD - DELETE
function excluirPerfil() {
  if (confirm("Deseja realmente excluir seu perfil?")) {
    fetch(uri + "/colaboradores/" + colaborador.matricula, { method: "DELETE" })
      .then((resp) => {
        if (resp.status != 204) {
          return {
            error: "Não foi possível excluir perfil, pois há OSs relacionadas.",
          };
        } else return {};
      })
      .then((resp) => {
        if (resp.error == undefined) {
          localStorage.removeItem("colaborador");
          window.location.reload();
        } else {
          document.querySelector("#msg").innerHTML = resp.error;
        }
      });
  }
}

function excluirOS(os) {
  if (confirm(`Confirma a exclusão desta OS:${os} ?`)) {
    fetch(uri + "/oss/" + os, { method: "DELETE" })
      .then((resp) => {
        if (resp.status != 204) {
          return {
            error:
              "Não foi possível excluir a os, pois há comentários relacionadas.",
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
}

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
