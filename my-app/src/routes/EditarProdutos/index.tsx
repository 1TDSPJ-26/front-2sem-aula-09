import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

//Criando uma interface para o tipo de dados que o componente vai receber

//interface Produto {

//    id: number;

//    nome: string;

//    preco: number

//}

//Criando um tipo de dados para o componente

type TipoProduto = {

    id: number;

    nome: string;

    preco: number

}



//Criando um array de produtos

const listaProdutos: TipoProduto[] = [

    { id: 1, nome: "Produto 1", preco: 10.0 },

    { id: 2, nome: "Produto 2", preco: 20.0 },

    { id: 3, nome: "Produto 3", preco: 30.0 },

];

export default function EditarProdutos() {

    const { id } = useParams<string>();

    //const[produto, setProduto] = useState<{ id: number; nome: string; preco: number }>();

    const [produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

    const [clicando, setClicando] = useState<number>(0);

    useEffect(() => {

        console.log("Teste DENTRO DO EFFECT");

    }, []);
    console.log("Teste FORA DO EFFECT");

    return (

        <main>

            <h2>Editar Produtos</h2>

            <p>Id: {id}</p>
            <div>
                <p>Valor do state: {clicando}</p>
                <button onClick={() => setClicando(clicando + 1)}>Clique aqui</button>
            </div>


        </main>

    )

}
