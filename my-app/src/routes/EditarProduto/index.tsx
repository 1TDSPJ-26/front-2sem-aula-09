import { useEffect, useState } from "react"
import { useParams } from "react-router"

//criando um tipo ou interface de dados que o companente vai receber
/*interface Produto{
    id: number;
    nome: string;
    preco: number
}*/

type TipoProduto = {
    id: number;
    nome: string;
    preco: number
}


const listaProdutos: TipoProduto[] = [
    { id: 1, nome: "Produto 1", preco: 10.0 },
    { id: 2, nome: "Produto 2", preco: 20.0 },
    { id: 3, nome: "Produto 3", preco: 30.0 },
]

export default function EditarProduto() {

    const {id} = useParams<string>()

    const[produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

    const[clicando, setClicando] = useState<number>(0);

    useEffect(() => {
        const prodEncontrado = listaProdutos.find((i) => i.id === Number(id));
        setProduto(prodEncontrado!);
    },[])

    return (
        <main>
            <section>
                <h2>Editar produtos</h2>
                <p>ID: {id}</p>
                {produto ?(<div>
                    <p>Nome do produto: {produto.nome}</p>
                    <p>Preço do produto: {produto.preco}</p>
                </div>) :
                (<div>
                    <p>Produto não encontrado</p>
                </div>)}
            </section>
        </main>
    )
}