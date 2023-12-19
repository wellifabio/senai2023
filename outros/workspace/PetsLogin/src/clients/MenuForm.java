package clients;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;

public class MenuForm extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JMenuBar barraMenu = new JMenuBar();
	private JMenu menuCadastro, menuSistema, menuRelatorio;
	private JMenuItem itemPets, itemServicos, itemUsuarios, itemDashBoard, itemRelatorio;
	private String imgIco = "./assets/icone.png";
	private String pathFundo = "./assets/fundo.png";
	private ImageIcon fundo;
	private JLabel lbFundo = new JLabel();

	MenuForm() {
		// COnfigura��es do Form principal
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setTitle("PetShop - Sistema de Serviços");
		setBounds(100, 100, 900, 700);
		setIconImage(new ImageIcon(imgIco).getImage());
		painel = new JPanel();
		painel.setBackground(new Color(255, 233, 213));
		setJMenuBar(barraMenu);
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);

		// Imagem de fundo
		fundo = new ImageIcon(new ImageIcon(pathFundo).getImage().getScaledInstance(850, 605, 100));
		lbFundo.setIcon(fundo);
		lbFundo.setBounds(20, 15, 850, 605);
		painel.add(lbFundo);

		// Barra de Men�s
		menuCadastro = new JMenu("Cadastros");
		menuSistema = new JMenu("Configurações");
		menuRelatorio = new JMenu("Relatórios");
		barraMenu.add(menuCadastro);
		barraMenu.add(menuSistema);
		barraMenu.add(menuRelatorio);
		itemPets = new JMenuItem("Gestão de Pets");
		itemServicos = new JMenuItem("Gestão de Serviços");
		itemUsuarios = new JMenuItem("Gestão de Usuários");
		itemRelatorio = new JMenuItem("Relatórios de Serviços");
		itemDashBoard = new JMenuItem("Analizar Dados - DashBoard");
		menuCadastro.add(itemPets);
		menuCadastro.add(itemServicos);
		menuRelatorio.add(itemRelatorio);
		menuRelatorio.add(itemDashBoard);
		menuSistema.add(itemUsuarios);
		barraMenu.setBackground(new Color(255, 233, 213));

		// A��es do Men�
		itemPets.addActionListener(this);
		itemServicos.addActionListener(this);
		itemDashBoard.addActionListener(this);
		itemUsuarios.addActionListener(this);
		itemRelatorio.addActionListener(this);
	}

	private void abrirPlanilha() {
		Runtime rt = Runtime.getRuntime();
		String dashboard[] = { "cmd", "/c", "start", "./data/dashboard.xlsm" };
		try {
			rt.exec(dashboard);
		} catch (IOException e) {
			System.out.println(e);
		}
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == itemPets) {
			PetForm pf = new PetForm();
			pf.setModal(true);
			pf.setVisible(true);
		}
		if (e.getSource() == itemServicos) {
			ServicoForm sf = new ServicoForm();
			sf.setModal(true);
			sf.setVisible(true);
		}
		if (e.getSource() == itemUsuarios) {
			UsuarioForm uf = new UsuarioForm();
			uf.setModal(true);
			uf.setVisible(true);
		}
		if (e.getSource() == itemRelatorio) {
			RelatorioForm tf = new RelatorioForm();
			tf.setModal(true);
			tf.setVisible(true);
		}
		if (e.getSource() == itemDashBoard) {
			abrirPlanilha();
		}
	}
}
