import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ObservadorDeRota() {
  const location = useLocation();

  useEffect(() => {
    // 1. Exibe a rota acessada no console
    console.log(`Rota acessada: ${location.pathname}`);

    // 2. Altera o título da aba do navegador
    document.title = `Aplicação | ${location.pathname}`;

    // 3. Rola a visualização de volta ao topo
    window.scrollTo(0, 0);

  }, [location]); // Dependência que dispara o hook

  return null;
}