package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import domains.Entregador;

public class EntregadorDAO {

	//Atributos Básicos
	private Connection con;
	private PreparedStatement ps;
	private ArrayList<Entregador> entregadores;
	private Entregador entregador;

	//Listar todos
	public ArrayList<Entregador> readAll() throws SQLException {
		entregadores = new ArrayList<>();
		String query = "select * from entregadores";
		con = ConnectionDB.getConnection(); // Obtem conexão
		ps = con.prepareStatement(query); // Prepara a execução da Query
		ResultSet rs = ps.executeQuery(); // Executa e retorna na ResultSet
		while(rs.next()) {
			entregador = new Entregador();
			entregador.setIdEntregador(rs.getInt("id_entregador"));
			entregador.setNomeCompleto(rs.getString("nome_completo"));
			entregador.setVeiculo(rs.getString("veiculo"));
			entregadores.add(entregador);
		}
		con.close(); //Fechar a conexão
		return entregadores;
	}
}
