package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1013 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		int a = read.nextInt();
		int b = read.nextInt();
		int c = read.nextInt();
		int maiorAB = (a + b + Math.abs(a - b)) / 2;
		int maior = (maiorAB + c + Math.abs(maiorAB - c))/2;
		System.out.printf("%d eh o maior\n",maior);
	}

}
