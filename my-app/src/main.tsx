import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "../routes/Home";
import Produtos from "../routes/Produtos";
import Editarprodutos from "../routes/Editarprodutos";
import Error from "../routes/Error";

const router = createBrowserRouter([
	{path: '/' , element: <App />, errorElement: <Error />, children: [
		{path: '/', element: <Home />},
		{path: '/produtos', element: <Produtos />},
		{path: '/editarprodutos', element: <Editarprodutos />},
	]}
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
