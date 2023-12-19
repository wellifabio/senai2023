package controllers;

import java.util.ArrayList;

import models.Manutencao;
import models.dao.ManutencaoDAO;

public class ManutencaoProcess {

	public static ArrayList<Manutencao> manutencoes = new ArrayList<>();
	private static ManutencaoDAO sd = new ManutencaoDAO();
	
	public static void abrir() {
		manutencoes = sd.ler();
		if(manutencoes.size() == 0) {
			manutencoes.add(new Manutencao("1", "20/05/2022", "Máquina Injetora 23", "100", "2,5"));
			manutencoes.add(new Manutencao("2", "20/05/2022", "Esteira principal", "150", "5"));
			manutencoes.add(new Manutencao("3", "20/05/2022", "Esteira secundária", "150", "3,5"));
			manutencoes.add(new Manutencao("4", "21/05/2022", "Braço Robótico", "200", "2,5"));
			manutencoes.add(new Manutencao("5", "21/05/2022", "Máquina Injetora 10", "100", "1"));
			manutencoes.add(new Manutencao("6", "21/05/2022", "Máquina Injetora 13", "100", "5,5"));
		}
	}
	
	public static void salvar() {
		sd.escrever(manutencoes);
	}
	
}
