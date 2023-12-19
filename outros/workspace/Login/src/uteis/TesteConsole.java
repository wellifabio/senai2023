package uteis;

import java.util.Scanner;

import controle.UsuarioProcessa;
import modelo.Usuario;

public class TesteConsole {

	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {
		UsuarioProcessa.carregar();
		for (Usuario u : UsuarioProcessa.usuarios) {
			System.out.println(u.toString());
		}
		System.out.print("Digite o email:");
		int indice = UsuarioProcessa.checarEmail(scan.next());
		if (indice != -1) {
			System.out.print("Digite a senha:");
			if (UsuarioProcessa.checarSenha(indice, Cripto.encripta(scan.next()))) {
				System.out.println("Acesso permitido");
			} else {
				System.out.println("Acesso negado");
			}
		} else {
			System.out.println("Usu�rio n�o encontrado");
		}
	}

}
