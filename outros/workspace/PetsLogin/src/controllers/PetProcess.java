package controllers;

import java.util.ArrayList;

import domains.Pet;
import domains.dao.PetDAO;

public class PetProcess {

	public static ArrayList<Pet> pets = new ArrayList<>();
	private static PetDAO pd = new PetDAO();
	
	public static void abrir() {
		pets = pd.ler();
		if(pets.size() == 0) {
			pets.add(new Pet(1, "Gato", "Mini", "Angorá", 2.0f, "03/10/2021", "Mariana Rios","(19)99587-7878"));
		}
	}
	
	public static void salvar() {
		pd.escrever(pets);
	}
}
