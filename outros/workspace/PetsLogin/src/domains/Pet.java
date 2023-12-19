package domains;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Currency;
import java.util.Date;
import java.util.Locale;
import java.util.Objects;

public class Pet {

	private int id;
	private String especie;
	private String nomePet;
	private String raca;
	private float peso;
	private Date nascimento;
	private String nomeDono;
	private String telefone;

	private final Locale BRASIL = new Locale("pt", "BR");
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	private DecimalFormat df = new DecimalFormat("#.00");

	// Contrutor só com Id
	public Pet(int id) {
		this.id = id;
	}

	// Construtor completo
	public Pet(int id, String especie, String nomePet, String raca, float peso, String nascimento, String nomeDono,
			String telefone) {
		this.id = id;
		this.especie = especie;
		this.nomePet = nomePet;
		this.raca = raca;
		this.peso = peso;
		try {
			this.nascimento = sdf.parse(nascimento);
		} catch (ParseException e) {
			System.out.println(e);
		}
		this.nomeDono = nomeDono;
		this.telefone = telefone;
	}

	// Construtor para receber dados do arquivo
	public Pet(String linha) {
		df.setCurrency(Currency.getInstance(BRASIL));
		this.id = Integer.parseInt(linha.split(";")[0]);
		this.especie = linha.split(";")[1];
		this.nomePet = linha.split(";")[2];
		this.raca = linha.split(";")[3];
		try {
			this.peso = Float.parseFloat(df.parse(linha.split(";")[4]).toString());
			this.nascimento = sdf.parse(linha.split(";")[5]);
		} catch (ParseException e) {
			System.out.println(e);
		}
		this.nomeDono = linha.split(";")[6];
		this.telefone = linha.split(";")[7];
	}

	// Getters && Setters
	public int getId() {
		return id;
	}

	public String getId(String s) {
		return String.format("%d", id);
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEspecie() {
		return especie;
	}

	public void setEspecie(String especie) {
		this.especie = especie;
	}

	public String getNomePet() {
		return nomePet;
	}

	public void setNomePet(String nomePet) {
		this.nomePet = nomePet;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public float getPeso() {
		return peso;
	}

	public String getPeso(String s) {
		return String.format("%.2f", peso);
	}

	public void setPeso(float peso) {
		this.peso = peso;
	}

	public Date getNascimento() {
		return nascimento;
	}

	public String getNascimento(String s) {
		return sdf.format(nascimento);
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public String getNomeDono() {
		return nomeDono;
	}

	public void setNomeDono(String nomeDono) {
		this.nomeDono = nomeDono;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	@SuppressWarnings("deprecation")
	public int obterIdade() {
		return new Date().getYear() - nascimento.getYear();
	}

	// Define o "id" como campo Chave
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	// Define o "id" como campo Chave
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pet other = (Pet) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return id + "\t" + especie + "\t" + nomePet + "\t" + raca + "\t" + String.format("%.2f", peso) + "\t"
				+ obterIdade() + "\t" + nomeDono + "\t" + telefone + "\n";
	}

	public String toCSV() {
		return id + ";" + especie + ";" + nomePet + ";" + raca + ";" + String.format("%.2f", peso) + ";"
				+ sdf.format(nascimento) + ";" + nomeDono + ";" + telefone + "\r\n";
	}

}
