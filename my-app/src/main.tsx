import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import App from './App.tsx'
import EditarProduto from './routes/EditarProduto/index.tsx'
import ProdutoDetalhe from './routes/ProdutoDetalhe/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import Lampada from './routes/Lampada/index.tsx'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/produtos',
        element: <Produtos />
      },
      {
        path: '/produto/:id',
        element: <ProdutoDetalhe />
      },
      {
        path: '/editar-produto/:id',
        element: <EditarProduto />
      },
      {
        path: '/lampada',
        element: <Lampada />
      }
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
