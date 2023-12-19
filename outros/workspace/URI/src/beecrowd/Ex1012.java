package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1012 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		double a = read.nextDouble();
		double b = read.nextDouble();
		double c = read.nextDouble();
		System.out.printf("TRIANGULO: %.3f\n",(a *c / 2.0));
		System.out.printf("CIRCULO: %.3f\n",(c * c * 3.14159));
		System.out.printf("TRAPEZIO: %.3f\n",((a+b) * c / 2.0));
		System.out.printf("QUADRADO: %.3f\n",(b * b));
		System.out.printf("RETANGULO: %.3f\n",(a * b));
	}

}
