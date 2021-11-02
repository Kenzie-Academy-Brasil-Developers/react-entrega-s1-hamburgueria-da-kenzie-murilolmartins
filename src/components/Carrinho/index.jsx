import "./style.css";
export default function CarrinhoCompras({
  produtosSelecionados,
  total,
  removerCarrinho,
  setCarrinho,
  setTotal,
}) {
  return (
    <>
      <header className="cabecalho_carrinho">
        <p className="titulo_carrinho">Carrinho de compras</p>
      </header>
      <div className="carrinho">
        {produtosSelecionados.length > 0 ? (
          produtosSelecionados.map((produto, index) => (
            <>
              <div className="card_produto">
                <img
                  src={produto.img}
                  alt={produto.name}
                  className="carrinho_img"
                />
                <div>
                  <p className="carrinho_nome">{produto.name}</p>
                  <span className="carrinho_categoria">{produto.category}</span>
                </div>
                <span
                  id={index}
                  onClick={() => removerCarrinho(index)}
                  className="remover"
                >
                  Remover
                </span>
              </div>
            </>
          ))
        ) : (
          <div className="carrinho_vazio">
            <p className="frase_sacola">Sua sacola esta vazia</p>
            <span className="frase_sacola2">Adicione Itens</span>
          </div>
        )}
        {produtosSelecionados.length > 0 && (
          <div className="box_preco">
            <p className="mensagem_preco">
              Total <span>R${total}</span>
            </p>
            <button
              className="esvaziar"
              onClick={() => {
                setCarrinho([]);
                setTotal(0);
              }}
            >
              Esvaziar Carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}
