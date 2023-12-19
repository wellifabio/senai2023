package domains.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import domains.Usuario;

public class UsuarioDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String path = "./data/usuarios.csv";

	public ArrayList<Usuario> ler() {
		ArrayList<Usuario> linhas = new ArrayList<>();
		Usuario usuario;
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while(linha != null) {
				usuario = new Usuario(linha);
				linhas.add(usuario);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		}
		return linhas;
	}
	
	public void escrever(ArrayList<Usuario> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Usuario u : linhas) {
				bw.write(u.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}
