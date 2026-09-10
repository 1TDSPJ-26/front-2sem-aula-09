// src/data/listaProdutos.ts
import { type TipoProduto } from '../types/types';

// Usamos TipoProduto[] com colchetes para avisar que é uma LISTA (Array) desse molde.
export const listaProdutos: TipoProduto[] = [
  {
    id: 1,
    nome: "Headset Gamer Sem Fio",
    preco: 299.90,
    descricao: "Áudio espacial 7.1, espumas confortáveis e microfone retrátil.",
    avatar: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    nome: "Teclado Mecânico RGB",
    preco: 249.00,
    descricao: "Switches mecânicos rápidos e iluminação colorida ajustável.",
    avatar: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    nome: "Smartwatch Fitness",
    preco: 189.50,
    descricao: "Mede batimentos cardíacos, conta passos e mostra notificações.",
    avatar: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    nome: "Câmera Instantânea",
    preco: 420.00,
    descricao: "Tira fotos analógicas e imprime na hora para colar no caderno.",
    avatar: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=120&auto=format&fit=crop&q=80"
  }
];