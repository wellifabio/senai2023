const create = (dados) => {
    return `INSERT INTO entregadores (nome, email, senha, veiculo)`
        + ` VALUES('${dados.nome}','${dados.email}','${dados.senha}', '${dados.veiculo}')`;
}

const login = (dados) => {
    return `SELECT * FROM entregadores WHERE email = '${dados.email}' AND senha = '${dados.senha}' `;
}

const read = (id) => {
    return `SELECT * FROM entregadores WHERE id = ${id}`;
}

const readAll = () => {
    return `SELECT * FROM entregadores`;
}
const update = (dados) => {
    return `UPDATE entregadores SET`
        + ` nome = '${dados.nome}',`
        + ` email = '${dados.email}',`
        + ` senha = '${dados.senha}',`
        + ` veiculo = '${dados.veiculo}'`
        + ` WHERE id = ${dados.id}`;
}

const del = (id) => {
    return `DELETE FROM entregadores WHERE id = ${id}`;
}

module.exports = {
    create,
    login,
    read,
    readAll,
    update,
    del
}