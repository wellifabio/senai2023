package servlet;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import model.Ip;

@WebFilter("/*")
public class ExemploFiltro implements Filter {

	/**
	 * Exemplo de filtros em requisições HTTP
	 */

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {

		// lista de IPs liberados
		List<String> lista = new ArrayList<String>();
		lista.add("172.16.0.1");
		lista.add("172.16.0.88");
		
		// data atual
		LocalDateTime hoje = LocalDateTime.now();

		// formatar a data para o padrão pt-br
		DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm:ss");

		// objeto ip
		Ip ip = new Ip();
		ip.setIpLocal(req.getLocalAddr());
		ip.setIpRemoto(req.getRemoteAddr());

		req.setAttribute("dataHora", hoje.format(formatador));
		String mensagem = "Acesso negado";

		// se IP local for igual ao IP da aplicação
		if (req.getLocalAddr().equals(req.getRemoteAddr())) {
			mensagem = "Bem vindo ao sistema";
			req.setAttribute("IP", ip);
		} else {
			//Percorre a lista de Ips
			for(String l: lista) {
				// se o ip local for o mesmo que está na lista autoriza
				if(req.getRemoteAddr().equals(l)) {
					mensagem = "Bem vindo ao sistema";
					req.setAttribute("IP", ip);
				}
			}
		}
		// até aqui está na requisição
		chain.doFilter(req, resp);
		
		// deste ponto para baixo está na resposta
		req.setAttribute("mensagem", mensagem);
		
		RequestDispatcher dispatcher = req.getRequestDispatcher("status.jsp");
		dispatcher.forward(req, resp);

	}

}
