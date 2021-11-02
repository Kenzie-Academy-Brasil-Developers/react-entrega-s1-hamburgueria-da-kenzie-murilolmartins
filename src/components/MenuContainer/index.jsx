import "./style.css";
export default function MenuContainer({ produtos, adicionaCarrinho }) {
  return (
    <>
      {produtos.map((produto) => (
        <div className="item">
          <div className="box_img">
            <img alt={produto.name} src={produto.img} className="item_img" />
          </div>
          <div className="box_descritivo">
            <p className="item_nome">{produto.name}</p>
            <p className="item_categoria">{produto.category}</p>
            <p className="item_preco">R${produto.price.toFixed(2)}</p>
          </div>
          <button
            className="item_botao"
            id={produto.id}
            onClick={(evt) => adicionaCarrinho(evt.target.id)}
          >
            Adicionar
          </button>
        </div>
      ))}
    </>
  );
}
