package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1020 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		int anos = 0, meses = 0;
		int dias = read.nextInt();
		anos = dias / 365;
		dias %= 365;
		meses = dias / 30;
		dias %= 30;
		System.out.printf("%d ano(s)\n",anos);
		System.out.printf("%d mes(es)\n",meses);
		System.out.printf("%d dia(s)\n",dias);
	}

}
