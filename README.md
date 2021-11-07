<h1 align="center">Bootcamp Ignite: upfi</h1>

<p align="center">
  <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/logo.png" alt="Logo" height="200" />
</p>

<p align="center">
  <a href="#about">Sobre</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#techs">Tecnologias</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#running-application">Executando a aplicação</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#preview">Preview</a>
</p>

<h2 id="about">ℹ Sobre</h2>

<p>Projeto de conclusão do desafio <strong>Upload de imagens</strong> referente ao capítulo 4 do bootcamp.</p>
<p>A aplicação se resume em um repositório de imagens, onde você pode adicionar imagens identificadas por título/descrição.</p>
<p>Esse desafio tem como finalidade colocar em prática conceitos e tecnologias aprendidas durante o capítulo, como:</p>
<p>
  <ul>
    <li><strong>React Query:</strong> Gerenciamento dos dados - busca, armazenamento, manipulação</li>
    <li><strong>React Hook Form:</strong> Gerenciamento e validação de formulários</li>
    <li><strong>Chakra UI:</strong> Interfaces declarativas</li>
  </ul>
</p>

<br />

<h2 id="techs">🔧 Tecnologias</h2>

<table width="100%" align="center">
  <tbody>
    <tr>
      <td width="25%" align="center" vertical-align="middle">
        <a href="https://pt-br.reactjs.org/" target="_blank">
          <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/react.jpg" alt="React" height="100" />
        </a>
      </td>
      <td width="25%" align="center" vertical-align="middle">
        <a href="https://nextjs.org/" target="_blank">
          <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/nextjs.jpeg" alt="Next.js" height="100" />
        </a>
      </td>
      <td width="25%" align="center" vertical-align="middle">
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/typescript.png" alt="Typescript" height="100" />
        </a>
      </td>
      <td width="25%" align="center" vertical-align="middle">
        <a href="https://chakra-ui.com/" target="_blank">
          <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/chakra-ui.png" alt="Chakra UI" height="100" />
        </a>
      </td>
    </tr>
    <tr>
      <td width="25%" align="center" vertical-align="middle">
        <a href="https://react-hook-form.com/" target="_blank">
          <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/react-hook-form.jpeg" alt="React Hook Form" height="100" />
        </a>
      </td>
      <td width="25%" align="center" vertical-align="middle">
        <a href="https://react-query.tanstack.com/" target="_blank">
          <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/react-query.png" alt="React Query" height="100" />
        </a>
      </td>
      <td width="25%" align="center" vertical-align="middle">
        <a href="https://fauna.com/" target="_blank">
          <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/faunadb.png" alt="Fauna DB" height="100" />
        </a>
      </td>
      <td width="25%" align="center" vertical-align="middle">
        <a href="https://pt-br.imgbb.com/" target="_blank">
          <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/imgbb.png" alt="ImgBB" width="150" height="100" />
        </a>
      </td>
    </tr>
  </tbody>
</table>

<br />

<h2 id="running-application">✅ Executando a aplicação</h2>

<strong>Requisitos:</strong>
<ul>
  <li>Node.js</li>
  <li>Gerenciador de pacotes: NPM ou Yarn</li>
</ul>

<p>
  Primeiramente, clone o repositório na sua máquina local: <br />
  <code>git clone https://github.com/lucasiori/ignite_upfi</code>
</p>

<p>
  Para que a aplicação funcione corretamente, é necessário que você configure as variáveis ambiente para acessar o banco de dados <strong>FaunaDB</strong> e
  o repositório de imagens <strong>ImgBB</strong>.
</p>
<p>
  Clone o arquivo <code>.env.example</code> em um novo arquivo chamado <code>.env.local</code>. Nesse arquivo você deve colocar as chaves de conexão com o
  banco de dados e o repositório de imagens.
</p>
<p>
  <strong>Observação:</strong> O banco de dados criado no <strong>FaunaDB</strong> pode ser nomeado como desejar, mas deve ter <strong>OBRIGATORIAMENTE</strong>
  uma <i>collection</i> chamada <strong>images</strong>. Pois é nessa <i>collection</i> que serão armazenados os dados.
</p>

<p>
  Acesse a pasta do projeto, e no terminal execute o comando para instalar as dependências: <br />
  <ul>
    <li>
      <strong>se estiver utilizando NPM: </strong>
      <code>npm install</code>
    </li>
    <li>
      <strong>se estiver utilizando Yarn: </strong>
      <code>yarn</code>
    </li>
  </ul>
</p>

<p>
  Após instaladas as dependências, certifique-se de que a porta <strong>3000</strong> está disponível pois é a porta onde a aplicação será executada. <br />
  Para iniciar a aplicação, execute o comando: <br />
  <ul>
    <li>
      <strong>se estiver utilizando NPM: </strong>
      <code>npm run dev</code>
    </li>
    <li>
      <strong>se estiver utilizando Yarn: </strong>
      <code>yarn dev</code>
    </li>
  </ul>
</p>

<br />

<h2 id="preview">👀 Preview</h2>

<p align="center">
  <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/demo.gif" alt="Demonstração" />
</p>
