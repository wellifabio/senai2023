package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1007 {

	public static void main(String[] args) throws IOException{
        Scanner read = new Scanner(System.in);
        int a = read.nextInt();
        int b = read.nextInt();
        int c = read.nextInt();
        int d = read.nextInt();
        int p = a*b -c*d;
        System.out.println("DIFERENCA = "+p);
	}

}
