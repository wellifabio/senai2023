package domains.dao;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class RelatorioDAO {

	private BufferedWriter bw;

	public boolean saveReport(String dados, String arquivo) {
		boolean retorno = false;
		try {
			bw = new BufferedWriter(new FileWriter(arquivo));
			bw.write(dados);
			bw.close();
		} catch (IOException e) {
			System.out.println("Erro: " + e);
		} finally {
			retorno = true;
		}
		return retorno;
	}
}