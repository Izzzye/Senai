package padrao;

public class Main {

	public static void main(String[] args) {
		
		//Objetos
		Gato gato1 = new Gato();
		Gato gato2 = new Gato();
		Gato gato3 = new Gato();
		Gato gato4 = new Gato();
		
		//Configurar atributos
		gato3.nome = "tutu";
		gato3.raca = "Vira lata";
		gato3.peso = 3.5f;
		gato3.mia();
		
		//Utilizar os métodos
		gato1.ronronar();
		gato2.mia();
	}

}
