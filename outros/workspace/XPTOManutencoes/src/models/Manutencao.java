package models;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Currency;
import java.util.Date;
import java.util.Locale;
import java.util.Objects;

public class Manutencao {

	//Atributos do modelo
	private int id;
	private Date data;
	private String equipamento;
	private double custoHora;
	private double tempoGasto;

	//Atributos para formatação de Datas e Números Decimais
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	//Construtores
	public Manutencao(String id, String data, String equipamento, String custoHora, String tempoGasto) {
		df.setCurrency(Currency.getInstance(BRASIL));
		try {
			this.id = Integer.parseInt(id);
			this.data = sdf.parse(data);
			this.equipamento = equipamento;
			this.custoHora = Double.parseDouble(df.parse(custoHora).toString());
			this.tempoGasto = Double.parseDouble(df.parse(tempoGasto).toString());
		} catch (ParseException e) {
			System.out.println(e);
		}
	}
	
	public Manutencao(String id, String equipamento, String custoHora, String tempoGasto) {
		df.setCurrency(Currency.getInstance(BRASIL));
		try {
			this.id = Integer.parseInt(id);
			this.data = new Date();
			this.equipamento = equipamento;
			this.custoHora = Double.parseDouble(df.parse(custoHora).toString());
			this.tempoGasto = Double.parseDouble(df.parse(tempoGasto).toString());
		} catch (ParseException e) {
			System.out.println(e);
		}
	}

	public Manutencao(String linhaArquivo) {
		df.setCurrency(Currency.getInstance(BRASIL));
		try {
			this.id = Integer.parseInt(linhaArquivo.split(";")[0]);
			this.data = sdf.parse(linhaArquivo.split(";")[1]);
			this.equipamento = linhaArquivo.split(";")[2];
			this.custoHora = Double.parseDouble(df.parse(linhaArquivo.split(";")[3]).toString());
			this.tempoGasto = Double.parseDouble(df.parse(linhaArquivo.split(";")[4]).toString());
		} catch (ParseException e) {
			System.out.println(e);
		}
	}

	public Manutencao(int id) {
		this.id = id;
	}

	//Getters && Setters OBS: Getters com datas e decimais formatados
	public int getId() {
		return id;
	}

	public String getId(String s) {
		return String.format("%d", id);
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getData() {
		return data;
	}

	public String getData(String s) {
		return sdf.format(data);
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getEquipamento() {
		return equipamento;
	}

	public void setEquipamento(String equipamento) {
		this.equipamento = equipamento;
	}

	public double getCustoHora() {
		return custoHora;
	}

	public String getCustoHora(String s) {
		return df.format(custoHora);
	}

	public void setCustoHora(double custoHora) {
		this.custoHora = custoHora;
	}

	public double getTempoGasto() {
		return tempoGasto;
	}

	public String getTempoGasto(String s) {
		return df.format(tempoGasto);
	}

	public void setTempoGasto(double tempoGasto) {
		this.tempoGasto = tempoGasto;
	}

	//Cálculo do total em decimal formatado
	public String getTotal() {
		return df.format(custoHora * tempoGasto);
	}

	//Definindo o id como Chave
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Manutencao other = (Manutencao) obj;
		return id == other.id;
	}

	//Métodos de Saída para tela simples, arquivo e vetor/tabela
	@Override
	public String toString() {
		return getId("") + "\t" + getData("") + "\t" + equipamento + "\t" + getCustoHora("") + "\t" + getTempoGasto("")
				+ "\t" + getTotal() + "\n";
	}

	public String toCSV() {
		return getId("") + ";" + getData("") + ";" + equipamento + ";" + getCustoHora("") + ";" + getTempoGasto("")
				+ "\r\n";
	}

	public String[] toVetor() {
		return new String[] { getId(""), getData(""), equipamento, getCustoHora(""), getTempoGasto(""), getTotal() };
	}

}
