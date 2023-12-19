package servlet;

import java.io.IOException;
import java.sql.SQLException;

import org.json.JSONArray;

import controllers.EntregadorProcess;
import domains.Entregador;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/entregadores")
public class EntregadorREST extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			EntregadorProcess.carregarDados();
			JSONArray ja = new JSONArray();
			for(Entregador e: EntregadorProcess.entregadores) {
				ja.put(e.toJSON());
			}
			resp.getWriter().print(ja);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
