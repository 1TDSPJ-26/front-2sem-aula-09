import { useEffect, useEffectEvent, useState } from "react";
import { useParams } from "react-router";

//Criando uma interface para o tipo de dados que o componente vai receber
//interface Produto{ 
//    id: number;
//    nome: string;
//    preco: number;
//}

//Criando um tipo de dados para o componente
type TipoProduto = { 
    id: number;
    nome: string;
    preco: number;
}

//Criando um arry de produtos
const listaProdutos:TipoProduto[] = [
    { id: 1, nome: "Produto 1", preco: 10.0 },
    { id: 2, nome: "Produto 2", preco: 20.0 },
    { id: 3, nome: "Produto 3", preco: 30.0 },
];

export default function EditarProdutos() {

    const {id} = useParams<string>();

   // const[produtos, setProduto] = useState<{id:number, nome:string, preco:number}>();
    const[produtos, setProduto] = useState<TipoProduto>({} as TipoProduto);

    useEffect (()=> {

        const prodEncontrado = listaProdutos.find( (p)=> p.id === Number(id) );

        setProduto(prodEncontrado!);

    },[])

  return (
    <main>
        <h2>Editar Produtos</h2>
        
        {produtos ?(<div>
            <p>Nome do produto: {produtos.nome}</p>
            <p>Preço do produto: {produtos.preco}</p>
        </div>) :
        (<p>Produto não encontrado</p>)
}
    </main>
  );
}
