package models.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import models.Manutencao;

public class ManutencaoDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String path = "./dados/manutencoes.csv";

	public ArrayList<Manutencao> ler() {
		ArrayList<Manutencao> linhas = new ArrayList<>();
		Manutencao manutencao;
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while(linha != null) {
				manutencao = new Manutencao(linha);
				linhas.add(manutencao);
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
	
	public void escrever(ArrayList<Manutencao> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Manutencao m : linhas) {
				bw.write(m.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}
