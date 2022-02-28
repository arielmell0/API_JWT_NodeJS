## 💻 Sobre o projeto

Projeto de uma API responsável por cadastrar um usuário, criptografar sua senha no banco de dados, e devolver um token para acessar certas informações.

Criado para treinar alguns tópicos aprendidos em alguns cursos de NodeJS

## 🧪 Testando a nossa API com o Insomnia

#### Utilizando o [Insomnia](https://insomnia.rest/) na rota inicial da nossa aplicação e recebendo uma mensagem de boas vindas
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="mensagem boas vindas" src="https://s10.gifyu.com/images/home6c9b58150fa9e71c.gif" width="1080px">
</p>
--------------------------------------------------------------------------------------------------------------------------------------------------------------<br><br>

#### Cadastrando um usuário na nossa API seguindo a seguinte estrutura:
````
{
	"name": "nome do usuário",
	"email": "emailDoUsuario@usuario.user"
	"password": "senhaDoNossoUsuario123",
	"confirmPassword": "SenhaDoNossoUsuario123"
}
````
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="cadastrando usuario" src="https://s10.gifyu.com/images/registro_usuario.gif" width="1080px">
</p>
--------------------------------------------------------------------------------------------------------------------------------------------------------------<br><br>

#### Realizando o Login do nosso usuário o que nos dá direito ao acesso a algumas rotas privadas com o nosso Token
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="login do usuario e acesso ao nosso token" src="https://s10.gifyu.com/images/login_usuario.gif" width="1080px">
</p>
--------------------------------------------------------------------------------------------------------------------------------------------------------------<br><br>

#### Buscando usuarios pelo seu ID, o usuário somente irá conseguir acessar os dados de outros usuários caso esteja logado e possua um Token válido
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="buscando usuarios pelo id" src="https://s10.gifyu.com/images/buscando_usuarios.gif" width="1080px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [NodeJS](https://nodejs.org/),  [Express](https://expressjs.com), [MongoDB](https://www.mongodb.com/), [JSON Web Tokens](https://jwt.io/) e [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

> Veja o arquivo  [package.json](https://github.com/arielmell0/API_JWT_NodeJS/blob/main/package.json)

## 🦸 Autor
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQFATecIIyJX-w/profile-displayphoto-shrink_800_800/0/1640814567518?e=1648684800&v=beta&t=2lAVIltvzGT_gH5mZvGpzjQAjrS-lzbOqvCVO5dAchQ" width="100px;" alt=""/>
 <br />
 <sub><b>Ariel Oliveira de Mello</b></sub>

[![Twitter Badge](https://img.shields.io/twitter/follow/Hellodarknes0?style=social)](https://twitter.com/Hellodarknes0)

## 📝  Licença

Este projeto esta sobe a licença [MIT](./LICENSE)
