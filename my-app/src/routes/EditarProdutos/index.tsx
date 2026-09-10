import { useEffect, useState } from "react";
import { useParams } from "react-router";

// Criando uma interface para o tipo de dado que o componente vai receber
// interface Produto {
//     id: number;
//     nome: string;
//     preco: number;
// }

//Criando um tipo de dados para o componente
type TipoProduto = {
    id: number;
    nome: string;
    preco: number;
};

const listaProdutos: TipoProduto[] = [
    { id: 1, nome: "Produto 1", preco: 10.0 },
    { id: 2, nome: "Produto 2", preco: 20.0 },
    { id: 3, nome: "Produto 3", preco: 30.0 },
];


export default function EditarProdutos() {

  const { id } = useParams<string>();

  const[produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

  // const [clicando, setClicando] = useState<number>(0);

  // useEffect(() => {
  //   console.log("TESTE"); // Só executa quando carrega o componente
  // },[]);

  useEffect(() => {
    const prodEncontrado = listaProdutos.find((p) => p.id === Number(id));
     setProduto(prodEncontrado!);
  },[]);


  return (
    <main>
        <h2>
            Editar Produto
        </h2>
        {produto ? (<div>
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
        </div>) : (<p>Produto não encontrado</p>)}

        <div>
          {/* <p>Valor do state: {clicando}</p>
          <button onClick={() => setClicando(clicando + 1)}>Clicou {clicando} vezes
          </button> */}
        </div>

        
    </main>
  )
}
