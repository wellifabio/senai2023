package controllers;

import java.util.ArrayList;

import domains.Servico;
import domains.dao.ServicoDAO;

public class ServicoProcess {

	public static ArrayList<Servico> servicos = new ArrayList<>();
	private static ServicoDAO sd = new ServicoDAO();
	
	public static void abrir() {
		servicos = sd.ler();
		if(servicos.size() == 0) {
			servicos.add(new Servico("1", "admin", "1", "Banho", "02/02/2022", "10:00", "29,90"));
		}
	}
	
	public static void salvar() {
		sd.escrever(servicos);
	}
}
