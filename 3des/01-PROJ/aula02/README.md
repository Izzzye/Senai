# Recursos Avançados - ORM Prisma
## Projeto Exemplo
### Sistema de Gestão de pediso em um Restaurante
- ![Lousa1](lousa1.jpg)

## Passo a passo para um novo projeto com Prisma
- ![Lousa1](lousa2.jpg)
### Abrir o VSCode
### Abrir um terminal: CTRL + "
- Navegar até a pasta do seu projeto API.
- Instalar o risma globalmente e iniciar o projeto com MySQL
```bash
  npm i -g prisma
  prisma init --datasource-provider mysql
```
- Neste caso estamos utilizando o prisma com o SGBD mysql.
- Caso não inicie o seu projeto, reinstale a última versão LTS do nodejs
- Feche o VsCode e abra novemante, reinstalando o prisma e iniciando o projeto.
- OBS: Abrir o XAMPP Control Panel e iniciar o Apache e o MySQL (Start) 

### Configurar o .ENV
- Substituir usuario, senha, host(se necessario), porta(se necessario), database
- Ex:
  ```env
    DATABASE_URL="mysql://root@localhost:3306/restaurante?schema=public&timezone=UTC"
    # DATABASE_URL="mysql://user:senha@servidor:3306/dbname?schema=public&timezone=UTC"
  ```
### Criar os models
./prisma/schema.prisma
```javascript
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Cardapio {
  id        Int     @id @default(autoincrement())
  produto   String
  descricao String
  preco     Float
  itens     Itens[]
}

model Motoboy {
  id      Int      @id @default(autoincrement())
  nome    String
  placa   String
  modelo  String
  pedidos Pedido[]
}

model Cliente {
  id                  Int      @id @default(autoincrement())
  cpf                 String   @unique
  nome                String
  telefones           String
  enderecoCep         String
  enderecoNumero      String
  enderecoComplemento String
  pedidos             Pedido[]
}

model Pedido {
  id           Int       @id @default(autoincrement())
  clienteId    Int
  cliente      Cliente   @relation(fields: [clienteId], references: [id])
  motoboyId    Int
  motoboy      Motoboy   @relation(fields: [motoboyId], references: [id])
  dataPedido   DateTime  @default(now())
  dataCozinha  DateTime?
  dataEntrega  DateTime?
  valorPedido  Float
  valorEntrega Float?
  itens        Itens[]
}

model Itens {
  id         Int      @id @default(autoincrement())
  pedidoId   Int
  pedido     Pedido   @relation(fields: [pedidoId], references: [id])
  cardapioId Int
  cardapio   Cardapio @relation(fields: [cardapioId], references: [id])
  quantidade Int
}
```
### Gerar a migrate para criar a base de dados
```cmd
  prisma migrate dev --name "descricao"
```
- Será criada uma pasta chamada migrations com o script SQL