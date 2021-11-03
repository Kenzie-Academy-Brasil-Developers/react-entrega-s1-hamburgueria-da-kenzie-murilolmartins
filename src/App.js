import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import CarrinhoCompras from "./components/Carrinho";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milk-Shake",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);
  const [carrinho, setCarrinho] = useState([]);
  const [procura, setProcura] = useState("");
  const [total, setTotal] = useState(0);

  function filtrarProdutos(procura) {
    setFilteredProducts(products.filter((item) => item.category === procura));
  }
  function atualizarTotal(produtosSelecionados) {
    setTotal(
      produtosSelecionados
        .reduce((qtd, produto) => qtd + produto.price, 0)
        .toFixed(2)
    );
  }
  function adicionaCarrinho(id) {
    let adicionar = products.find((produto) => produto.id == id);
    if (!carrinho.includes(adicionar)) {
      setCarrinho([...carrinho, adicionar]);
      atualizarTotal([...carrinho, adicionar]);
    }
  }
  function removerCarrinho(id) {
    let novoCarrinho = carrinho.filter((nuemro, index) => index !== id);
    setCarrinho(novoCarrinho);
    atualizarTotal(novoCarrinho);
  }
  return (
    <div className="container">
      <header className="superior">
        <div className="little_container">
          <p className="nome_pagina">
            Burguer <span className="kenzie"> Kenzie</span>
          </p>
          <form>
            <input
              type="text"
              placeholder="Categoria"
              value={procura}
              onChange={(evt) => setProcura(evt.target.value)}
            />
            <button
              type="button"
              onClick={() => filtrarProdutos(procura)}
              className="botao_pesquisar"
            >
              Pesquisar
            </button>
          </form>
        </div>
      </header>
      <div className="small_container">
        <div className="produtos">
          <MenuContainer
            produtos={filteredProducts}
            adicionaCarrinho={adicionaCarrinho}
          />
        </div>
        <div className="carrinho_compras">
          <CarrinhoCompras
            total={total}
            produtosSelecionados={carrinho}
            removerCarrinho={removerCarrinho}
            setCarrinho={setCarrinho}
            setTotal={setTotal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
