package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import domains.Cliente;

public class ClienteDAO {

	// Na classe DAO criamos o CRUD ligando a linguagem BackEnd "Java" com
	// O Banco de dados SGBD na linguagem DML(INSERT,SELECT,UPDATE,DELETE) - SQL

	private Connection con;
	private PreparedStatement ps;
	private ResultSet rs;
	private ArrayList<Cliente> clientes;
	private Cliente cliente;

	// Listar Todos
	public ArrayList<Cliente> readAll() throws SQLException {
		clientes = new ArrayList<>();
		String query = "select * from clientes;";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(query);
		rs = ps.executeQuery();
		while (rs.next()) {
			cliente = new Cliente();
			cliente.setIdCliente(rs.getInt("id_cliente"));
			cliente.setCpf(rs.getString("cpf"));
			cliente.setNomeCompleto(rs.getString("nome_completo"));
			cliente.setEndereco(rs.getString("endereco"));
			cliente.setTelefone(rs.getString("telefone"));
			clientes.add(cliente);
		}
		con.close();
		return clientes;
	}

	public int create(Cliente cliente) throws SQLException {
		String sql = "insert into clientes(cpf,nome_completo,endereco,telefone) value (?,?,?,?);";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(sql);
		// Verifica se o cpf não possui comprimento zero
		if (cliente.getCpf().length() == 0)
			ps.setString(1, null);
		else
			ps.setString(1, cliente.getCpf());
		ps.setString(2, cliente.getNomeCompleto());
		ps.setString(3, cliente.getEndereco());
		ps.setString(4, cliente.getTelefone());
		if (ps.executeUpdate() > 0) {
			rs = ps.getGeneratedKeys();
			rs.next();
			con.close();
			return rs.getInt(1);
		} else {
			con.close();
			return 0;
		}
	}

	public int update(Cliente cliente) throws SQLException {
		String sql = "update clientes set cpf = ?, nome_completo = ?, endereco = ?, telefone = ? where id_cliente = ?;";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(sql);
		// Verifica se o cpf não possui comprimento zero
		if (cliente.getCpf().length() == 0)
			ps.setString(1, null);
		else
			ps.setString(1, cliente.getCpf());
		ps.setString(2, cliente.getNomeCompleto());
		ps.setString(3, cliente.getEndereco());
		ps.setString(4, cliente.getTelefone());
		ps.setInt(5, cliente.getIdCliente());
		return ps.executeUpdate();
	}

	public boolean delete(String id) throws SQLException {
		String sql = "delete from clientes where id_cliente = ?;";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(sql);
		ps.setInt(1, Integer.valueOf(id));
		if (ps.executeUpdate() > 0) {
			con.close();
			return true;
		} else {
			con.close();
			return false;
		}
	}

}
