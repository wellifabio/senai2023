package modelo;

public class Nota {

	//Atributos
	public String componente;
	public float[] nota = { -1, -1, -1 };
	// -1 significa nota não cadastrada

	//Método obter média (Caso retorne -1 é porque não tem nenhuma nota cadastrada)
	public float obterMedia() {
		float soma = 0;
		int div = 0;
		for (int i = 0; i < nota.length; i++)
			if (nota[i] != -1) {
				soma += nota[i];
				div++;
			}
		if (div > 0)
			return soma / (float) div;
		else
			return -1;
	}
	
	//Obter as notas formatadas
	public String paraString() {
		return String.format("%s\t%.2f\t%.2f\t%.2f", componente, nota[0],nota[1],nota[2]);
	}
}
