package notas01;

public class Boletim {
	String aluno;
	float portugues;
	float matematica;
	float ciencias;
	
	float media() {
		return (matematica + portugues + ciencias) / 3;
	}
}
