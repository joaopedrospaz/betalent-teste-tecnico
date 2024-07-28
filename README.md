# Boas vindas ao repositório do Teste técnico da BeTalent

Para rodar o projeto, siga os passos descrito a seguir:

<details>
<summary><strong> 🔰 Iniciando o projeto</strong></summary><br />
  
  1. Clone o repositório `git clone git@github.com:joaopedrospaz/betalent-teste-tecnico.git`
  
  2.  Entre na pasta do repositório que você acabou de clonar:
  * `cd pasta-do-repositório`

  3. Instale as dependências:
  * `npm install`

  4. Suba o container do MySql:
  * `docker-compose up -d`
    
  5. Execute as Migrations:
  * `npm run migration`

  6. Execute as Seeders:
  * `npm run seed`
    
  7. Rode o projeto:
  * `npm run dev`  
  
</details>

# Rotas do Projeto

<details>
<summary><strong> Utilize o form-data do Postman para enviar as informações</strong></summary><br />

  ![image](https://github.com/user-attachments/assets/19b5bdf3-4dee-4a4f-89cd-f9e59bfdff53)
</details>
<details>
<summary><strong> POST /users/login </strong></summary><br />
  
  * Nessa rota você fará login como usuário, recebendo um token que deverá ser enviado pelo `Authorization` em `Headers` para que tenha acesso as outras rotas:
    ![image](https://github.com/user-attachments/assets/94f35a74-60fc-499e-9e0f-25982f2ad7d5)

  * Exemplo de como fazer um login válido:
    ![image](https://github.com/user-attachments/assets/74b85205-243a-4687-9a17-fe50aa2bb6a2)
  * `email`: `joao.silva@example.com`
  * `password`: `password123`
</details>
<details>
<summary><strong> POST /users/signup </strong></summary><br />
  
  * Essa é a rota para registrar um novo usuário.
  * Exemplo de como fazer uma requisição válida:
  
  ![image](https://github.com/user-attachments/assets/d4fa40b0-70aa-49a0-a713-0ab0bd15671b)
</details>
<details>
<summary><strong> GET /customers </strong></summary><br />
  
  * Essa é a rota para listar todos os clientes.
  * Não Necessita enviar nada no body:
    ![image](https://github.com/user-attachments/assets/d9ffcfbc-bf52-42bc-b6fc-8ce19e504e5b)
</details>
<details>
<summary><strong> GET /customers/:id </strong></summary><br />
  
  * Essa é a rota para datalhar um cliente.
  * Nessa rota o id deverá ser enviado como parâmetro, não necessita enviar nada no body:
    ![image](https://github.com/user-attachments/assets/9e70b647-85aa-49e0-ac5d-7fbcd43899cf)
</details>
<details>
<summary><strong> POST  /customers/ </strong></summary><br />
  
  * Essa é a rota para registrar um novo cliente.
  * Exemplo de como fazer uma requisição válida:
  
  ![image](https://github.com/user-attachments/assets/d28a5521-ac93-4a3b-baad-e6918d04105d)
</details>
<details>
<summary><strong> PATCH  /customers/:id </strong></summary><br />
  
  * Essa é a rota para editar um cliente.
  * Exemplo de como fazer uma requisição válida:
  * O id deverá ser enviado pelo paramâmetro e pelo menos um dos campos precisa ser enviado:
  ![image](https://github.com/user-attachments/assets/4514875e-1f0c-427c-8f6e-ff4462da3a36)
</details>
<details>
<summary><strong> DELETE  /customers/:id </strong></summary><br />
  
  * Essa é a rota para deletar um cliente.
  * Nessa rota o id deverá ser enviado como parâmetro, não necessita enviar nada no body:
  ![image](https://github.com/user-attachments/assets/2bd762af-fd9c-4ac5-a2e8-903dc6157e03)
</details>
<details>
<summary><strong> GET /products </strong></summary><br />
  
  * Essa é a rota para listar todos os produtos.
  * Não Necessita enviar nada no body:
  ![image](https://github.com/user-attachments/assets/10df06ed-7bef-43f1-b3b6-fd1499e9587a)
</details>
<details>
<summary><strong> GET /products/:id </strong></summary><br />
  
  * Essa é a rota para datalhar um produto.
  * Nessa rota o id deverá ser enviado como parâmetro, não necessita enviar nada no body:
    ![image](https://github.com/user-attachments/assets/2c0d3927-20a4-4dcb-b292-b9c37a4c4f5e)
</details>
<details>
<summary><strong> POST  /products/ </strong></summary><br />
  
  * Essa é a rota para registrar um novo produto.
  * Exemplo de como fazer uma requisição válida:
  
 ![image](https://github.com/user-attachments/assets/4fc831b0-d2ee-4cec-8c87-139603e20106)
</details>
<details>
<summary><strong> DELETE  /products/:id </strong></summary><br />
  
  * Essa é a rota para deletar um produto.
  * Nessa rota o id deverá ser enviado como parâmetro, não necessita enviar nada no body:
  ![image](https://github.com/user-attachments/assets/2b1a25f8-f605-4dc1-a935-fe9bd9c4c5b0)
</details>
<details>
<summary><strong> PATCH  /products/:id/restore </strong></summary><br />
  
  * Essa é a rota para restaurar um produto deletado.
  * Nessa rota o id deverá ser enviado como parâmetro, não necessita enviar nada no body:
  ![image](https://github.com/user-attachments/assets/72071177-203b-40bb-960b-dcfcfa06b6b8)
</details>
<details>
<summary><strong> POST  /products/ </strong></summary><br />
  
  * Essa é a rota para registrar uma nova venda.
  * Exemplo de como fazer uma requisição válida:
  
 ![image](https://github.com/user-attachments/assets/ece8f609-63dc-4d3d-9443-1d5e697a5cf4)
 * `🟥 Atenção para as chaves dos objetos, elas devem vir com aspas.`
 * Pode ser enviado mais de um produto por venda
</details>
<details>
<summary><strong> POST  /address/ </strong></summary><br />
  
  * Essa é a rota para registrar um novo endereço.
  * Exemplo de como fazer uma requisição válida:
  
 ![image](https://github.com/user-attachments/assets/87fbb857-3479-405e-97ba-d366ce915a44)

</details>
