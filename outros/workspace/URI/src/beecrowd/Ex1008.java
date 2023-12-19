package beecrowd;

import java.io.IOException;
import java.util.Scanner;

public class Ex1008 {

	public static void main(String[] args) throws IOException{
        Scanner read = new Scanner(System.in);
        int employeeId = read.nextInt();
        int hours = read.nextInt();
        double salaryHour = read.nextDouble();
        double salaryMonth = hours * salaryHour;
        System.out.println("NUMBER = "+employeeId);
        System.out.printf("SALARY = U$ %.2f\n",salaryMonth);
	}

}
