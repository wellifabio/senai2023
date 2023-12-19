package domains;

import org.json.JSONException;
import org.json.JSONObject;

public class Item {
	
	private Pedido pedido;
	private Produto produto;
	private int quantidade;
	
	public Item() {
	}
	
	public Item(Pedido pedido,Produto produto,int quantidade) {
		this.pedido = pedido;
		this.produto =produto;
		this.quantidade = quantidade;
	}
	
	public Item(String idPedido, String idProduto, String quantidade) {
		this.pedido = new Pedido(idPedido);
		this.produto = new Produto(idProduto);
		this.quantidade = Integer.valueOf(quantidade);
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	@Override
	public String toString() {
		return pedido.getIdPedido() + "\t" + produto.getIdProduto() + "\t" + quantidade + "\n";
	}
	
	public JSONObject toJSON() {
		JSONObject json = new JSONObject();
		try {
			json.put("pedido", pedido.toJSON());
			json.put("produto", produto.toJSON());
			json.put("quantidade", quantidade);
		} catch (JSONException e) {
			System.out.println("Erro ao converter JSON: " + e);
		}
		return json;
	}
}
