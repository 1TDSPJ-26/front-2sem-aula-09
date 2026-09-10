import { useEffect, useState } from "react";
import { useParams } from "react-router"

// interface Produto{
//     id: number;
//     nome: string;
//     preco: number
// }

type TipoProduto = {
    id: number;
    nome: string;
    preco: number
}


const listaProdutos:TipoProduto[] = [
    { id: 1, nome: "Produto 1", preco: 10.0 },
    { id: 2, nome: "Produto 2", preco: 20.0 },
    { id: 3, nome: "Produto 3", preco: 30.0 },
];

export default function EditarProdutos() {

    const { id } = useParams<string>();

    // const[produto, setProduto] = useState<id: number, nome: string, preco: number>();
    const[produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

    useEffect(() => {
        const prodEncontrado = listaProdutos.find( (p) => p.id === Number(id) );
        setProduto(prodEncontrado!);

    },[]); //executa só uma vez a princípio, mas depende do que colocar nesse array aqui

    return (
        <main>
            <h2>Editar Produtos</h2>
            
            {produto?(
                <div>
                    <p>Nome do Produto: {produto.nome}</p>
                    <p>Preço do Produto: {produto.preco}</p>
                </div>) :
                (<p>Produto não encontrado.</p>)
                }

        </main>
    )
}