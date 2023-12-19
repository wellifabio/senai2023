package controllers;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.ItemDAO;
import domains.Item;

public class ItemProcess {

	public static ItemDAO id;
	public static ArrayList<Item> itens;
	
	public static void carregarDados() throws SQLException {
		id = new ItemDAO();
		itens = id.readAll();
	}
}
