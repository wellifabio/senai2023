package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controle.UsuarioProcessa;
import modelo.Usuario;
import uteis.Cripto;

public class UsuarioCRUD extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel lbEmail, lbSenha;
	private JTextField tfEmail;
	private JPasswordField pfSenha;
	private JButton create, read, update, delete;
	private JScrollPane scroll;
	private JTable table;
	private DefaultTableModel tableModel;
	private int indice = -1;

	UsuarioCRUD() {
		// Propriedades B�sicas
		setTitle("Gerenciamento de usuários");
		setBounds(500, 200, 470, 400);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); // Painel de elementos
		setContentPane(painel); // Configua o painel
		setLayout(null);

		// Textos e Bot�es
		lbEmail = new JLabel("E-mail:");
		lbEmail.setBounds(20, 20, 100, 30);
		painel.add(lbEmail);

		lbSenha = new JLabel("Senha:");
		lbSenha.setBounds(20, 55, 100, 30);
		painel.add(lbSenha);

		tfEmail = new JTextField();
		tfEmail.setBounds(135, 20, 300, 30);
		painel.add(tfEmail);

		pfSenha = new JPasswordField();
		pfSenha.setEchoChar('*');
		pfSenha.setBounds(135, 55, 300, 30);
		painel.add(pfSenha);

		create = new JButton("Cadastrar");
		read = new JButton("Consultar");
		update = new JButton("Alterar");
		delete = new JButton("Excluir");

		create.setBounds(20, 90, 100, 30);
		read.setBounds(125, 90, 100, 30);
		update.setBounds(230, 90, 100, 30);
		delete.setBounds(335, 90, 100, 30);

		painel.add(create);
		painel.add(read);
		painel.add(update);
		painel.add(delete);

		// Tabela de Professores (READ, UPDATE)
		tableModel = new DefaultTableModel();
		tableModel.addColumn("E-mail");
		tableModel.addColumn("Senha");
		if (UsuarioProcessa.usuarios.size() != 0) {
			preencheTabela();
		}
		table = new JTable(tableModel);
		table.setEnabled(false);
		scroll = new JScrollPane(table);
		scroll.setBounds(20, 125, 415, 215);
		painel.add(scroll);

		create.addActionListener(this);
		read.addActionListener(this);
		update.addActionListener(this);
		delete.addActionListener(this);

		update.setEnabled(false);
		delete.setEnabled(false);

	}

	private void preencheTabela() {
		int totLinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Usuario u : UsuarioProcessa.usuarios) {
			tableModel.addRow(new String[] { u.getEmail(), u.getSenha() });
		}
	}

	private void limparCampos() {
		tfEmail.setText("");
		pfSenha.setText("");
	}

	private void create() {
		if (tfEmail.getText().length() > 0 && new String(pfSenha.getPassword()).length() > 3) {
			Usuario user = new Usuario(tfEmail.getText(), Cripto.encripta(new String(pfSenha.getPassword())));
			if (UsuarioProcessa.usuarios.contains(user)) {
				JOptionPane.showMessageDialog(this, "Usuário já cadastrado");
			} else {
				UsuarioProcessa.usuarios.add(user);
				UsuarioProcessa.salvar();
				preencheTabela();
				limparCampos();
			}
		} else {
			JOptionPane.showMessageDialog(this, "Preencha o email e a senha de no mínimo 4 dígitos");
		}
	}

	private void read() {
		if (tfEmail.getText().length() > 0) {
			Usuario user = new Usuario(tfEmail.getText(), "");
			if (UsuarioProcessa.usuarios.contains(user)) {
				indice = UsuarioProcessa.usuarios.indexOf(user);
				tfEmail.setEnabled(false);
				create.setEnabled(false);
				read.setEnabled(false);
				update.setEnabled(true);
				delete.setEnabled(true);
			} else {
				JOptionPane.showMessageDialog(this, "Usuário não encontrado");
			}
		} else {
			JOptionPane.showMessageDialog(this, "Preencha o campo email");
		}
	}

	private void update() {
		if (tfEmail.getText().length() > 0 && new String(pfSenha.getPassword()).length() > 3) {
			Usuario user = new Usuario(tfEmail.getText(), Cripto.encripta(new String(pfSenha.getPassword())));
			UsuarioProcessa.usuarios.set(indice, user);
			UsuarioProcessa.salvar();
			preencheTabela();
			limparCampos();
			tfEmail.setEnabled(true);
			create.setEnabled(true);
			read.setEnabled(true);
			update.setEnabled(false);
			delete.setEnabled(false);
		} else {
			JOptionPane.showMessageDialog(this, "Preencha o email e a senha de no mínimo 4 dígitos");
		}
	}

	private void delete() {
		UsuarioProcessa.usuarios.remove(indice);
		UsuarioProcessa.salvar();
		preencheTabela();
		limparCampos();
		tfEmail.setEnabled(true);
		create.setEnabled(true);
		read.setEnabled(true);
		update.setEnabled(false);
		delete.setEnabled(false);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == create) {
			create();
		}
		if (e.getSource() == read) {
			read();
		}
		if (e.getSource() == update) {
			update();
		}
		if (e.getSource() == delete) {
			delete();
		}
	}

}
