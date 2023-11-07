# Informações sobre implantações

## Deploy (Com Azure)
- https://learn.microsoft.com/pt-br/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode#set-up-your-initial-environment

## Deploy (Com HEROKU)
$ heroku login<br/>
<br/>
$ heroku git:clone -a patrimoniomongo<br/>
$ cd patrimoniomongo<br/>
<br/>
$ git add .<br/>
$ git commit -am "make it better"<br/>
$ git push heroku master<br/>
<br/>
$ heroku ps:scale web=1<br/>
$ heroku open<br/>
$ heroku logs --tail<br/>
$ heroku ps<br/>
<br/>
Acessar o "Container" via SSH<br/>
$ heroku ps:exec<br/>
<br/>
Saber o endereço IP externo<br/>
$ curl ifconfig.me