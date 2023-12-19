package domains;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.JSONException;
import org.json.JSONObject;

public class Pedido {

	// Atributos do modelo
	private int idPedido;
	private Cliente cliente;
	private Entregador entregador;
	private Date data;
	private Date horaPedido;
	private Date horaEntrega;
	private Date horaFim;

	// Atributos auxiliares (Formatação)
	private SimpleDateFormat d = new SimpleDateFormat("yyyy-MM-dd");
	private SimpleDateFormat h = new SimpleDateFormat("hh:mm");

	public Pedido() {
	}

	public Pedido(String idPedido) {
		this.idPedido = Integer.valueOf(idPedido);
	}

	public Pedido(int idPedido, Cliente cliente, Entregador entregador, Date data, Date horaPedido, Date horaEntrega,
			Date horaFim) {
		this.idPedido = idPedido;
		this.cliente = cliente;
		this.entregador = entregador;
		this.data = data;
		this.horaPedido = horaPedido;
		this.horaEntrega = horaEntrega;
		this.horaFim = horaFim;
	}

	public Pedido(String idPedido, String idCliente, String idEntregador, String data, String horaPedido,
			String horaEntrega, String horaFim) {
		this.idPedido = Integer.valueOf(idPedido);
		this.cliente = new Cliente(idCliente);
		this.entregador = new Entregador(idEntregador);
		try {
			this.data = d.parse(data);
			this.horaPedido = h.parse(horaPedido);
			this.horaEntrega = h.parse(horaEntrega);
			this.horaFim = h.parse(horaFim);
		} catch (ParseException e) {
			System.out.println("Erro converter datas/horas: " + e);
		}
	}

	public int getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(int idPedido) {
		this.idPedido = idPedido;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Entregador getEntregador() {
		return entregador;
	}

	public void setEntregador(Entregador entregador) {
		this.entregador = entregador;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Date getHoraPedido() {
		return horaPedido;
	}

	public void setHoraPedido(Date horaPedido) {
		this.horaPedido = horaPedido;
	}

	public Date getHoraEntrega() {
		return horaEntrega;
	}

	public void setHoraEntrega(Date horaEntrega) {
		this.horaEntrega = horaEntrega;
	}

	public Date getHoraFim() {
		return horaFim;
	}

	public void setHoraFim(Date horaFim) {
		this.horaFim = horaFim;
	}

	@Override
	public String toString() {
		return idPedido + "\t" + cliente.getIdCliente() + "\t" + entregador.getIdEntregador() + "\t" + d.format(data)
				+ "\t" + h.format(horaPedido) + "\t" + h.format(horaEntrega) + "\t" + h.format(horaFim) + "\n";
	}

	public JSONObject toJSON() {
		JSONObject json = new JSONObject();
		try {
			json.put("id_pedido", idPedido);
			if (cliente != null)
				json.put("cliente", cliente.toJSON());
			if (entregador != null)
				json.put("entregador", entregador.toJSON());
			if (data != null)
				json.put("data", d.format(data));
			if (horaPedido != null)
				json.put("hora_pedido", h.format(horaPedido));
			if (horaEntrega != null)
				json.put("hora_entrega", h.format(horaEntrega));
			if (horaFim != null)
				json.put("hora_fim", h.format(horaFim));
		} catch (JSONException e) {
			System.out.println("Erro ao converter JSON: " + e);
		}
		return json;
	}
}
