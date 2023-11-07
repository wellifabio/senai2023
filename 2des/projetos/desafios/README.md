# Projeto Restaurantes

|Contextualização|
|-|
|Construir um Aplicativo Web que possa ser utilizado por redes de restaurantes que pretentem manter seus **cardápios** atualizados e **avaliados** por seus clientes|

## Banco de Dados

### Dicionário de dados
- Cliente (id, nome, telefone, email, senha)
- Categoria (id, nome)
- Restaurante (id, nome, categoriaId, endereco)
- Cardapio (id, restauranteId, descricao, valor)
- Avaliacao (restauranteId, clienteId, data, nota, descricao)

## FrontEnd
### Features / Funcionalidades
- Login
- Lista de restaurantes (Filtrar por categoria) (Exibir nome, categoria e nota)
- Tela do restaurante (Nome, endereco, nota, cardpio e avaliacoes e cadastrar avaliacao)