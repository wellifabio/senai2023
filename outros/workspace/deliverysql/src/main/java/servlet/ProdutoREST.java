package servlet;

import java.io.IOException;
import java.sql.SQLException;

import org.json.JSONArray;

import controllers.ProdutoProcess;
import domains.Produto;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/produtos")
public class ProdutoREST extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		JSONArray ja = new JSONArray();
		try {
			ProdutoProcess.carregarDados();
			for(Produto p: ProdutoProcess.produtos) {
				ja.put(p.toJSON());
			}
			resp.getWriter().print(ja);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
