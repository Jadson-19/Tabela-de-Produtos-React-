function Comandos() {

  function clickCheck(i) {

    let display = document.getElementById(i).style.display;

    if (display == "none") {
      document.getElementById(i).style.display = 'block'
    } else {
      document.getElementById(i).style.display = 'none'
    }
  }

  const inputPesquisa = document.querySelector(".pesquisar");
  const produtos = [...document.querySelectorAll('.itensTabela tbody tr')];

  function removerAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  if (inputPesquisa) {

    inputPesquisa.addEventListener('input', () => {

      const search = inputPesquisa.value.toLowerCase();

      produtos.forEach(busca => {

        const matches = removerAcentos(busca.textContent.toLowerCase()).includes(search);

        busca.style.display = matches ? 'block' : 'none';

      });
    })
  };

  return (

    <>

      <div>

        <form>

          <input

            type="checkbox"
            className="checkbox"
            onClick={() =>

              clickCheck('estoque0') +
              clickCheck('estoque1') +
              clickCheck('estoque2') +
              clickCheck('estoque3') +
              clickCheck('estoque4') +
              clickCheck('estoque5') +
              clickCheck('estoque6') +
              clickCheck('estoque7') +
              clickCheck('estoque8') +
              clickCheck('estoque9')

            }

          >

          </input>

          <p className="paragrafo">Exibir apenas produtos diponíveis no estoque.</p>

        </form>

      </div>
      
    </>

  );

}


export default Comandos;