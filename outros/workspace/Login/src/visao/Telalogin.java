package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;

import controle.UsuarioProcessa;
import uteis.Cripto;

public class Telalogin extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	// Atributos da tela
	private JPanel painel;
	private JLabel rotulo1, rotulo2;
	private JTextField email;
	private JPasswordField senha;
	private JButton login;

	Telalogin() {
		// Propriedades B�sicas
		setTitle("Tela de Login");
		setBounds(600, 300, 360, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); //Painel de elementos
		setContentPane(painel); //Configua o painel
		setLayout(null);

		// Conte�dos da tela
		rotulo1 = new JLabel("Email:");
		rotulo1.setBounds(20, 20, 100, 20);
		email = new JTextField();
		email.setBounds(120, 20, 200, 30);
		rotulo2 = new JLabel("Senha:");
		rotulo2.setBounds(20, 60, 100, 20);
		senha = new JPasswordField();
		senha.setEchoChar('*');
		senha.setBounds(120, 60, 200, 30);
		login = new JButton("Login");
		login.setBounds(120, 100, 200, 30);
		
		//Habilitando o evento de clicar no bot�o
		login.addActionListener(this);

		//Adicioar todos os elementos no painel
		painel.add(rotulo1);
		painel.add(email);
		painel.add(rotulo2);
		painel.add(senha);
		painel.add(login);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == login) {
			if(email.getText().length() > 0 && new String(senha.getPassword()).length() > 0) {
			int indice = UsuarioProcessa.checarEmail(email.getText());
			if (indice != -1) {
				if (UsuarioProcessa.checarSenha(indice, Cripto.encripta(new String(senha.getPassword())))) {
					this.dispose();// Fecha o Formul�rio
					UsuarioCRUD uc = new UsuarioCRUD();
					uc.setVisible(true);
				} else {
					JOptionPane.showMessageDialog(this, "Acesso negado");
				}
			} else {
				JOptionPane.showMessageDialog(this, "Usuário não encontrado");
			}
			}else {
				JOptionPane.showMessageDialog(this, "Preencha o email e a senha");
			}
		}
	}

	public static void main(String[] args) {
		UsuarioProcessa.carregar();
		Telalogin login = new Telalogin();
		login.setVisible(true);
	}
}
