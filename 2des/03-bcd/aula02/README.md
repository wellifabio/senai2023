# MER x DER
- MER - Modelo Endidade Relacionamento
- DER - Diagrama Endidade Relacionamento

- Modelo Conceitual (Próximo ao problema, aos requisitos do usuário)
- Modelo Lógico (Próximo a solução implementação, código)

- Etapas Manuais do desenvolvimento de banco de dados
	- 1. Modelo Conceitual
	- 2. Script SQL
	- 3. Modelo Lógico
- Etapas utilizando ferramentas Case
	- 1. Modelo Conceitual 
	- 3. Modelo Lógico
	- 2. Script SQL
	
# SQL (Standard Query Language) tradução (Linguagem padrão de Consultas)
- DDL (Linguagem de Definição de Dados)
	- Create
	- Describe
	- Drop
	- Alter
- DML (Linguagem de Manipulação de Dados)
	- Isert
	- Select
	- Update
	- Delete

# XAMPP (Ambiente de desenvolvimento)
- X - Sistema Operacional Windows/Linux
- A - Apache (Servidor de Aplicações PHP)
- M - MariaDB - SGBD (Sistema Gerenciador de Banco de Dados) baseado em MySql
- P - PHP - Linguagem de programação web
- P - Perl - Linguagem de programação

# Executar o Banco de dados
	- Via linha de comando
		- 1. Abrir o XAMPP Control Panel
		- 2. Start no serviço/servidor MySQL
		- 3. Abrir um interpretador de Comandos (Shell)
		- 4. Navegar até a pasta do mysql, Windows: (C:\xampp\mysql\bin)
		- 5. Digitar o comando para acessar SGBD: <b>mysql -u root</b>
			- Para navegar/administrar os bancos de dados
				- CRUD (Cadastro, Consulta, Alteração, Exclusão)
				- show databases; (Mostra os bancos de dados)
				- use mysql; (Acessa o banco de dados)
				- show tables; (Mostra as tabelas do banco de dados)
				- describe tabela; (Descreve a estrutura da tabela)
				- Outros comandos CRUD:
					- drop table tabela; (Exclui uma tabela)
					- drop database nome_bd; (Exclui um banco de dados)
					- alter table nome tabela ... ; (Altera uma tabela)
					- create table noem tabela (campos, campos); (Cria tabelas)
		- 6. Caso utilize pelo (Shell) configurar Variável de Ambiente: "./var_ambiente.md"
	- Via interface gráfica de usuário (GUI)
		- 1. Abrir o XAMPP Control Panel
		- 2. Start no serviço/servidor MySQL
		- 3. Start no serviço/servidor Apache
		- 4. Clicar em <b>"Admin"</b> que está a frente do MySQL
			- 4.1. Isso abrirá o <b>PHPMyAdmin</b> onde podemos administrar o banco de dados visualmente.
		- 4. Se preferir podemos utilizar outros ambientes gráficos para acessar o SGBD como:
			- MySQL WorkBench
			- HeidiSQL
			- Ou outro que preferir
# PHPMyAdmin Web (demonstração)
- https://demo.phpmyadmin.net/master-config/