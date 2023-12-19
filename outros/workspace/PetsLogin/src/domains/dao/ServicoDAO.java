package domains.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import domains.Servico;

public class ServicoDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String path = "./data/servicos.csv";

	public ArrayList<Servico> ler() {
		ArrayList<Servico> linhas = new ArrayList<>();
		Servico servico;
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while(linha != null) {
				servico = new Servico(linha);
				linhas.add(servico);
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
	
	public void escrever(ArrayList<Servico> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Servico s : linhas) {
				bw.write(s.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}
