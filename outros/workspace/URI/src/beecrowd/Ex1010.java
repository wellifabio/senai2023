package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1010 {

	public static void main(String[] args) throws IOException{
        Scanner read = new Scanner(System.in);   
        int codeP1 = read.nextInt();
        int unitsP1 = read.nextInt();
        double priceP1 = read.nextDouble();
        int codeP2 = read.nextInt();
        int unitsP2 = read.nextInt();
        double priceP2 = read.nextDouble();
        double value = unitsP1 * priceP1 + unitsP2 * priceP2;
        System.out.printf("VALOR A PAGAR: R$ %.2f\n",value);
	}

}
