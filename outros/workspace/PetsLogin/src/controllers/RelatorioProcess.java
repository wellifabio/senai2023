package controllers;

import javax.swing.JOptionPane;

import domains.dao.RelatorioDAO;

public class RelatorioProcess {
	private static RelatorioDAO rd = new RelatorioDAO();

	public static void salvar(String dados, String arquivo) {
		if (rd.saveReport(dados, arquivo)) {
			JOptionPane.showMessageDialog(null, "Relatório salvo com sucesso.");
		} else {
			JOptionPane.showMessageDialog(null, "Erro ao salvar relatório.");
		}
	}
}
