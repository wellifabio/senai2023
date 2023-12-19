package controllers;

import java.sql.SQLException;
import java.util.ArrayList;

import org.json.JSONException;
import org.json.JSONObject;

import dao.ClienteDAO;
import domains.Cliente;

public class ClienteProcess {

	//Na classe processtratamos as "Listas" 
	//E as conversões de tiposJSON para JAVA Model
	
	public static ClienteDAO cd;
	public static ArrayList<Cliente> clientes;
	public static Cliente cliente;
	private static JSONObject jo;

	public static void carregarTodos() throws SQLException {
		cd = new ClienteDAO();
		clientes = cd.readAll();
	}

	public static int create(String body) throws SQLException {
		cd = new ClienteDAO();
		try {
			jo = new JSONObject(body);
			cliente = new Cliente();
			//Verifica se possui CPF E se não é Nulo
			if (jo.has("cpf") && !jo.isNull("cpf"))
				cliente.setCpf(jo.getString("cpf"));
			else //Caso seja nulo configura o modelo com comprimenro zero ""
				cliente.setCpf("");
			cliente.setNomeCompleto(jo.getString("nome_completo"));
			cliente.setEndereco(jo.getString("endereco"));
			cliente.setTelefone(jo.getString("telefone"));
		} catch (JSONException e) {
			System.out.println("Erro ao receber JSON:" + e);
		}
		return cd.create(cliente);
	}

	public static boolean update(String body) throws SQLException {
		cd = new ClienteDAO();
		try {
			jo = new JSONObject(body);
			cliente = new Cliente();
			cliente.setIdCliente(jo.getInt("id_cliente"));
			//Verifica se possui CPF E se não é Nulo
			if (jo.has("cpf") && !jo.isNull("cpf"))
				cliente.setCpf(jo.getString("cpf"));
			else //Caso seja nulo configura o modelo com comprimenro zero ""
				cliente.setCpf("");
			cliente.setNomeCompleto(jo.getString("nome_completo"));
			cliente.setEndereco(jo.getString("endereco"));
			cliente.setTelefone(jo.getString("telefone"));
		} catch (JSONException e) {
			System.out.println("Erro ao receber JSON:" + e);
		}
		return cd.update(cliente) > 0;
	}
	
	public static boolean delete(String id) throws SQLException {
		cd = new ClienteDAO();
		return cd.delete(id);
	}
}
