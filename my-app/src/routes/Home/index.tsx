export default function Home() {
    //Processo de Destructuring
  const estojo = {
    lapis    : "preto",
    caneta   : "azul",
    borracha : "branca"
  }
  //Quando vamos uilizar os membros do objetos, sempre chamamos o objeto.atributo
  console.log(estojo.lapis);
  console.log(estojo.caneta);
  //Aplicando o destructuring, podemos utilizar os atributos como se fossem variáveis.
  const {lapis, caneta} = estojo;

  //Destructuring um array
  const jogos = ["Sonic","Mario","Zelda"];
  //Quando vamos uilizar os membros do array, sempre chamamos o array[0]
  console.log(jogos[1]);
  console.log(jogos[0]);
  //Aplicando o destructuring, podemos utilizar os itens separadamente em variáveis criadas de qualquer nome, em qualquer ordem!!!
  const [sonic,mario] = jogos;

  return (
    <main>
      <h2>Home</h2>
      <div>
        <h3>Estojo</h3>
        <p>{lapis}</p>
        <p>{caneta}</p>
      </div>
      <div>
        <h3>Jogos</h3>
        <p>{sonic}</p>
        <p>{mario}</p>
      </div>
    </main>

)}
