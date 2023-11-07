const create = (dados) => {
    return `INSERT INTO pedidos (cliente, endereco, produto, data, hora_pedido, entregador)`
        + ` VALUES('${dados.cliente}','${dados.endereco}','${dados.produto}', CURDATE(), CURTIME(),${dados.entregador})`;
}

const read = (id) => {
    return `SELECT * FROM pedidos WHERE id_pedido = ${id}`;
}

const readAll = () => {
    return `SELECT * FROM pedidos`;
}

const readAtivos = () => {
    return `SELECT * FROM vw_pedidos_ativos`;
}

const readCozinha = () => {
    return `SELECT * FROM vw_pedidos_cozinha`;
}

const readEntrega = () => {
    return `SELECT * FROM vw_pedidos_entrega`;
}

const readEntregaPorEntregador = (id) => {
    return `SELECT * FROM vw_pedidos_entrega WHERE entregador = ${id}`;
}

const update = (dados) => {
    return `UPDATE pedidos SET`
        + ` cliente = '${dados.cliente}',`
        + ` endereco = '${dados.endereco}',`
        + ` produto = '${dados.produto}',`
        + ` hora_pedido = '${dados.hora_pedido}',`
        + ` hora_entrega = '${dados.hora_entrega}',`
        + ` hora_fim = '${dados.hora_fim}',`
        + ` entregador = ${dados.entregador}`
        + ` WHERE id_pedido = ${dados.id_pedido}`;
}

const toEntrega = (id) => {
    return `UPDATE pedidos SET hora_entrega = CURTIME() WHERE id_pedido = ${id}`;
}

const toEnd = (id) => {
    return `UPDATE pedidos SET hora_fim = CURTIME() WHERE id_pedido = ${id}`;
}

const del = (id) => {
    return `DELETE FROM pedidos WHERE id_pedido = ${id}`;
}

module.exports = {
    create,
    read,
    readAll,
    readAtivos,
    readCozinha,
    readEntrega,
    readEntregaPorEntregador,
    update,
    toEntrega,
    toEnd,
    del
}