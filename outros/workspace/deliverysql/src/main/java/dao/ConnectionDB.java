package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionDB {

	//Atributos para Conex�o com o Banco de dados
	private static final String DNS = "jdbc:mysql://localhost:3306/delivery";
	private static final String USUARIO = "root";
	private static final String SENHA = "";
	private static Connection con;//Este objeto que efetivamente obtem conexão com o BD
	
	//M�todo que faz a conex�o efetivamente
	public static Connection getConnection() {
		try {
			if(con == null || con.isClosed()) {
				DriverManager.registerDriver(new com.mysql.jdbc.Driver());
				con = DriverManager.getConnection(DNS,USUARIO,SENHA);
			}
			return con;
		} catch (SQLException e) {
			System.out.println("Erro ao conectar ao SGBD: "+e);
			return null;
		}
	}
}
