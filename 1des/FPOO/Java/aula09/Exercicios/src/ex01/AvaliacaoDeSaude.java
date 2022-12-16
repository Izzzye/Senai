package ex01;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class AvaliacaoDeSaude extends JFrame implements ActionListener{

	private static final long serialVersionUID = 1L;
	JPanel painel;
	JLabel rotuloNome, rotuloPeso, rotuloAltura, rotuloResultado;
	JTextField campoNome, campoPeso, campoAltura;
	JButton calcular, limpar;
	JTextArea areaResultado;
	
	//Construtor que realmente desenha na tela
	AvaliacaoDeSaude(){
		setTitle("Avaliação de Saúde");
		setBounds(50, 50, 550, 400);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		rotuloNome = new JLabel("Nome:");
		rotuloNome.setBounds(30, 20, 200, 30);
		painel.add(rotuloNome);
		
		rotuloPeso = new JLabel("Peso:");
		rotuloPeso.setBounds(30, 50, 200, 30);
		painel.add(rotuloPeso);
		
		rotuloAltura = new JLabel("Altura:");
		rotuloAltura.setBounds(30, 80, 200, 30);
		painel.add(rotuloAltura);
		
		rotuloResultado = new JLabel("Resultado:");
		rotuloResultado.setBounds(30, 150, 200, 30);
		painel.add(rotuloResultado);
		
		campoNome = new JTextField();
		campoNome.setBounds(100, 20, 400,30);
		painel.add(campoNome);
		
		campoPeso = new JTextField();
		campoPeso.setBounds(100, 50, 400,30);
		painel.add(campoPeso);
		
		campoAltura = new JTextField();
		campoAltura.setBounds(100, 80, 400,30);
		painel.add(campoAltura);
		
		calcular = new JButton("Calcular");
		calcular.setBounds(120, 120, 150, 30);
		painel.add(calcular);
		calcular.addActionListener(this);
		
		limpar = new JButton("Limpar");
		limpar.setBounds(320, 120, 150, 30);
		painel.add(limpar);
		limpar.addActionListener(this);
		
		areaResultado = new JTextArea();
		areaResultado.setBounds(30, 180, 470, 150);
		painel.add(areaResultado);
		
	}


	//Execução dps eventos(click nos botões)
		public void actionPerformed(ActionEvent e) {
			if(e.getSource() == calcular) {
				Paciente p = new Paciente(campoNome.getText(), campoPeso.getText() ,campoAltura.getText());
				areaResultado.setText(p.toString());
			}
			
			if(e.getSource() == limpar) {
				campoNome.setText("");
				campoPeso.setText("");
				campoAltura.setText("");
				areaResultado.setText("");
			}
			
		}
	
		
	public static void main(String[] args) {
		System.out.println("Este programa esta funcionando");
		new AvaliacaoDeSaude().setVisible(true);

	}

}
