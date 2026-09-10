import { Outlet } from 'react-router'
import ObservadorDeRota from './components/ObservadorDeRota';
import Cabecalho from './components/Cabecalho/index.tsx'
import Rodape from './components/Rodape/index.tsx'
import Menu from './components/Menu/index.tsx'
import Conteudo from './components/Conteudo/index.tsx'

export default function App() {
  return (
    <>
      <ObservadorDeRota />
      <Cabecalho/>
      <Menu />
      <Conteudo />
      <Outlet />
      <Rodape />
    </>
  )
}