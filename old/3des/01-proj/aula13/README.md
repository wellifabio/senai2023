# Deploy (implantação BD e BackEnd)
- Após implantar o Banco de dados com o serviço MySQL do Azure
- Podemos implantar APIs ou Aplicações Back-End (NodeJS com o serviço de aplicativo da Azure, via VSCode)
- Para isso precisamos de uma API (desenvolvida)
- Abaixo segue um exemplo de uma aplicação integrada BackEnd + FrontEnd
## Passo a passo
- Para implantar uma aplicação Node.js e MySQL no Azure, você pode seguir os seguintes passos:
- Crie uma conta no Azure e faça login no Portal do Azure.
- Crie um grupo de recursos para a aplicação e defina uma região.
- Crie um banco de dados MySQL no Azure.
- Crie uma conta de armazenamento no Azure para hospedar o código e arquivos da aplicação.
- Baixe e instale o Azure CLI em sua máquina.
- Crie um diretório para sua aplicação e, em seguida, crie um arquivo de configuração package.json sando o comando npm init.
- Adicione as dependências necessárias para o seu aplicativo Node.js ao arquivo package.json.
- Crie o arquivo server.js para sua aplicação Node.js.
- Conecte sua aplicação ao banco de dados MySQL.
- Crie um arquivo de configuração config.js para armazenar as informações de conexão com o banco de dados.
- Use o Azure CLI para criar um aplicativo Web do Azure.
- Use o Azure CLI para implantar a aplicação Node.js no Azure.
- Configure as variáveis de ambiente do aplicativo Web para se conectar ao banco de dados MySQL.
- Configure a string de conexão com o banco de dados em sua aplicação Node.js para usar as variáveis de ambiente.
- Inicie o aplicativo Web e teste-o no Azure.

|Esses são os passos gerais para implantar uma aplicação Node.js e MySQL no Azure. Existem várias ferramentas disponíveis no Azure que podem ajudá-lo a fazer isso, como o Azure App Service, o Azure Database for MySQL e o Azure Storage. Certifique-se de ler a documentação oficial do Azure para obter mais informações sobre como usar essas ferramentas para implantar sua aplicação.|
|-|

### Criar um aplicativo Web do Node.js no Azure
- https://learn.microsoft.com/pt-br/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode#set-up-your-initial-environment
### Implantar o aplicativo Node.js no aplicativo Web do Azure usando o DevOps Starter para o GitHub Actions
- https://learn.microsoft.com/pt-br/azure/devops-project/devops-starter-gh-web-app
### Implantar um aplicativo Web Node.js + MongoDB no Azure
- https://learn.microsoft.com/pt-br/azure/app-service/tutorial-nodejs-mongodb-app
