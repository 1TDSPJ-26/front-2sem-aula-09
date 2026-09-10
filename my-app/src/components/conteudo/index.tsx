import { useState } from "react";

export default function Conteudo() {

    let nomeComum:string | null = "Gysta";
    function alterarNomeComum() {
        nomeComum = prompt("Digite o novo nome comum:");
        console.log(nomeComum);
    }

    const[nomeState, setNomeState] = useState<string | null>("Gysta");
    function alterarNomeState() {
        const nome:string | null = prompt("Digite o novo nome state:");
        setNomeState(nome);
        console.log(nomeState);
    }

    return (
        <main>
            <div>
                <p>Nome comum: {nomeComum}</p>
                <button onClick={alterarNomeComum}>Alterar Nome = {nomeComum}</button>
            </div>
            <div>
                <p>Nome state: {nomeState}</p>
                <button onClick={alterarNomeState}>Alterar Nome = {nomeState}</button>
            </div>
            <section>
                <h2>Conteúdo</h2>
                <p> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
        </main>
    );
}