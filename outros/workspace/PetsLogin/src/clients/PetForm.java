package clients;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Currency;
import java.util.Locale;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controllers.PetProcess;
import domains.Pet;

public class PetForm extends JDialog implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel id, especie, nomePet, raca, peso, nascimento, nomeDono, telefone, imagem;
	private JTextField tfId, tfNomePet, tfRaca, tfPeso, tfNascimento, tfNomeDono, tfTelefone;
	private JComboBox<String> cbEspecie;
	private JScrollPane rolagem;
	private JTable table;
	private DefaultTableModel tableModel;
	private JButton create, read, update, delete;
	private String imgIco = "./assets/icone.png";
	private String[] imagens = { "./assets/doguinho.png", "./assets/miau.png", "./assets/coelho.png",
			"./assets/ornitorrinco.png" };
	private ImageIcon icon;
	private int autoId = PetProcess.pets.get(PetProcess.pets.size()-1).getId() + 1;

	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");

	public PetForm() {
		setTitle("Cadastro de Animais/Pets");
		setBounds(150, 170, 800, 600);
		setIconImage(new ImageIcon(imgIco).getImage());
		painel = new JPanel();
		painel.setBackground(new Color(255, 233, 213));
		setContentPane(painel);
		setLayout(null);

		id = new JLabel("Id:");
		id.setBounds(20, 20, 120, 30);
		painel.add(id);
		especie = new JLabel("Espécie:");
		especie.setBounds(20, 55, 120, 30);
		painel.add(especie);
		nomePet = new JLabel("Nome pet:");
		nomePet.setBounds(20, 90, 120, 30);
		painel.add(nomePet);
		raca = new JLabel("Raça:");
		raca.setBounds(20, 125, 120, 30);
		painel.add(raca);
		peso = new JLabel("Peso:");
		peso.setBounds(20, 165, 120, 30);
		painel.add(peso);
		nascimento = new JLabel("Nascimento:");
		nascimento.setBounds(20, 200, 120, 30);
		painel.add(nascimento);
		nomeDono = new JLabel("Nome dono:");
		nomeDono.setBounds(20, 235, 120, 30);
		painel.add(nomeDono);
		telefone = new JLabel("Telefone:");
		telefone.setBounds(20, 270, 120, 30);
		painel.add(telefone);
		tfId = new JTextField(String.format("%d", autoId));
		tfId.setEditable(false);
		tfId.setBounds(140, 25, 140, 30);
		painel.add(tfId);
		cbEspecie = new JComboBox<String>(new String[] { "Cachorro", "Gato", "Coelho", "Outro" });
		cbEspecie.setBounds(140, 60, 255, 30);
		painel.add(cbEspecie);
		tfNomePet = new JTextField();
		tfNomePet.setBounds(140, 95, 255, 30);
		painel.add(tfNomePet);
		tfRaca = new JTextField();
		tfRaca.setBounds(140, 130, 255, 30);
		painel.add(tfRaca);
		tfPeso = new JTextField();
		tfPeso.setBounds(140, 165, 255, 30);
		painel.add(tfPeso);
		tfNascimento = new JTextField();
		tfNascimento.setBounds(140, 200, 255, 30);
		painel.add(tfNascimento);
		tfNomeDono = new JTextField();
		tfNomeDono.setBounds(140, 235, 255, 30);
		painel.add(tfNomeDono);
		tfTelefone = new JTextField();
		tfTelefone.setBounds(140, 270, 255, 30);
		painel.add(tfTelefone);

		// 1� etapa do READ Monta a tabela
		table = new JTable();
		tableModel = new DefaultTableModel();
		tableModel.addColumn("Id");
		tableModel.addColumn("Espécie");
		tableModel.addColumn("Nome Pet");
		tableModel.addColumn("Raça");
		tableModel.addColumn("Peso");
		tableModel.addColumn("Nascimento");
		tableModel.addColumn("Idade");
		tableModel.addColumn("Nome Dono");
		tableModel.addColumn("Telefone");
		if (PetProcess.pets.size() != 0) {
			preencherTabela();
		}
		table = new JTable(tableModel);
		table.setEnabled(false);
		rolagem = new JScrollPane(table);
		rolagem.setBounds(20, 310, 740, 230);
		painel.add(rolagem);

		imagem = new JLabel();
		imagem.setBounds(405, 60, 350, 240);
		imagem.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		alternarImagens(0);
		painel.add(imagem);

		create = new JButton("Cadastrar");
		read = new JButton("Buscar");
		update = new JButton("Atualizar");
		delete = new JButton("Excluir");
		create.setBounds(285, 25, 110, 30);
		read.setBounds(405, 25, 110, 30);
		update.setBounds(525, 25, 110, 30);
		delete.setBounds(645, 25, 110, 30);
		update.setEnabled(false);
		delete.setEnabled(false);
		painel.add(create);
		painel.add(read);
		painel.add(update);
		painel.add(delete);

		// Ouvir os eventos dos Bot�es, ComboBox e outros
		cbEspecie.addActionListener(this);
		create.addActionListener(this);
		read.addActionListener(this);
		update.addActionListener(this);
		delete.addActionListener(this);

	}
	
	int obterIndiceEspecie(String especie) {
		switch (especie) {
		case "Cachorro":
			return 0;
		case "Gato":
			return 1;
		case "Coelho":
			return 2;
		case "Outro":
			return 3;
		default:
			return -1;
		}
	}
	
	private void alternarImagens(int indice) {
		icon = new ImageIcon(new ImageIcon(imagens[indice]).getImage().getScaledInstance(350, 240, 100));
		imagem.setIcon(icon);
	}
	private void limparCampos() {
		tfId.setText(String.format("%d",autoId));
		tfNomePet.setText(null);
		tfRaca.setText(null);
		tfPeso.setText(null);
		tfNascimento.setText(null);
		tfNomeDono.setText(null);
		tfTelefone.setText(null);
	}

	private void preencherTabela() {
		int totLinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Pet p : PetProcess.pets) {
			tableModel.addRow(new String[] { p.getId("s"), p.getEspecie(), p.getNomePet(), p.getRaca(), p.getPeso("s"),
					p.getNascimento("s"), String.format("%d", p.obterIdade()), p.getNomeDono(), p.getTelefone() });
		}
	}

	// CREATE - CRUD
	private void cadastrar() {
		if (tfNomePet.getText().length() != 0 && tfRaca.getText().length() != 0 && tfPeso.getText().length() != 0
				&& tfNascimento.getText().length() != 0 && tfNomeDono.getText().length() != 0
				&& tfTelefone.getText().length() != 0) {

			// Converter o peso no formato Brasileiro usando virgula como decimal
			df.setCurrency(Currency.getInstance(BRASIL));
			float peso;
			try {
				peso = Float.parseFloat(df.parse(tfPeso.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				peso = 0;
			}

			PetProcess.pets.add(new Pet(autoId, cbEspecie.getSelectedItem().toString(), tfNomePet.getText(),
					tfRaca.getText(), peso, tfNascimento.getText(), tfNomeDono.getText(), tfTelefone.getText()));
			autoId++;
			preencherTabela();
			limparCampos();
			PetProcess.salvar();
		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
	}

	// READ - CRUD
	private void buscar() {
		String entrada = JOptionPane.showInputDialog(this, "Digite o Id do animal:");

		boolean isNumeric = true;
		if (entrada != null && !entrada.equals("")) {
			for (int i = 0; i < entrada.length(); i++) {
				if (!Character.isDigit(entrada.charAt(i))) {
					isNumeric = false;
				}
			}
		} else {
			isNumeric = false;
		}
		if (isNumeric) {
			int id = Integer.parseInt(entrada);
			Pet pet = new Pet(id);
			if (PetProcess.pets.contains(pet)) {
				int indice = PetProcess.pets.indexOf(pet);
				tfId.setText(PetProcess.pets.get(indice).getId("s"));
				cbEspecie.setSelectedIndex(obterIndiceEspecie(PetProcess.pets.get(indice).getEspecie()));
				tfNomePet.setText(PetProcess.pets.get(indice).getNomePet());
				tfRaca.setText(PetProcess.pets.get(indice).getRaca());
				tfPeso.setText(PetProcess.pets.get(indice).getPeso("s"));
				tfNascimento.setText(PetProcess.pets.get(indice).getNascimento("s"));
				tfNomeDono.setText(PetProcess.pets.get(indice).getNomeDono());
				tfTelefone.setText(PetProcess.pets.get(indice).getTelefone());
				create.setEnabled(false);
				update.setEnabled(true);
				delete.setEnabled(true);
				PetProcess.salvar();
			} else {
				JOptionPane.showMessageDialog(this, "Pet n�o encontrado");
			}
		}

	}

	// UPDATE - CRUD
	private void alterar() {
		int id = Integer.parseInt(tfId.getText());
		Pet pet = new Pet(id);
		int indice = PetProcess.pets.indexOf(pet);
		if (tfNomePet.getText().length() != 0 && tfRaca.getText().length() != 0 && tfPeso.getText().length() != 0
				&& tfNascimento.getText().length() != 0 && tfNomeDono.getText().length() != 0
				&& tfTelefone.getText().length() != 0) {

			// Converter o peso no formato Brasileiro usando virgula como decimal
			df.setCurrency(Currency.getInstance(BRASIL));
			float peso;
			try {
				peso = Float.parseFloat(df.parse(tfPeso.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				peso = 0;
			}

			PetProcess.pets.set(indice, new Pet(id, cbEspecie.getSelectedItem().toString(), tfNomePet.getText(),
					tfRaca.getText(), peso, tfNascimento.getText(), tfNomeDono.getText(), tfTelefone.getText()));
			preencherTabela();
			limparCampos();
		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
		create.setEnabled(true);
		update.setEnabled(false);
		delete.setEnabled(false);
		tfId.setText(String.format("%d", autoId));
		PetProcess.salvar();
	}

	// DELETE - CRUD
	private void excluir() {
		int id = Integer.parseInt(tfId.getText());
		Pet pet = new Pet(id);
		int indice = PetProcess.pets.indexOf(pet);
		PetProcess.pets.remove(indice);
		preencherTabela();
		limparCampos();
		create.setEnabled(true);
		update.setEnabled(false);
		delete.setEnabled(false);
		tfId.setText(String.format("%d", autoId));
		PetProcess.salvar();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == cbEspecie) {
			alternarImagens(cbEspecie.getSelectedIndex());
		}
		if (e.getSource() == create) {
			cadastrar();
		}
		if (e.getSource() == read) {
			buscar();
		}
		if (e.getSource() == update) {
			alterar();
		}
		if (e.getSource() == delete) {
			excluir();
		}
	}
}
