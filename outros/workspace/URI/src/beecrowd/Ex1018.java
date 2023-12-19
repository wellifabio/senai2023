package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1018 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		int cem = 0, cinquenta = 0, vinte = 0, dez = 0, cinco = 0, dois = 0, um = 0;
		int valor = read.nextInt();
		System.out.printf("%d\n",valor);
		cem = valor / 100;
		valor = valor % 100;
		cinquenta = valor / 50;
		valor = valor % 50;
		vinte = valor / 20;
		valor = valor % 20;
		dez = valor / 10;
		valor = valor % 10;
		cinco = valor / 5;
		valor = valor % 5;
		dois = valor / 2;
		valor = valor % 2;
		um = valor;
		System.out.printf("%d nota(s) de R$ 100,00\n",cem);
		System.out.printf("%d nota(s) de R$ 50,00\n",cinquenta);
		System.out.printf("%d nota(s) de R$ 20,00\n",vinte);
		System.out.printf("%d nota(s) de R$ 10,00\n",dez);
		System.out.printf("%d nota(s) de R$ 5,00\n",cinco);
		System.out.printf("%d nota(s) de R$ 2,00\n",dois);
		System.out.printf("%d nota(s) de R$ 1,00\n",um);
	}

}
