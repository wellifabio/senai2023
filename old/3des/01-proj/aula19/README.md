# Projeto final

## Entregar Projeto (Link do Repositório)
- [Formulário](https://forms.gle/uGEh2ThQhct26aX2A)

## Prazos
- (31/05/2023) Entrega do documento do projeto para correções (doc ou pdf)
- (12/06/2023) Entrega do prototipo em funcionamento
    - Funcionalidades **essenciais**
    - Funcionalidades importantes
    - Funcionalidades desejáveis
- (13, 14, 15 e 16/06/2023) Apresentações dos projetos aos professores, alunos, coordenação e/ou empreendedores
- (15/06/2023) Entrega do documento do projeto versão final (PDF)

## Estrutura do documento do projeto
___

### Formatação ABNT para Monografia ou TCC

- Capa
- Contra Capa
- Resumo
- Sumario
- Justificativa

- Objetivos
    - Geral
    - Específico

- Introdução

- Capítulo I TAP
- Capítulo II Cronograma - Atualizado
- Capítulo III EAP
    - Definições e orientações
    - RN (Regras de negócio)
    - RF (Requisitos Funcionais + CDU(Diagrama de Casos de Uso))
    - NF (Requisitos não Funcionais, Organograma)
- Capítulo IV Orçamento
- Capítulo V Documentação da estrutura da solução
    - Banco de dados
        - DER Conceitual
        - DER Lógico
    - Back-End
        - Diagrama de Classes do Schema prisma ou mongodb
    - Interface web Front-End e/ou Mobile
        - Diagrama de Atividades apenas do fluxo principal da solução
- Capítulo VI Controle
    - Dados de teste (csv, json)
    - Plano de Testes (CheckList)
    - Relatório de testes
- Capítulo VII Execução
    - Web e ou Mobile (Print das Telas)
- Conclusão ou Resultados
    - Resumo das lições aprendidas
    - Planos para o futuro
    - link do portifolio dos integrantes do grupo
    - link do github dos integrantes do grupo
- Bibliografias
    - Livros pesquisados
    - Link dos sites, foruns pesquisados durante o projeto


### Organização do Repositório github
---
- README.md 
   - Com instruções de como executar o projeto
       - O que é necessário ter intalado (NodeJS, XAMPP, Expo, MongoDB...)
       - Qual a ordem da execução ex:
           - Abrir o Xampp (Start em MySQL)
           - Abrir com VsCode
           - Abrir terminal cmd
                - cd backend
                - npm i ou yarn
                - prisma migrate dev --name "descricao"
                - nodemon ou npm start ou node server.js
                - cd ..
                - cd app
                - npm i
                - expo start
                - front index.html (Executar com live server)
- Pastas
    - ./app (Aplicativo Mobile)
    - ./docs (Documento do projeto, arquivo de testes insomnia)
    - ./back (API ou BackEnd MVC)
    - ./front (Interface Web)
---

### Critérios de avaliação

|Trabalho|Capacidades|Critérios|
|-|-|-|
|Prático(Básico)|Definir a sequência das atividades para desenvolvimento dos componentes, de acordo com os requisitos do sistema|Apresentou o problema e a solução|
|Prático(Básico)|Implementar as funcionalidades de acordo com os requisitos definidos (Essencial, Importante, Desejável)|Implementou todos os requsitos essenciais|
|Prático(Básico)|Apresentar tecnicamente ao cliente o sistema de software desenvolvido, sanando as possíveis dúvidas sobre o funcionamento do mesmo|Os alunos, professores e pessoas interessadas entenderam o problema e solução|
|Prático(Desejável)|Pesquisar em diversas fontes de informação tendo em vista as melhores práticas de mercado considerando, inclusive, a performance e a qualidade de software|Apresentou algo além do exercitado nas aulas|
|Prático(Básico)|Demonstrar capacidade de organização|Integração Front x Back x Mobile|
|Prático(Desejável)|Seguir método de trabalho|Agil + Scrum + Seguir cronograma + Resolve o problema|
|Prático(Desejável)|Trabalhar em equipe|Todos participaram de maneira harmônica?|
|Prático(Desejável)|Comunicar-se com clareza|Postura profissional durante a apresentação, tom de vóz|
|Documento(Básico)|Definir os recursos humanos e materiais para o desenvolvimento dos componentes|Cronograma Gráfico de Gantt|
|Documento(Básico)|Elaborar cronograma das etapas sequenciadas do desenvolvimento dos componentes, considerando a integração com outros profissionais envolvidos no projeto|Cronograma Gráfico de Gantt|
|Documento(Básico)|Elaborar documentação técnica do sistema|Entregou o documento do projeto no formato ABNT|
|Documento(Desejável)|Demonstra atenção a detalhes|Os diagramas fazem referência a solução prática apresentada|
|Documento(Desejável)|Manter relacionamento interpessoal|Postura profissional ética no texto|
|Documento(Desejável)|Demonstrar capacidade de comunicação com profissionais de diferentes áreas e especialidades|O documento é claro quanto ao problema e a solução|
|Documento(Desejável)|Demonstrar visão sistêmica|Como seu projeto pode ser implantado em uma empresa/orgão real|