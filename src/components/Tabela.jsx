function Tabela () {

    return (

        <>

<p className="tituloProdutos1">Sporting Goods</p>

<div className="produtosEsportes">

    <table className="itensTabela">

        <thead>

            <tr>

                <th className="nome">Nome</th>
                <th className="preco">Preço</th>


            </tr>

        </thead>

        <tbody>

            <tr>

                <td className="nome">Football</td>
                <td className="preco">$49.99</td>


            </tr >

            <tr>

                <td className="nome">Baseball</td>
                <td className="preco">$9.99</td>


            </tr>

            <tr>

                <td className="nome"><span className="spanEstoque" id="estoque0">Basketball</span></td>
                <td className="preco"><span className="spanEstoque" id="estoque1">$29.99</span></td>

            </tr>

            <tr>

                <td className="nome">Camisa Sport Recife</td>
                <td className="preco">$159.99</td>

            </tr>

            <tr>

                <td className="nome">Boné Corinthians</td>
                <td className="preco">$39.99</td>

            </tr>

            <tr>

                <td className="nome"><span className="spanEstoque" id="estoque2">Camisa Grêmio</span></td>
                <td className="preco"><span className="spanEstoque" id="estoque3">$359.99</span></td>

            </tr>

        </tbody>

    </table>

</div>


<p className="tituloProdutos2">Electronics</p>

<div className="produtosEletronicos">

    <table className="itensTabela">

        <thead>

            <tr>

                <th className="nome">Nome</th>
                <th className="preco">Preço</th>


            </tr>

        </thead>

        <tbody>

            <tr>

                <td className="nome">iPod Touch</td>
                <td className="preco">$99.99</td>

            </tr>


            <tr>

                <td className="nome"><span className="spanEstoque" id="estoque4">iPhone 5</span></td>
                <td className="preco"><span className="spanEstoque" id="estoque5">$399.99</span></td>

            </tr>

            <tr>

                <td className="nome">Nexus 7</td>
                <td className="preco">$199.99</td>

            </tr>


            <tr>

                <td className="nome"><span className="spanEstoque" id="estoque6">Pocophone M4 Pro</span></td>
                <td className="preco"><span className="spanEstoque" id="estoque7">$399.99</span></td>

            </tr>


            <tr>

                <td className="nome">Filmadora Tekpix</td>
                <td className="preco">$29.99</td>

            </tr>

            <tr>

                <td className="nome"><span className="spanEstoque" id="estoque8">PlayStation 5</span></td>
                <td className="preco"><span className="spanEstoque" id="estoque9">$699.99</span></td>

            </tr>

        </tbody>

    </table>

</div>

</>

    )

}


export default Tabela;