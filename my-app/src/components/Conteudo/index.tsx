import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {

  let nomeComum:string | null = "Alê";
  function alterNomeComum(){
    nomeComum = prompt("Digite o novo nome!");
    console.log("Nome alterado : ", nomeComum);
  }

  const [nomeState, setNomeState] = useState<string | null>("Juquinha");
  function alteraNomeState(){
    const nome: string | null = prompt("Digite o novo nome!");
    setNomeState( (valorAnterior)=> valorAnterior = nome );
    console.log("Nome alterado : ", nomeState);
  }


  return (
    <main>
      <div>
        <p>Nome Comum : {nomeComum}</p>
        <button onClick={alterNomeComum}>Nome Alterado = {nomeComum}</button>
      </div>
      <div>
        <p>Nome State : {nomeState}</p>
        <button onClick={alteraNomeState}>Nome Alterado = {nomeState}</button>
      </div>
        <section>
            <h2>Conteúdo</h2>
            <figure>
              <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" />
              <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
        </section>
         <section>
            <h2>Imagem Interna</h2>
            <figure>
              <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" />
              <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
        </section>
         <section>
            <h2>Imagem Estática</h2>
            <figure>
              <img src="/quadrado-b.png" alt="Imagem ilustrativa do conteúdo" />
              <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
        </section>
    </main>
  )
}