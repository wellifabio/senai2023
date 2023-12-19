package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1006 {

	public static void main(String[] args) throws IOException{
        Scanner read = new Scanner(System.in);
        double a = read.nextDouble();
        double b = read.nextDouble();
        double c = read.nextDouble();
        double m = (a*2+b*3+c*5)/10;
        System.out.printf("MEDIA = %.1f\n",m);
	}

}
