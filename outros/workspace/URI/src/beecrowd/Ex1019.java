package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1019 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		int horas = 0, minutos = 0;
		int segundos = read.nextInt();
		horas = segundos / 60 / 60;
		segundos -= horas * 60 * 60;
		minutos = segundos / 60;
		segundos = segundos % 60;
		System.out.printf("%d:%d:%d\n",horas,minutos,segundos);
	}

}
