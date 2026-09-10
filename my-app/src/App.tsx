import { Outlet } from "react-router/internal/react-server-client";
import Cabecalho from "./components/cabeçalho";
import Rodape from "./components/rodape";

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}