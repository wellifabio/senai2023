package domains;

import org.json.JSONException;
import org.json.JSONObject;

public class Entregador {
	
	//Atributos	
	private int idEntregador;
	private String nomeCompleto;
	private String veiculo;
	
	//Construtores	
	public Entregador() {
	}
	
	public Entregador(String idEntregador) {
		this.idEntregador = Integer.valueOf(idEntregador);
	}
	
	public Entregador(int idEntregador, String nomeCompleto, String veiculo) {
		this.idEntregador = idEntregador;
		this.nomeCompleto = nomeCompleto;
		this.veiculo = veiculo;
	}
	
	public Entregador(String idEntregador, String nomeCompleto, String veiculo) {
		this.idEntregador = Integer.valueOf(idEntregador);
		this.nomeCompleto = nomeCompleto;
		this.veiculo = veiculo;
	}
	
	//Getters && Setters
	public int getIdEntregador() {
		return idEntregador;
	}
	public void setIdEntregador(int idEntregador) {
		this.idEntregador = idEntregador;
	}
	public String getNomeCompleto() {
		return nomeCompleto;
	}
	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}
	public String getVeiculo() {
		return veiculo;
	}
	public void setVeiculo(String veiculo) {
		this.veiculo = veiculo;
	}

	//Sa�das
	@Override
	public String toString() {
		return idEntregador + "\t" + nomeCompleto + "\t" + veiculo + "\n";
	}
	
	public JSONObject toJSON() {
		JSONObject json = new JSONObject();
		try {
			json.put("id_entregador", this.idEntregador);
			json.put("nome_completo", this.nomeCompleto);
			json.put("veiculo", this.veiculo);
		} catch (JSONException e) {
			System.out.println("Erro na conversão JSON " + e);
		}		
		return json;
	}
		
}
