package ex01;

import javax.swing.JOptionPane;

public class Paciente {
	
	public Paciente(String nome, String peso, String altura) {
		this.nome = nome;
		try {
			this.peso = Float.parseFloat(peso);
			this.altura = Float.parseFloat(altura);
		} catch (Exception e) {
			JOptionPane.showMessageDialog(null, e);
		}
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public float getPeso() {
		return peso;
	}

	public void setPeso(float peso) {
		this.peso = peso;
	}

	public float getAltura() {
		return altura;
	}

	public void setAltura(float altura) {
		this.altura = altura;
	}

	private String nome;
	private float peso;
	private float altura;
	
	
	public float obterIMC() {
		return this.peso / this.altura;
	}
	
	public String obterDiagnostico() {
		if(obterIMC() < 18.5)
			return "Magreza";
		else if(obterIMC() < 25)
			return "Normal";
		else if(obterIMC() < 30)
			return "Sobrepeso";
		else if(obterIMC() < 40)
			return "Obesidade";
		else
			return "Obesidade Grave";
	}

	public String toString() {
		return String.format("%s\t%.1f\t%.2f\t%.1f\t%s", nome, peso, altura, obterIMC(), obterDiagnostico());
	}
	
	
}
