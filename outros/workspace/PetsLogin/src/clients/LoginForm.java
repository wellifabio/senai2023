package clients;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;

import controllers.PetProcess;
import controllers.ServicoProcess;
import controllers.UsuarioProcess;
import uteis.Cripto;

public class LoginForm extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	// Atributos da tela de login
	private JPanel painel;
	private JLabel rotulo1, rotulo2;
	private JTextField tfLogin;
	private JPasswordField senha;
	private JButton login;
	private String imgIco = "./assets/key.png";

	LoginForm() {
		// Propriedades B?sicas
		setTitle("Tela de Login");
		setIconImage(new ImageIcon(imgIco).getImage());
		setBounds(600, 300, 360, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); // Painel de elementos
		painel.setBackground(new Color(255, 233, 213));
		setContentPane(painel); // Configua o painel
		setLayout(null);

		// Conte?dos da tela
		rotulo1 = new JLabel("Login:");
		rotulo1.setBounds(20, 20, 100, 20);
		tfLogin = new JTextField();
		tfLogin.setBounds(120, 20, 200, 30);
		rotulo2 = new JLabel("Senha:");
		rotulo2.setBounds(20, 60, 100, 20);
		senha = new JPasswordField();
		senha.setEchoChar('*');
		senha.setBounds(120, 60, 200, 30);
		login = new JButton("Login");
		login.setBounds(120, 100, 200, 30);

		// Habilitando o evento de clicar no bot?o
		login.addActionListener(this);

		// Adicioar todos os elementos no painel
		painel.add(rotulo1);
		painel.add(tfLogin);
		painel.add(rotulo2);
		painel.add(senha);
		painel.add(login);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == login) {
			if (tfLogin.getText().length() > 0 && new String(senha.getPassword()).length() > 0) {
				int indice = UsuarioProcess.checarLogin(tfLogin.getText());
				if (indice != -1) {
					if (UsuarioProcess.checarSenha(indice, Cripto.encripta(new String(senha.getPassword())))) {
						this.dispose();// Fecha o Formul?rio
						MenuForm mf = new MenuForm();
						mf.setVisible(true);
					} else {
						JOptionPane.showMessageDialog(this, "Acesso negado");
					}
				} else {
					JOptionPane.showMessageDialog(this, "Usuário não encontrado");
				}
			} else {
				JOptionPane.showMessageDialog(this, "Preencha o login e a senha");
			}
		}
	}

	public static void main(String[] args) {
		UsuarioProcess.abrir();
		PetProcess.abrir();
		ServicoProcess.abrir();
		LoginForm login = new LoginForm();
		login.setVisible(true);
	}
}
