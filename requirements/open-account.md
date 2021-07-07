# Abrir Conta

## Caso de sucesso

1. - [ ] Recebe uma requisição do tipo **POST** na rota **/api/open-account**
2. - [ ] Valida se o **userId** recebido é o mesmo que o do usuário logado
3. - [ ] **Valida** se já existe uma conta bancária com o userId fornecido
4. - [ ] Cria uma **conta bancária** para o usuário logado
5. - [ ] Retorna **200** com os dados da conta bancária criada
<br/>

## Exceções

1. - [ ] Retorna erro **404** se a API não existir
2. - [ ] Retorna erro **400** se userId recebido e o id do usuário logado não forem iguais
3. - [ ] Retorna erro **403** se já existir uma conta bancária com o userId fornecido
4. - [ ] Retorna erro **500** se der erro ao tentar criar a conta bancária
