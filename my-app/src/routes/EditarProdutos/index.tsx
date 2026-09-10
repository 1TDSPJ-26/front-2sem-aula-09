import { useEffect, useState } from "react";
import { useParams } from "react-router"

type TipoProduto = {
  id: number;
  nome: string;
  preco: number
}

const listaProdutos:TipoProduto[] = [
    { id: 1, nome: "Produto 1", preco: 10.0 },
    { id: 2, nome: "Produto 2", preco: 20.0 },
    { id: 3, nome: "Produto 3", preco: 30.0 },
    { id: 10, nome: "Produto 10", preco: 50.0 },
];



export default function EditarProdutos() {
  const { id } = useParams<string>();


  const [produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

  useEffect( () => {
     const prodEncontrado = listaProdutos.find( (p)=> p.id === Number(id) );

    setProduto(prodEncontrado!);
  }, [])


 
  return (
    <header>
        <h2>EditarProdutos</h2>
        {produto ?(
          <div>
            <p>Nome  do produto: {produto.nome}</p>
            <p>Preço do produto: {produto.preco}</p>
          </div>) :
          (<p>Produto não encontrado</p>)
          }
    </header>
  )
}