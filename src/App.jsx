import React, { useState } from "react"
import Comandos from './components/Comandos';
import Tabela from './components/Tabela';

import "./App.css"

function App() {

  const [filtro, setFiltro] = useState('')

  const handleChangeNome = (e) => {
    setFiltro(e.target.value);
  }

  return (

    <>

      <header>

        <h1>TABELA DE PRODUTOS</h1>
        <p>Esta aplicação tem o intuito de explorar uma tabela de produtos buscáveis utilizando o React.</p>

      </header>

      <div className='container'>

        <div className='card'>

          <div className="tabela">

            <h3>

              <div className="texto">

                Produtos:

              </div>

            </h3>

            <form>

              <input

                type="text"
                placeholder="Pesquisar..."
                className="pesquisar"
                value={filtro}
                onChange={(e) => handleChangeNome(e)}

              >

              </input>

            </form>

            <Comandos />

            <Tabela />

          </div>

        </div>

      </div>


      <footer>

        <p>Tabela de Produtos</p>
        <p>Para maiores informações - clique no link abaixo para visualizar minhas redes sociais:</p>

        <div className="social">

          <a href="https://www.facebook.com/JadsonSouzaSCR"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/jadson.souzza/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/jadson-souza-a6a130224/"><i className="fab fa-linkedin"></i></a>

        </div>

        <p className="fim">© 2022 Copyright by Jadson Souza.</p>

      </footer>

    </>

  );

}


export default App;
