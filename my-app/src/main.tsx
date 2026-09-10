import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import EditarProduto from './routes/EditarProdutos/index.tsx'
import Error from './routes/Error/index.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error />, children: [
      { path: "/", element: <Home />},
      { path: "/produtos", element: <Produtos />},
      { path: "/produtos/:id", element: <EditarProduto />}
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
