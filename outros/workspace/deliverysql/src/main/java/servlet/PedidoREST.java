package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import org.json.JSONArray;

import controllers.PedidoProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/pedidos")
public class PedidoREST extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();		
		try {
			PedidoProcess.carregarDados();
			JSONArray ja = new JSONArray();
			//For Each com Lambda by Carlos Roberto Junior
			PedidoProcess.pedidos.forEach(p -> ja.put(p.toJSON()));
			//Resposta
			out.print(ja);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
