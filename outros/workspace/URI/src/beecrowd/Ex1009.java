package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1009 {

	public static void main(String[] args) throws IOException{
        Scanner read = new Scanner(System.in);
        String name = read.nextLine();
        double salary = read.nextDouble();
        double salesTotal = read.nextDouble();
        double commission = salesTotal * 15 / 100;
        double amount = salary + commission;
        System.out.printf("TOTAL = R$ %.2f\n",amount);
	}

}
