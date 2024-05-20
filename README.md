<div align="center">
  <img src="https://github.com/lucasgviotti/Teste/assets/98164934/891cf4af-ae9e-4b9a-ba20-10d52d466be8">
</div>

<div align="center">
 <p> <strong>PROJETO INTEGRADOR: ANÁLISE DE SOLUÇÕES INTEGRADAS PARA ORGANIZAÇÕES</strong></p>
</div>

<p> Apresentado ao Centro Universitário Senac, como exigência parcial para obtenção de aprovação na disciplina Projeto Integrador, do curso de Análise e Desenvolvimento de Sistemas. </br> Prof. Evandro Carlos Teruel </p>

<ul>
  <li><strong> GRUPO 42 </strong>
    <ul>
      <li>Edson Jose Moreira Junior</li>
      <li>Fernando Oliveira Carobino Junior</li>
      <li>Igor Dos Santos Tessaro</li>
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
  Proposta de aplicação para cadastramento e visualização de gastos pessoais.  Sendo assim, fica definido como parte a ser desenvolvido, as telas de: </p>
  <ul>
    <li>Acesso;
      <img src="https://github.com/lucasgviotti/Teste/assets/98164934/fad6bc90-2f16-43db-b82e-73daed29b9ad"/>
    </li>
    <li>Home - Gráfico;
      <img src="https://github.com/lucasgviotti/Teste/assets/98164934/a68ec1e1-8115-4716-80fa-1eb30b1f884a"/>
    </li>
    <li>Adição, Edição e Exclusão de Gastos;
      <img src="https://github.com/lucasgviotti/Teste/assets/98164934/759d31bd-5cfb-4ab9-aee7-21ed5f61b9b7"/>
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

<div align="left">
  Tecnologia Frontend - Angular CLI version 16.2.9 </br>
  <a href="https://angular.io/cli" target="_blank">
    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  </a>
</div>

<div align="left">
  Tecnologia Backend - Dotnet 7 | Node LTS </br>
  <a href="https://dotnet.microsoft.com/pt-br/download/dotnet/7.0" target="_blank">
    <img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"/>
  </a>
  <a href="https://nodejs.org/en/download" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  </a>
</div>

<div align="left">
  Banco de Dados - MongoDB</br>
  <a href="" target="_blank">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  </a>
</div>

<div align="left">
  Tecnologia Auxiliar - Docker </br>
  <a href="" target="_blank">
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>
  </a>
</div>

<hr>

<div align="center">
 <p> <strong>Vídeo</strong></p>
</div>


https://github.com/igortessaro/senacead-pi-2303-695394/assets/98164934/92cddaa5-7a86-411e-aa8c-348c1db262a8



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
</br>
<p><strong>Vídeo auxiliar de como testar a aplicação</strong></p>

https://github.com/igortessaro/senacead-pi-2303-695394/assets/98164934/4d5a57b2-3b3e-4d94-afa0-d5ba8fcac33f
