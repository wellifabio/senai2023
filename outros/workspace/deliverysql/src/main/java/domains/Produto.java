package domains;

import org.json.JSONException;
import org.json.JSONObject;

public class Produto {

	private int idProduto;
	private String nome;
	private double preco;

	public Produto() {
	}
	
	public Produto(String idProduto) {
		this.idProduto = Integer.valueOf(idProduto);
	}

	public Produto(int idProduto, String nome, double preco) {
		this.idProduto = idProduto;
		this.nome = nome;
		this.preco = preco;
	}

	public Produto(String idProduto, String nome, String preco) {
		this.idProduto = Integer.valueOf(idProduto);
		this.nome = nome;
		this.preco = Double.valueOf(preco);
	}

	public int getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(int idProduto) {
		this.idProduto = idProduto;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	@Override
	public String toString() {
		return idProduto + "\t" + nome + "\t" + preco + "\n";
	}

	public JSONObject toJSON() {
		JSONObject json = new JSONObject();
		try {
			json.put("id_produto", idProduto);
			json.put("nome", nome);
			json.put("preco", preco);
		} catch (JSONException e) {
			System.out.println("Erro ao converter JSON: " + e);
		}
		return json;
	}
	
}
