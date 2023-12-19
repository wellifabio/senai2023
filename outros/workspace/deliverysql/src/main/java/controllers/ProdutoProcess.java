package controllers;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.ProdutoDAO;
import domains.Produto;

public class ProdutoProcess {

	public static ProdutoDAO pd;
	public static ArrayList<Produto> produtos;
		
	public static void carregarDados() throws SQLException {
		pd =  new ProdutoDAO();
		produtos = pd.readAll();
	}
	
}
