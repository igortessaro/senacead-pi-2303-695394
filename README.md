<div align="center">
  <img src="https://github.com/lucasgviotti/Teste/assets/98164934/891cf4af-ae9e-4b9a-ba20-10d52d466be8">
</div>

<div align="center">
 <p> <strong>DESENVOLVIMENTO DE SISTEMAS ORIENTADO A DISPOSITIVOS MÓVEIS E BASEADOS NA WEB</strong></p>
</div>

<p> Projeto Integrador – apresentado ao Centro Universitário Senac, como exigência parcial para obtenção de aprovação na disciplina Projeto Integrador, do curso de Análise e Desenvolvimento de Sistemas. </br> Orientador: Prof. Gustavo Moreira Calixto </p>

<ul>
  <li><strong> GRUPO 01 </strong>
    <ul>
      <li>Anderson Rafael Neves Maciel</li>
      <li>Edson Jose Moreira Junior</li>
      <li>Fernando Oliveira Carobino Junior</li>
      <li>Igor Dos Santos Tessaro</li>
      <li>Joao Ricardo Soares Da Silva</li>
      <li>Joao Victor Santana Ribeiro</li>
      <li>Lucas Gabriel Viotti</li>
    </ul>
  </li>
</ul>

<hr> 

<div align="center">
 <p> <strong>Proposta</strong></p>
</div>

<p>
  Baseado no conceito inicial do projeto, o mesmo foi revisitado e adequado para uma versão web, onde a proposta continua sendo a de cadastramento e visualização dos gastos.  Sendo assim, fica definido como parte a ser desenvolvido, as telas de: </p>
  <ul>
    <li>Acesso;
      <img src="https://github.com/lucasgviotti/Teste/assets/98164934/ba495341-4f82-4181-bda3-57509021e075"/>
    </li>
    <li>Adição, Edição e Exclusão de Gastos;
      <img src="https://github.com/lucasgviotti/Teste/assets/98164934/3250a81c-df0d-4165-9b46-0a9717968598"/>
    </li>
  </ul>
<p>
  Possibilitando assim que o usuário possa adicionar e visualizar de maneira fácil seus gastos.
</p>

<p>Protótipo das telas apresentadas e adequadas para web, clique no link abaixo: </br>
  <a href="https://www.figma.com/file/rMVee6XLTbZFhQJUxP8wVz/Descomplica-WEB?type=design&node-id=1%3A495&mode=design&t=2RwQtvuchIGD8gcm-1" target="_blank">
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
  </a>
</p>

<hr> 

<div align="center">
 <p> <strong>Preparação do Ambiente de Desenvolvimento</strong></p>
</div>

<div align="center">
  Tecnologia Frontend - Angular CLI version 16.2.9 </br>
  <a href="https://angular.io/cli" target="_blank">
    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  </a>
</div>

<div align="center">
  Tecnologia Backend - Dotnet 7 | Node LTS </br>
  <a href="https://dotnet.microsoft.com/pt-br/download/dotnet/7.0" target="_blank">
    <img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"/>
  </a>
  <a href="https://nodejs.org/en/download" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  </a>
</div>

<div align="center">
  Banco de Dados - MongoDB</br>
  <a href="" target="_blank">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  </a>
</div>

<div align="center">
  Tecnologia Auxiliar - Docker </br>
  <a href="" target="_blank">
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>
  </a>
</div>

<hr>

<div align="center">
 <p> <strong>Vídeo</strong></p>
    <video>
      <source src="https://github.com/igortessaro/senacead-pi-2303-695394/assets/98164934/e8c754e8-8029-4477-a027-9eb4d2154304" type="video/mp4">
    </video>
</div>

<hr>

<div align="center">
 <p> <strong>Instruções de Execução do Teste</strong></p>
</div>

<p>
    <ol>
        <li>Baixar o código, e abrir em sua IDE de preferência</li>
        <li>Instalar o Docker</li>
        <li>Com os códigos baixados na sua máquina, rodar o comando <strong>cd tools/docker</strong> no terminal da sua IDE de preferência</li>
        <li>Uma vez que que o docker realizou todo o processo, rodar o comando <strong>docker compose -p "descomplica-gastos" up -d --build</strong> </li>
        <li>Dentro do docker, abrir a porta <strong>5224:80</strong> e adicionar <strong>/swagger</strong> para acessar a API</li>
        <li>Dentro da API na opção Login, clicando em <strong>Try it out</strong>, é possível que seja adicionado o nome de usuário e senha (recomendamos utilizar teste em ambos)</li>
        <li>Novamente no docker, abrir a porta <strong>4200:80</strong>, inserir o usuário e senha para acesso</li>
        <li>Na barra de navegação clicar em gastos e adicionar um gasto, editar e/ou excluir.</li>
    </ol>
    Rodando desta maneira não é necessário que sejam instaladas todas as tecnologias utilizadas, por isso optamos pelo docker como auxiliar.
</p>
