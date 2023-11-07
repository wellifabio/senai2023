//Variáveis, constantes globais e validação inicial
const colaborador = JSON.parse(localStorage.getItem("colaborador"));
const uri = "http://localhost:3000";
const oss = [];
const colaboradores = [];

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

async function listarOSs() {
  await fetch(uri + "/oss/closed", { method: "GET" })
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
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${os.id}</td>
            <td>${os.descricao}</td>
            <td>${colaboradores[colaboradores.findIndex((c) => c.matricula == os.colaborador)].nome}</td>
            <td>${os.executor == null ? "Ainda não designado" : colaboradores[colaboradores.findIndex((c) => c.matricula == os.executor)].nome}</td>
            <td>${os.abertura.slice(0, 10)} ${os.abertura.slice(11, 19)}</td>
            <td>${os.encerramento.slice(0, 10)} ${os.encerramento.slice(11, 19)}</td>
            <td><button onclick="detalhesOS.classList.remove('oculto');preencherDetalhesOS(${os.id})">Detalhes</button></td>
        `;
    cards.appendChild(tr);
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
        comentarios.appendChild(cardComent);
      });
    })
    .catch((err) => console.error(err));
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