package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import domains.Produto;

public class ProdutoDAO {

	private Connection con;
	private PreparedStatement ps;
	private ArrayList<Produto> produtos;
	private Produto produto;

	public ArrayList<Produto> readAll() throws SQLException{
		//Inica a lista
		produtos = new ArrayList<>();
		
		//Executa a query no BD
		String query = "select * from produtos;";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(query);
		ResultSet rs = ps.executeQuery();
		
		//Percorre o ResultSet para preencher a lista
		while(rs.next()) {
			produto = new Produto();
			produto.setIdProduto(rs.getInt("id_produto"));
			produto.setNome(rs.getString("nome"));
			produto.setPreco(rs.getDouble("preco"));
			produtos.add(produto);
		}
		
		//Fecha a conexão com o BD
		con.close();
		
		//Retorna a lista completa
		return produtos;
	}
}
