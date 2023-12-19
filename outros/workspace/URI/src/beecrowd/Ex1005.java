package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1005 {

	public static void main(String[] args) throws IOException{
        Scanner read = new Scanner(System.in);
        double a = read.nextDouble();
        double b = read.nextDouble();
        double m = (a*3.5+b*7.5)/11;
        System.out.printf("MEDIA = %.5f\n",m);
	}

}
