import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import EditarProdutos from './routes/Produtos/index.tsx'
import Produtos from "./routes/Produtos/index.tsx"
import Error from "./routes/Error/index.tsx"
import Home from './routes/Home/index.tsx'

const router = createBrowserRouter([
  {path:'/', element: <App/>, errorElement: <Error/>, children:[
    {path: '/', element:<Home/>},
    {path: '/produtos', element: <Produtos/>},
    {path: 'editar-produtos', element:<EditarProdutos/>}
  ]}
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
