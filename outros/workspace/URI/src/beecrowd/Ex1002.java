package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1002 {

	public static Scanner read;
	
	public static void main(String[] args) throws IOException{
        read = new Scanner(System.in);
        double r = read.nextDouble();
        double n = 3.14159;
        double a = n * (r * r);
        System.out.printf("A=%.4f\n", a);
	}

}
