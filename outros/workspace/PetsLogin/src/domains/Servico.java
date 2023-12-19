package domains;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Currency;
import java.util.Date;
import java.util.Locale;
import java.util.Objects;

public class Servico {

	private int id;
	private Usuario usuario;
	private Pet pet;
	private String tipo;
	private Date data;
	private Date hora;
	private double valor;

	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	private SimpleDateFormat shf = new SimpleDateFormat("HH:mm");
	
	public Servico(String id, String usuario, String pet, String tipo, String data, String hora, String valor) {
		df.setCurrency(Currency.getInstance(BRASIL));
		try {
			this.id = Integer.parseInt(id);
			this.usuario = new Usuario(usuario, null);
			this.pet = new Pet(Integer.parseInt(pet));
			this.tipo = tipo;
			this.data = sdf.parse(data);
			this.hora = shf.parse(hora);
			this.valor = Double.parseDouble(df.parse(valor).toString());
		} catch (ParseException e) {
			System.out.println(e);
		}
	}

	public Servico(String linha) {
		df.setCurrency(Currency.getInstance(BRASIL));
		try {
			this.id = Integer.parseInt(linha.split(";")[0]);
			this.usuario = new Usuario(linha.split(";")[1], null);
			this.pet = new Pet(Integer.parseInt(linha.split(";")[2]));
			this.tipo = linha.split(";")[3];
			this.data = sdf.parse(linha.split(";")[4]);
			this.hora = shf.parse(linha.split(";")[5]);
			this.valor = Double.parseDouble(df.parse(linha.split(";")[6]).toString());
		} catch (ParseException e) {
			System.out.println(e);
		}
	}

	public Servico(int id) {
		this.id = id;
	}
	
	public int getId() {
		return this.id;
	}

	public String getId(String string) {
		return String.format("%d", id);
	}

	public void setId(int id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Pet getPet() {
		return pet;
	}

	public void setPet(Pet pet) {
		this.pet = pet;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getData(String string) {
		return sdf.format(data);
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getHora(String string) {
		return shf.format(hora);
	}

	public void setHora(Date hora) {
		this.hora = hora;
	}

	public double getValor() {
		return valor;
	}
	public String getValor(String string) {
		return String.format("%.2f", valor);
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

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
		Servico other = (Servico) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return id + "\t" + usuario.getLogin() + "\t" + pet.getId() + "\t" + tipo + "\t" + sdf.format(data) + "\t"
				+ shf.format(hora) + "\t" + String.format("%.2f", valor) + "\n";
	}

	public String toCSV() {
		return id + ";" + usuario.getLogin() + ";" + pet.getId() + ";" + tipo + ";" + sdf.format(data) + ";"
				+ shf.format(hora) + ";" + String.format("%.2f", valor) + "\r\n";
	}

	public String[] toVetor() {
		return new String[] { String.format("%d", id), usuario.getLogin(), String.format("%d", pet.getId()), tipo,
				sdf.format(data), shf.format(hora), String.format("%.2f", valor) };
	}

}
