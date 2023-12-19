package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1014 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		int distancia = read.nextInt();
		double combustivel = read.nextDouble();
		System.out.printf("%.3f km/l\n",(distancia/combustivel));

	}

}
