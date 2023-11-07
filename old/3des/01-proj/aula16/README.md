# Atividades de Produtividade FullStack (ejs/pug)

## Tema 1 - Avaliação Física

|Contextualização:|
|-|
|A Sra. Carla Prestes é nutricionista e precisa de um sistema para cadastrar seus pacientes e que faça um rápido pré-diagnóstico|

- O Analista de sistemas já realizou a **análise de requisitos** e documentou conforme diagramas a seguir:

|Documento|Diagrama|
|-|-|
|DER Modelo Conceitual|![DER Modelo Conceitual](./imgs/der_imc.png)|
|UML - DC|![UML DC (Diagrama de Classes)](./imgs/uml_dc_imc.png)|
|UML - DCU|![UML DCU (Diagrama de Casos de Uso)](./imgs/uml_dcu_imc.png)|

|Desafio-1:|
|-|
|Você foi contratado como Programador Full-Stack, por isso deve desenvolver o Back-end e a Aplicação Web com as funcionalidades documentadas, utilize os dados abaixo para testar sua aplicação e desenvolva o Front-End integrado conforme WireFrames a seguir, crie um diagrama de Atividades com o intúito de treinar a usuária nas funcionalidades da aplicação|

|Nome|Nascimento|Peso|Altura|
|-|-|-|-|
|Jair Rodrigues|1981-01-03|85.5|1.75|
|Marieta Severo|1995-03-04|44.3|1.55|
|Karina Silva|2002-05-13|88|1,73|
|Solange Nascimento|2005-12-01|95|1.58|
|Marcos Pontes|2001-12-03|60|1.98|

### WireFrame

|Descrição|Tela|
|-|-|
|Tela CRUD|![WireFrame 01](./imgs/wireframe1.png)|
|Modal de Cadastro|![WireFrame 02](./imgs/wireframe2.png)|
|Alteração via linhas editávejs da tabela|![WireFrame 03](./imgs/wireframe3.png)|
|Botão para excluir|![WireFrame 04](./imgs/wireframe4.png)|

|Observações:|
|-|
|Dados calculados nem sempre precisam ser armazenados em bancos de dados:<br>- Podem ser calculados através de **visões**(Views) no SGBD e apenas exibidos os resultados,<br>- Podem ser calculados na API back-end através de métodos/funções:<br>&emsp;- Podem ser calculados quando os dados são listados um a um<br>&emsp;- Podem ser calculados quando os dados são todos de uma vez<br>&emsp;- Podem ser calculados quando os dados são cadastrados e armazenados no banco de dados<br>- Para cada problema devemos avaliar qual a melhor alternativa quanto a processamento e armazenamento<br>**- Neste caso o Analista decidiu que os resultados dos cálculos não devem ser armazenados então calcule nos métodos da API ou em forma de VIEW no BD**|
## Tema 2 - Controle de bonificações

|Contextualização:|
|-|
|Algumas empresas costumam pagar participações nos lucros ou resultados de acordo com a legislação trabalhista ou acordo sindical a qual pertencem, outras tratam apenas como benefício aos funcionários como insntivo ou agradecimento pelo serviço prestado. A empresa ACME Parafusos precisa de um sistema para cadastrar/registrar e calcular as bonificações pagas a seus funcionários|

- O Analista de sistemas já realizou a **análise de requisitos** e documentou conforme diagramas a seguir:

|Documento|Diagrama|
|-|-|
|DER Modelo Conceitual|![DER Modelo Conceitual](./imgs/der_bonus.png)|
|UML - DC|![UML DC (Diagrama de Classes)](./imgs/uml_dc_bonus.png)|
|UML - DCU|![UML DCU (Diagrama de Casos de Uso)](./imgs/uml_dcu_bonus.png)|

|Desafio:|
|-|
|Você foi contratado como Programador Full-Stack, por isso deve desenvolver um aplicativo Web responsivo com funcionalidades documentadas, **A bonificação é 2% do salário multiplicado pelo total de anos de trabalho vezes a nota do desempenho (de 0 a 10)** Ex: um funcionário que recebe 1000.00 de salário, trabalhou 3 anos e obteve 10 de desempenho receberá 600.00 de **bonificação**, utilize os dados a seguir para testar sua aplicação, ao concluir crie também um UML Diagrama de Atividades para treinar o funcionário do RH na utilização das funcionalidades básicas do sistema.|

|Nome|Admissão|Salario|Data do Pagamento|Desempenho|Bonificacao|
|-|-|-|-|-|-|
|José Rodrigues|2018-01-06|1300.00|CURDATE()|7|NULL|
|Maria Severo|2018-03-04|2200.00|CURDATE()|10|NULL|
|Silvia Silva|2019-05-20|3200.00|CURDATE()|10|NULL|
|Solange Oliveira|2020-12-11|5500.00|CURDATE()|8.5|NULL|
|Mariana Pontes|2021-12-13|2350.00|CURDATE()|6|NULL|

### WireFrame

|Descrição|Tela|
|-|:-:|
|Tela CRUD|![WireFrame 01](./imgs/wireframe1b.png)|
|Modal de Cadastro|![WireFrame 02](./imgs/wireframe2b.png)|
|Responsividade da Tabela|![WireFrame 03](./imgs/wireframe3b.png)|
|Alteração com linhas editávejs da tabela|![WireFrame 04](./imgs/wireframe4b.png)|

|Observações:|
|-|
|Dados calculados nem sempre precisam ser armazenados em bancos de dados:<br>- Porém, neste caso a empresa precisa registrar o histórico de pagamentos e em alguns casos pode haver diferença entre o valor calculado e o valor realmente recebido pelo funcionário/colaborador então **o resultado deve ser armazenado no banco de dados**|

## Como entregar as atividades
|Entregas:|
|-|
|O professor disponibilizará uma pasta na rede para entregar o projeto|
|Crie uma pasta com seu nome contendo:|
|Uma pasta para cada projeto dividida em:<br>- Subpasta: **webapp** com os códigos fullstack ejs/pug<br>- Subpasta: **docs** com o script.sql e o arquivo do insomnia<br>- Não esqueça de excluir a pasta **node_modules** antes de entregar|