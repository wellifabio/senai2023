package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1016 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		double x = 1.0, y = 1.5;
		int distancia = read.nextInt();
		double minutos = distancia/(y-x);
		System.out.printf("%.0f minutos\n",minutos);
	}

}
