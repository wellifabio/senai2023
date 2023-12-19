package controllers;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.EntregadorDAO;
import domains.Entregador;

public class EntregadorProcess {
	
	public static EntregadorDAO ed;
	public static ArrayList<Entregador> entregadores;
	
	public static void carregarDados() throws SQLException {
		ed = new EntregadorDAO();
		entregadores = ed.readAll();
	}
}
