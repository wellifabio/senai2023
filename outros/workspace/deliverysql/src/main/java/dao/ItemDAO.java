package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import domains.Item;
import domains.Pedido;
import domains.Produto;

public class ItemDAO {
	
	private Connection con;
	private PreparedStatement ps;
	private ArrayList<Item> itens;
	private Item item;
	
	public ArrayList<Item> readAll() throws SQLException{
		itens = new ArrayList<>();
		
		//Executa a query no BD
		String query = "select * from itens;";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(query);
		ResultSet rs = ps.executeQuery();
		
		while(rs.next()) {
			item = new Item();
			item.setPedido(new Pedido(rs.getString("id_pedido")));
			item.setProduto(new Produto(rs.getString("id_produto")));
			item.setQuantidade(rs.getInt("quantidade"));
			itens.add(item);
		}
		
		con.close();
		return itens;
	}
	
}
