# Abrir Conta

## Caso de sucesso

1. - [ ] Recebe uma requisição do tipo **POST** na rota **/api/open-account**
2. - [ ] **Valida** se já existe uma conta bancária com o userId fornecido. 
3. - [ ] Cria uma **conta bancária** para o usuário logado
4. - [ ] Retorna **200** com os dados da conta bancária criada
<br/>

## Exceções

1. - [ ] Retorna erro **404** se a API não existir
2. - [ ] Retorna erro **403** se já existir uma conta bancária com o userId fornecido
3. - [ ] Retorna erro **500** se der erro ao tentar criar a conta bancária

- user-interface
    - Api
      - Controllers
        - component-name
            - controller-name
            * [x] open-account-controller
            * [x] open-account-controller.spec
            * [x] open-account-controller-protocols
                                     
- infra
  - Server
    - config
      - routes
      * [ ] bank-account-routes
      * [ ] bank-account-routes.test
  - Factories
    - controllers
      - bank-account
        * [x] open-account-controller-factory 
    - usecases
      - bank-account
        * [x] open-account-usecase-factory
- core
  - components
    - bank-account
      - domain
        * [x] bank-account 
        * [x] agency      
      - usecase-name
        * [x] open-account interface
        * [x] open-account-usecase
        * [ ] open-account-usecase.spec 
        * [ ] open-account-usecase-protocols
      - repositories
        * [x] load-bank-account-by-userid-repository interface
        * [x] open-account-repository interface
        - infra.repositories
          * [ ] bank-account-mongo-repository
          * [ ] bank-account-mongo-repository.spec
