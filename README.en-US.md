<p align="right">
  <a href="https://github.com/lucasiori/ignite_upfi/blob/master/README.md">🇧🇷 Português</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://github.com/lucasiori/ignite_upfi/blob/master/README.en-US.md">🇺🇸 English</a>
</p>

<h1 align="center">Bootcamp Ignite: upfi</h1>

<p align="center">
  <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/logo.png" alt="Logo" height="200" />
</p>

<p align="center">
  <a href="#about">About</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#techs">Technologies</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#running-application">Running application</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#preview">Preview</a>
</p>

<h2 id="about">ℹ About</h2>

<p>Completion project of the  <strong>Upload images</strong> challenge referring to chapter 4 of the bootcamp.</p>
<p>The application is an images repository, where you can add images identified by title/description.</p>
<p>This challeng is intented to put into pratice concepts and technologies learned during the chapter, such as:</p>
<p>
  <ul>
    <li><strong>React Query:</strong> Data management - fetching, caching, manipulating</li>
    <li><strong>React Hook Form:</strong> Form management and validation</li>
    <li><strong>Chakra UI:</strong> Declarative interfaces</li>
  </ul>
</p>

<br />

<h2 id="techs">🔧 Technologies</h2>

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

<h2 id="running-application">✅ Running application</h2>

<strong>Requirements:</strong>
<ul>
  <li>Node.js</li>
  <li>Package manager: NPM ou Yarn</li>
</ul>

<p>
  First, clone this repository on your local machine: <br />
  <code>git clone https://github.com/lucasiori/ignite_upfi</code>
</p>

<p>
  For this application work correctly, is needed that your configure the environment variables to access the <strong>FaunaDB</strong> database and the <strong>ImgBB</strong> images repository.
</p>
<p>
  Clone the <code>.env.example</code> file into a new file called <code>.env.local</code>. In this file you must put the connection keys of the database and the images repository.
</p>
<p>
  <strong>Observation:</strong> The database created in the <strong>FaunaDB</strong> can be named as you with, but <strong>MANDATORY</strong> it must have a collection called <strong>images</strong>. Is in this collection that the data will be stored.
</p>

<p>
  Access the project file, and in the terminal, run the command to install the dependencies: <br />
  <ul>
    <li>
      <strong>if using NPM: </strong>
      <code>npm install</code>
    </li>
    <li>
      <strong>if using Yarn: </strong>
      <code>yarn</code>
    </li>
  </ul>
</p>

<p>
  After installing the dependencies, make sure that port <strong>3000</strong> is available, it is the port where
  the application will run. <br />
  To starting application, run the command: <br />
  <ul>
    <li>
      <strong>if using NPM: </strong>
      <code>npm run dev</code>
    </li>
    <li>
      <strong>if using Yarn: </strong>
      <code>yarn dev</code>
    </li>
  </ul>
</p>

<br />

<h2 id="preview">👀 Preview</h2>

<p align="center">
  <img src="https://github.com/lucasiori/ignite_upfi/blob/master/.github/demo.gif" alt="Demonstração" />
</p>
