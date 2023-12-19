package uteis;

public class Cripto {
	// Criptografar a senha somando ou subtraindo
	// os dois primeiros digitos aos demais
	public static String encripta(String senha) {
		// Cria um vetor de caracteres para manipular a String
		char charArray[] = new char[senha.length()];
		for (int i = 0; i < charArray.length; i++) {
			charArray[i] = senha.charAt(i); // Passa cada caracter da string para o vetor
			// Se a soma caracter + primeiro d?gito for menor do que
			// o tamanho tabela ASCII (256) soma, sen?o subtrai
			if (charArray[i] + charArray[0] < 255) {
				charArray[i] += charArray[0];
			} else {
				charArray[i] -= charArray[0];
			}
		}
		for (int i = 0; i < charArray.length; i++) {
			// Se a soma caracter + segundo d?gito for menor do que
			// o tamanho tabela ASCII (256) soma, sen?o subtrai
			if (charArray[i] + charArray[1] < 255) {
				charArray[i] += charArray[1];
			} else {
				charArray[i] -= charArray[1];
			}
		}
		// Retorna o vetor de caracteres para a string
		senha = new String(charArray);
		return senha;
	}
}
