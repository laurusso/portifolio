import FotoPerfil from "./assets/imgs/laura.jpeg";

function Sobre() {
    return(
        <section id="sobre">
            <img src={FotoPerfil} alt="Foto de perfil" />
            <h2>Olá, sou a Laura :)</h2>
            <p>
                Texto 
            </p>
        </section>
    );
}

export default Sobre;