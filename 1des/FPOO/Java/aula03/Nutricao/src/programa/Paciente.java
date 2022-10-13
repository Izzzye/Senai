package programa;

public class Paciente {
	String nome;
	float peso;
	float altura;
	
	float imc() {
		return peso / (altura * altura);
	}
	
	String diagnostico() {
		if (imc() < 16)
			return "Subpeso Severo";
		else if (imc() < 19.9)
			return "Subpeso";
		else if (imc() < 24.9)
			return "Normal";
		else if (imc() < 29.9)
			return "Sobrepeso";
		else if (imc() < 39.9)
			return "Obeso";
		else return "Obeso Mórbido";	
	}
	
	public String toString() {
		return String.format("[%s]\t[%.1f]\t[%.2f]\t[%.1f]\t[%s]", nome, peso, altura, imc(), diagnostico());
	}
}
