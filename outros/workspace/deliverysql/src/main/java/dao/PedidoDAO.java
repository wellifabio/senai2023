package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import domains.Cliente;
import domains.Pedido;
import domains.Entregador;

public class PedidoDAO {

	//Atributos de conexão, envio e resultado do BD
	private Connection con; //Conexão
	private PreparedStatement ps; //Envio
	private ResultSet rs; //Resultado
	
	//Atributos do Model Lista e único
	private ArrayList<Pedido> pedidos;
	private Pedido pedido;
	
	//Método para listar todos
	public ArrayList<Pedido> readAll() throws SQLException{
		//Inicia a lista vazia
		pedidos = new ArrayList<>();
		//Criar a query
		String query = "select * from pedidos;";

		//Conectar, executar e retornar os dados
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(query);
		rs = ps.executeQuery();
		//Percorrer o resultado preenchendo a lista Modelo
		while(rs.next()) {
			pedido = new Pedido();
			pedido.setIdPedido(rs.getInt("id_pedido"));
			pedido.setCliente(new Cliente(rs.getString("id_cliente")));
			pedido.setEntregador(new Entregador(rs.getString("id_entregador")));
			pedido.setData(rs.getDate("data"));
			pedido.setHoraPedido(rs.getTime("hora_pedido"));
			pedido.setHoraEntrega(rs.getTime("hora_entrega"));
			pedido.setHoraFim(rs.getTime("hora_fim"));
			pedidos.add(pedido);
		}
		con.close(); //Fechar a conexão
		return pedidos;
	}
	
		
	
}
