package viewers;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

import controllers.ManutencaoProcess;
import models.Manutencao;

public class ManutencaoForm0 extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private String imgIco = "./imgs/icone.png";
	private JLabel id, data, equipamento, custoHora, tempoGasto;
	private JTextField tfId, tfData, tfCustoHora, tfTempoGasto;
	private JComboBox<String> cbEquipamento;
	private JScrollPane rolagem;
	private JTextArea text;
	private String dados;
	private JButton create, read, update, delete;
	
	private int autoId = ManutencaoProcess.manutencoes.get(ManutencaoProcess.manutencoes.size()-1).getId()+1;
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	ManutencaoForm0() {
		setTitle("Cadastro de Manutenções");
		setBounds(150, 170, 640, 480);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setIconImage(new ImageIcon(imgIco).getImage());
		painel = new JPanel();
		painel.setBackground(new Color(213, 233, 255));
		setContentPane(painel);
		setLayout(null);

		id = new JLabel("Id:");
		id.setBounds(10, 10, 120, 30);
		painel.add(id);
		data = new JLabel("Data:");
		data.setBounds(10, 40, 120, 30);
		painel.add(data);
		equipamento = new JLabel("Equipamento:");
		equipamento.setBounds(10, 70, 120, 30);
		painel.add(equipamento);
		custoHora = new JLabel("Custo Hora:");
		custoHora.setBounds(10, 100, 120, 30);
		painel.add(custoHora);
		tempoGasto = new JLabel("Tempo Gasto:");
		tempoGasto.setBounds(10, 130, 120, 30);
		painel.add(tempoGasto);

		tfId = new JTextField(String.format("%d", autoId));
		tfId.setBounds(130, 10, 300, 25);
		painel.add(tfId);
		tfData = new JTextField(sdf.format(new Date()));
		tfData.setBounds(130, 40, 300, 25);
		painel.add(tfData);
		cbEquipamento = new JComboBox<String>(new String[] { "Máquina Injetora 10", "Máquina Injetora 13",
				"Máquina Injetora 23", "Esteira principal", "Esteira secundária", "Braço Robótico" });
		cbEquipamento.setBounds(130, 70, 300, 25);
		painel.add(cbEquipamento);
		tfCustoHora = new JTextField("100,00");
		tfCustoHora.setBounds(130, 100, 300, 25);
		painel.add(tfCustoHora);
		tfTempoGasto = new JTextField("1,00");
		tfTempoGasto.setBounds(130, 130, 300, 25);
		painel.add(tfTempoGasto);

		create = new JButton("Cadastrar");
		read = new JButton("Buscar por id");
		update = new JButton("Alterar");
		delete = new JButton("Excluir");

		create.setBounds(455, 15, 150, 30);
		read.setBounds(455, 50, 150, 30);
		update.setBounds(455, 85, 150, 30);
		delete.setBounds(455, 120, 150, 30);

		painel.add(create);
		painel.add(read);
		painel.add(update);
		painel.add(delete);

		text = new JTextArea();
		if (ManutencaoProcess.manutencoes.size() != 0) {
			preencherDados();
		}
		rolagem = new JScrollPane(text);
		rolagem.setBounds(10, 165, 600, 260);
		painel.add(rolagem);

		create.addActionListener(this);
		read.addActionListener(this);
		update.addActionListener(this);
		delete.addActionListener(this);

		text.setEnabled(false);
		tfId.setEnabled(false);
		tfData.setEnabled(false);
		update.setEnabled(false);
		delete.setEnabled(false);

	}

	private void preencherDados() {
		dados = "Id\tData\tEquipamento\t\tCusto/Hora\tTempo Gasto\tTotal\n";
		for (Manutencao m : ManutencaoProcess.manutencoes) {
			dados += m.toString();
		}
		text.setText(dados);
		text.setBackground(new Color(13, 33, 55));
	}

	private void limparCampos() {
		tfId.setText(String.format("%d", autoId));
		tfCustoHora.setText("100,00");
		tfTempoGasto.setText("1,00");
		tfData.setEnabled(false);
		create.setEnabled(true);
		update.setEnabled(false);
		delete.setEnabled(false);
	}

	private int obterIndiceEquipamento(String equipamento) {
		switch (equipamento) {
		case "Máquina Injetora 10":
			return 0;
		case "Máquina Injetora 13":
			return 1;
		case "Máquina Injetora 23":
			return 2;
		case "Esteira principal":
			return 3;
		case "Esteira secundária":
			return 4;
		case "Braço Robótico":
			return 5;
		default:
			return -1;
		}
	}
	
	// CREATE - CRUD
	private void cadastrar() {
		if (tfCustoHora.getText().length() != 0 && tfTempoGasto.getText().length() != 0) {
			ManutencaoProcess.manutencoes.add(new Manutencao(tfId.getText(),
					cbEquipamento.getSelectedItem().toString(), tfCustoHora.getText(), tfTempoGasto.getText()));
			autoId++;
			preencherDados();
			limparCampos();
			ManutencaoProcess.salvar();
		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
	}

	// READ - CRUD
	private void buscar() {
		String entrada = JOptionPane.showInputDialog(this, "Digite o Id da manutenção:");
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
			Manutencao manutencao = new Manutencao(id);
			if (ManutencaoProcess.manutencoes.contains(manutencao)) {
				int indice = ManutencaoProcess.manutencoes.indexOf(manutencao);
				tfId.setText(ManutencaoProcess.manutencoes.get(indice).getId("s"));
				tfData.setText(ManutencaoProcess.manutencoes.get(indice).getData("s"));
				cbEquipamento.setSelectedIndex(obterIndiceEquipamento(ManutencaoProcess.manutencoes.get(indice).getEquipamento()));
				tfCustoHora.setText(ManutencaoProcess.manutencoes.get(indice).getCustoHora("s"));
				tfTempoGasto.setText(ManutencaoProcess.manutencoes.get(indice).getTempoGasto("s"));
				create.setEnabled(false);
				update.setEnabled(true);
				delete.setEnabled(true);
				tfData.setEnabled(true);
				ManutencaoProcess.salvar();
			} else {
				JOptionPane.showMessageDialog(this, "Equipamento não encontrado");
			}
		}
	}
	
	// UPDATE - CRUD
	private void alterar() {
		if (tfCustoHora.getText().length() != 0 && tfTempoGasto.getText().length() != 0) {
			int id = Integer.parseInt(tfId.getText());
			Manutencao manutencao = new Manutencao(id);
			int indice = ManutencaoProcess.manutencoes.indexOf(manutencao);
			ManutencaoProcess.manutencoes.set(indice,new Manutencao(tfId.getText(),tfData.getText(),
					cbEquipamento.getSelectedItem().toString(), tfCustoHora.getText(), tfTempoGasto.getText()));
			autoId++;
			preencherDados();
			limparCampos();
			ManutencaoProcess.salvar();
		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
	}

	
	// DELETE - CRUD
	private void excluir() {
		int id = Integer.parseInt(tfId.getText());
		Manutencao manutencao = new Manutencao(id);
		int indice = ManutencaoProcess.manutencoes.indexOf(manutencao);
		ManutencaoProcess.manutencoes.remove(indice);
		preencherDados();
		limparCampos();
		create.setEnabled(true);
		update.setEnabled(false);
		delete.setEnabled(false);
		tfId.setText(String.format("%d", autoId));
		ManutencaoProcess.salvar();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
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

	public static void main(String[] args) {
		ManutencaoProcess.abrir();
		new ManutencaoForm0().setVisible(true);
	}

}
