package ex1;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class FormularioEstrutural extends JFrame implements ActionListener{
	private static final long serialVersionUID = 1L;
	
	JPanel painel;
	JLabel rotuloNome, rotuloIdade, rotuloResultado;
	JTextField campoNome, campoIdade;
	JButton botao, limpar;
	JTextArea areaResultado;
	String resultado = "", faseDavida;
	int idade;

	Formulario(){
		setTitle("Entrada Processamento e Saida");
		setBounds(200,150,550,400);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		rotuloNome = new JLabel("Nome: ");
		rotuloNome.setBounds(20,20,100,30);
		painel.add(rotuloNome);
		
		rotuloIdade = new JLabel("Idade: ");
		rotuloIdade.setBounds(20, 60, 100, 30);
		painel.add(rotuloIdade);
		
		rotuloResultado = new JLabel("Resultado: ");
		rotuloResultado.setBounds(20,130,100,30);
		painel.add(rotuloResultado);
		
		campoNome = new JTextField();
		campoNome.setBounds(120,20,400,30);
		painel.add(campoNome);
		
		campoIdade = new JTextField();
		campoIdade.setBounds(120,60,400,30);
		painel.add(campoIdade);
		
		botao = new JButton("Processar");
		botao.setBounds(120,100,200,30);
		painel.add(botao);
		botao.addActionListener(this);
		
		limpar = new JButton("Limpar");
		limpar.setBounds(320,100,200,30);
		painel.add(limpar);
		limpar.addActionListener(this);
		
		areaResultado = new JTextArea();
		areaResultado.setBounds(20,160,500,150);
		painel.add(areaResultado);
	}
	
	public static void main(String[] args) {
		System.out.println("Este programa esta funcionando");
		new Formulario().setVisible(true);

	}

	public void actionPerformed(ActionEvent e) {
		if(e.getSource() == botao) {
			resultado += campoNome.getText()+"\t";
			resultado += campoIdade.getText()+"\t";
			idade = Integer.parseInt(campoIdade.getText());
			
			if(idade < 10)
				faseDavida = "Criança";
			else if(idade < 22)
				faseDavida = "Jovem";
			else if(idade < 60)
				faseDavida = "Adulto";
			else
				faseDavida = "Idoso";
			
			resultado += faseDavida+"\n";
			areaResultado.setText(resultado);
		}
		
		if(e.getSource() == limpar) {
			resultado = "";
			areaResultado.setText(resultado);
		}
		
	}

}
