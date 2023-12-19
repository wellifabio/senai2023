package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1017 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		int consumo = 12; //km por litro
		int tempoGasto = read.nextInt(); //Em horas
		int velocidadeMedia = read.nextInt(); //km/h
		double consumoTotal = (tempoGasto * velocidadeMedia) / (float) consumo;
		System.out.printf("%.3f\n",consumoTotal);
	}

}
