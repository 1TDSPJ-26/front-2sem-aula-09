import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import Error from './routes/Error'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar-produtos', element: <EditarProdutos /> }
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
