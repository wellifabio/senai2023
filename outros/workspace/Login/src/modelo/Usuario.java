package modelo;

import java.util.Objects;

public class Usuario {

	// Atributos
	private String email;
	private String senha;

	// Construtores
	public Usuario(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}

	public Usuario(String linha) {
		this.email = linha.split(";")[0];
		this.senha = linha.split(";")[1];
	}

	// M�todos de acesso (Getters && Setters)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public int hashCode() {
		return Objects.hash(email);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		return Objects.equals(email, other.email);
	}

	// Sa�das
	@Override
	public String toString() {
		return email + "\t" + senha;
	}

	public String toCSV() {
		return email + ";" + senha + "\r\n";
	}
}
