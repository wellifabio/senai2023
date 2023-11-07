# HASH

|O que é hash|
|-|
|Em ciência da computação, um hash (ou valor de hash) é uma sequência de bytes gerada por um algoritmo de hash criptográfico a partir de um conjunto de dados de entrada. Esse algoritmo de hash transforma os dados em uma representação única e fixa, geralmente com tamanho fixo, independentemente do tamanho ou conteúdo dos dados originais.|

## Aplicações:
- Verificação de integridade: Ao calcular o hash de um conjunto de dados, você pode comparar o hash resultante com um hash conhecido anteriormente para verificar se os dados foram modificados ou corrompidos. Se os hashes forem diferentes, isso indica que os dados foram alterados.

- Armazenamento de senhas: Em vez de armazenar as senhas reais dos usuários em um banco de dados, é comum armazenar seus hashes. Quando um usuário faz login, a senha fornecida é hash e comparada com o hash armazenado no banco de dados. Isso ajuda a proteger as senhas em caso de violação de segurança.

- Indexação e pesquisa eficiente: Os hashes são usados em várias estruturas de dados, como tabelas de hash, para indexar e pesquisar informações de forma eficiente. Os hashes fornecem chaves únicas que podem ser usadas para acessar rapidamente os dados correspondentes.

- Criptografia: Em criptografia, os hashes são usados para criar resumos criptográficos de mensagens ou chaves. Esses resumos são usados em vários algoritmos de criptografia para garantir a integridade dos dados ou para criar assinaturas digitais.

|Conclusão|
|-|
|Algoritmos de hash criptográfico populares incluem MD5, SHA-1, SHA-256 e SHA-3. É importante notar que nem todos os algoritmos de hash são igualmente seguros, e alguns algoritmos mais antigos, como o MD5 e o SHA-1, são considerados criptograficamente fracos e não são recomendados para uso em aplicações que requerem segurança. Algoritmos mais recentes, como o **SHA-256**, são considerados mais **seguros** e amplamente adotados em várias aplicações.|