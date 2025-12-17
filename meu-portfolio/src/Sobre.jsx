import FotoPerfil from "./assets/imgs/laura.jpeg";

function Sobre() {
  return (
    <section id="sobre">
      <div id="sobre-img"><img src={FotoPerfil} alt="Foto de perfil" /></div>
      <div id="sobre-texto">
        <h2>Olá, sou a Laura &lt;/&gt;  </h2>
        <p>
          Sou estudante do 5º semestre do curso de Bacharelado em Sistemas de
          Informação (BSI) pela Universidade Estadual de Campinas (UNICAMP) na
          Faculdade de Tecnologia (FT) de Limeira. Atualmente, realizo uma
          iniciação científica, com bolsa da FAPESP, no tema de predição de
          internações hospitalares a partir de poluição atmosférica.
        </p>

        <p>
          Tenho grande interesse pela área de ciência de dados, especialmente no
          uso da linguagem Python e suas diversas bibliotecas para análise e
          modelagem de dados. Também possuo experiência com problemas de lógica
          de programação, algoritmos e estrutura de dados, utilizando
          principalmente a linguagem C.
        </p>

        <p>
          Concluí o ensino médio integrante ao técnico em Informática em 2023
          pelo Colégio Técnico Industrial "Prof Isaac Portal Roldán" (CTI), da
          Universidade Estadual Paulista "Júlio de Mesquita Filho" (UNESP), em
          Bauru. Nesse período, participei de um projeto de extensão na área de
          robótica, com foco em atividades educativas para crianças e
          adolescentes da rede pública de ensino de Bauru.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
