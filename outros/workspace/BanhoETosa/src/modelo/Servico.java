package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Servico {

	// Atributos básico
	public Pet pet;
	public String nomeFuncionario;
	public String descricao;
	public Date data;
	public Date hora;
	// Atributos para formatar a data
	private SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	private SimpleDateFormat hf = new SimpleDateFormat("hh:mm");

	// Métodos
	// Construtor vazio
	public Servico() {
	}

	// Construtor completo
	public Servico(Pet pet, String nomeFuncionario, String descricao, String data, String hora) throws ParseException {
		this.pet = pet;
		this.nomeFuncionario = nomeFuncionario;
		this.descricao = descricao;
		this.data = df.parse(data);
		this.hora = hf.parse(hora);
	}

	// toString (Concatena todos os atributos em uma só String)
	public String tabularString() {
		return pet.paraString() + "\t" + nomeFuncionario + "\t" + descricao + "\t" + descricao + "\t" + df.format(data)
				+ "\t" + hf.format(hora) + "\t";
	}

}
