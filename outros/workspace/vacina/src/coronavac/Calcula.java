package coronavac;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Calcula {

	//Atributos para entrada e saída através de arquivos de texto
	private static BufferedReader br;
	private static BufferedWriter bw;
	private static String entrada = "./arquivos/entrada.txt";
	private static String saida = "./arquivos/saida.txt";

	//Atributos do exercício
	private static int meses = 0;
	private static int d2 = 0, d1 = 0, d2a = 0, d1a = 0;
	private static String resultado = "";

	//Método principal
	public static void main(String[] args) {

		//Leitura dos dados de entrada
		try {
			br = new BufferedReader(new FileReader(entrada));
			//Lê a primeira linha e verifica quantos mêses serão avaliados
			meses = Integer.parseInt(br.readLine());
			//Laço que percorre cada mês
			for (int i = 0; i < meses; i++) {
				//Função que processa a vacinação efetivamente
				vacinacao(Integer.parseInt(br.readLine()));
			}
			br.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		//Formatação do resultado do arquivo de saída
		resultado += "Pessoas completamente imunizadas: " + d2 + "\r\n";
		resultado += "Pessoas imunizadas apenas com uma dose: " + d1 + "\r\n";
		resultado += "Pessoas que tomaram a segunda dose com atraso: " + d2a + "\r\n";
		resultado += "Pessoas esperando a segunda dose com atraso: " + d1a;

		//Grava o arquivo de saída
		try {
			bw = new BufferedWriter(new FileWriter(saida, false));
			bw.write(resultado);
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

		//Saída também no console para verificação
		System.out.println(resultado);
	}

	private static void vacinacao(int vacinas) {
		
		// Primeiro, se existem pessoas com a segunda dose em atraso
		if (d1a > 0) {
			if (d1a <= vacinas) { // Verifica há doses suficientes para todas as pessoas
				d2 += d1a; // Adiciona a pessoas completamente imunizadas
				vacinas -= d1a; // Utiliza as doses de vacina
				d2a += d1a; // Adiciona a pessoas que tomaram a segunda dose com atraso
				d1 -= d1a; // Remove dafila de aguardando a segunda dose
				d1a = 0; // Zera a fila de atrazo
			} else {
				d1a -= vacinas; // Vacina as pessoas com segunda doze em atraso
				d2a += vacinas; // Adiciona a pessoas que tomaram a segunda dose com atraso
				d2 += vacinas; // Adiciona a pessoas completamente imunizadas
				d1 -= vacinas; // Remove dafila de aguardando a segunda dose
				vacinas = 0; // Utiliza todas as doses
			}
		}

		// Em seguida, são vacinadas as pessoas com a segunda dose em dia
		if (vacinas > 0) {
			if (d1 > 0) {
				if (d1 <= vacinas) { // Verifica há doses suficientes para todas as pessoas
					d2 += d1; // Adiciona a pessoas completamente imunizadas
					vacinas -= d1; // Utiliza as doses
					d1 = 0; // zara a fila de segunda doze
				} else {
					d1 -= vacinas; // Vacina as pessoas com as dozes que sobraram
					d2 += vacinas; // Adiciona a pessoas completamente imunizadas
					vacinas = 0; // Utiliza todas as doses
					d1a += d1; // Adiciona pessoas esperando a segunda dose com atraso
				}
			}
		}

		// Por fim, todas as vacinas restantes são aplicadas como primeira dose.
		if (vacinas > 0) {
			d1 += vacinas;
		}
	}
}
