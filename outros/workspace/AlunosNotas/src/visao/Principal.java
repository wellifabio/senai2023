package visao;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;

import modelo.Aluno;
import modelo.Nota;

public class Principal {

	// Atribuitos
	private static Scanner scan = new Scanner(System.in);
	private static Aluno[] alunos = new Aluno[10];
	private static int menu = 0;
	// Campo para formatar a data em dia/M�s/Ano
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	// Vetor com os itens do menu
	private static String[] itensMenu = { "Cadastrar Aluno", "Cadastrar Nota", "Listar todos os Alunos",
			"Listar todas as Notas", "Buscar aluno", "Listar Aprovados", "Listar Reprovados", "Sair" };
	// Vari�veis de l�gica de controle
	private static int quantosCadastrados = 0;

	// M�todos
	public static void main(String[] args) throws IOException, ParseException {
		System.out.println("Sistema de Gest�o de Alunos e Notas\n");
		while (menu != 8) {
			menu = menu(itensMenu);
			switch (menu) {
			case 1:
				cadastrarAluno();
				break;
			case 2:
				cadastrarNotas();
				break;
			case 3:
				listarAlunos();
				break;
			case 4:
				listarNotas();
				break;
			case 5:
				buscarAluno();
				break;
			case 6:
				listarAprovados();
				break;
			case 7:
				listarReprovados();
				break;
			case 8:
				System.out.println("\nObrigado por utilizar nosso sistema.\n");
				break;
			default:
				System.out.println("\nOp��o inv�lida\n");
				break;
			}
		}
	}

	// M�todo que desenha o men� na tela
	private static int menu(String[] itens) {
		for (int i = 0; i < itens.length; i++) {
			System.out.println((i + 1) + ".\t" + itens[i]);
		}
		System.out.print("Escolha uma op��o: ");
		return scan.nextInt();
	}

	private static void cadastrarAluno() throws ParseException {
		System.out.println("Digite os dados do novo aluno");
		System.out.println("RA\tNome\tData de Nascimento");
		alunos[quantosCadastrados] = new Aluno();
		alunos[quantosCadastrados].ra = scan.nextInt();
		alunos[quantosCadastrados].nome = scan.next();
		alunos[quantosCadastrados].nascimento = df.parse(scan.next());
		quantosCadastrados++;
	}

	private static void listarAlunos() {
		System.out.println("\nRA\tNome\tNascimento\tIdade");
		for (int i = 0; i < quantosCadastrados; i++)
			System.out.println(alunos[i].paraString());
		System.out.println();
	}

	private static void listarNotas() {
		System.out.println("\nRA\tNome\tNascimento\tIdade");
		for (int i = 0; i < quantosCadastrados; i++)
			System.out.println(alunos[i].paraStringNotas());
		System.out.println();
	}

	private static int obtertIndice(int ra) {
		for (int i = 0; i < quantosCadastrados; i++)
			if (alunos[i].ra == ra)
				return i;
		return -1;
	}

	private static int obtertIndice(String nome) {
		for (int i = 0; i < quantosCadastrados; i++)
			if (alunos[i].nome.equals(nome))
				return i;
		return -1;
	}

	private static void buscarAluno() {
		String[] opcoes = { "Buscar por Nome", "Buscar por RA" };
		switch (menu(opcoes)) {
		case 1:
			System.out.println("Digite o nome do aluno");
			String nome = scan.next();
			if (obtertIndice(nome) != -1) {
				System.out.println("RA\tNome\tNascimento\tIdade");
				System.out.println(alunos[obtertIndice(nome)].paraStringNotas());
			} else
				System.out.println("Aluno n�o encontrado.\n");

			break;
		case 2:
			System.out.println("Digite o RA do aluno");
			int ra = scan.nextInt();
			if (obtertIndice(ra) != -1) {
				System.out.println("RA\tNome\tNascimento\tIdade");
				System.out.println(alunos[obtertIndice(ra)].paraStringNotas());
			} else
				System.out.println("Aluno n�o encontrado.\n");

			break;
		default:
			System.out.println("\nOp��o inv�lida\n");
			break;
		}
	}

	private static void cadastrarNotas() {
		String[] opcoes = { "Buscar por Nome", "Buscar por RA" };
		switch (menu(opcoes)) {
		case 1:
			System.out.println("Digite o nome do aluno");
			String nome = scan.next();
			if (obtertIndice(nome) != -1) {
				System.out.println("RA\tNome\tNascimento\tIdade");
				System.out.println(alunos[obtertIndice(nome)].paraString());
				cadastrarNota(obtertIndice(nome));
			} else {
				System.out.println("Aluno n�o encontrado.\n");
			}
			break;
		case 2:
			System.out.println("Digite o RA do aluno");
			int ra = scan.nextInt();
			if (obtertIndice(ra) != -1) {
				System.out.println("RA\tNome\tNascimento\tIdade");
				System.out.println(alunos[obtertIndice(ra)].paraString());
				cadastrarNota(obtertIndice(ra));
			} else {
				System.out.println("Aluno n�o encontrado.\n");
			}
			break;
		default:
			System.out.println("\nOp��o inv�lida\n");
			break;
		}

	}

	private static void cadastrarNota(int indice) {
		int quantasNotas = obterQuantasNotas(indice);
		if (quantasNotas < 4) {
			System.out.printf("Este aluno tem %d notas cadastradas\n", obterQuantasNotas(indice));
			System.out.println("Cada componente permite at� tr�s notas");
			System.out.println("Caso n�o tenha nota de alguma das alvalia��es digite -1");
			System.out.println("Nome do componente\tNota1\tNota2\tNota3");
			alunos[indice].notas[quantasNotas] = new Nota();
			alunos[indice].notas[quantasNotas].componente = scan.next();
			alunos[indice].notas[quantasNotas].nota[0] = scan.nextFloat();
			alunos[indice].notas[quantasNotas].nota[1] = scan.nextFloat();
			alunos[indice].notas[quantasNotas].nota[2] = scan.nextFloat();
		} else {
			System.out.println("Todas as notas dos componentes j� foram cadastradas.");
		}
	}

	private static int obterQuantasNotas(int indice) {
		int total = 0;
		for (int i = 0; i < alunos[indice].notas.length; i++)
			if (alunos[indice].notas[i] != null)
				total++;
		return total;
	}

	private static void listarReprovados() {
		System.out.println("RA\tNome\tNascimento\tIdade");
		for (int i = 0; i < quantosCadastrados; i++)
			if (alunos[i].obterConceito().equals("Reprovado"))
				System.out.println(alunos[i].paraStringNotas());
	}

	private static void listarAprovados() {
		System.out.println("RA\tNome\tNascimento\tIdade");
		for (int i = 0; i < quantosCadastrados; i++)
			if (alunos[i].obterConceito().equals("Aprovado"))
				System.out.println(alunos[i].paraStringNotas());
	}
}
