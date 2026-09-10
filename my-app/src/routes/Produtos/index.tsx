// 1. Ferramentas do React
import { useState, useEffect } from 'react';

// 2. O molde que criamos
import { type TipoProduto } from '../../types/types';

// 3. Os dados fictícios
import { listaProdutos } from '../../data/listaProdutos';

export default function Produtos() {
  // Criamos o estado "produtos". 
  // - Ele começa vazio: []
  // - Avisamos ao TypeScript que ele vai guardar uma lista de TipoProduto: <TipoProduto[]>
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);

  // O useEffect vai entrar aqui no Passo 5...
    // Esse efeito roda automaticamente quando a tela é montada
  useEffect(() => {
    // Pegamos a listaProdutos do arquivo e guardamos dentro do useState
    setProdutos(listaProdutos);

    // O array vazio [] no final é o "segredo":
    // Ele diz ao React: "Execute isso APENAS UMA VEZ, quando o componente nascer na tela".
    // Se não colocar esse [], o React entraria em um loop infinito!
  }, []);


  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Painel de Produtos</h1>
      <p>Confira abaixo a lista de itens cadastrados no sistema:</p>

      {/* Tabela com borda e espaçamento para ficar fácil de ler */}
      <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        
        {/* Cabeçalho da Tabela */}
        <thead>
          <tr style={{ backgroundColor: '#2c3e50', color: '#ffffff' }}>
            <th>Foto</th>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Descrição</th>
          </tr>
        </thead>

        {/* Corpo da Tabela com a repetição dos produtos */}
        <tbody>
          {produtos.map((item) => (
            // A propriedade "key" é obrigatória no React quando usamos .map().
            // Ela ajuda o React a saber exatamente qual item é qual através do ID único.
            <tr key={item.id}>
              <td>
                <img 
                  src={item.avatar} 
                  alt={item.nome} 
                  width={60} 
                  height={60} 
                  style={{ objectFit: 'cover', borderRadius: '8px' }} 
                />
              </td>
              <td>{item.id}</td>
              <td><strong>{item.nome}</strong></td>
              {/* toFixed(2) garante que o preço sempre tenha 2 casas decimais (ex: 299.90) */}
              <td>R$ {item.preco.toFixed(2)}</td>
              <td>{item.descricao}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </main>
  );
}