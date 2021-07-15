# Abrir Conta

## Caso de sucesso

1. - [x] Recebe uma requisição do tipo **POST** na rota **/api/open-account**
2. - [x] **Valida** se já existe uma conta bancária com o userId do usuário logado. 
3. - [x] Cria uma **conta bancária** para o usuário logado
4. - [x] Retorna **200** com os dados da conta bancária criada
<br/>

## Exceções

1. - [x] Retorna erro **404** se a API não existir
2. - [x] Retorna erro **403** se já existir uma conta bancária com o userId fornecido
3. - [x] Retorna erro **500** se der erro ao tentar criar a conta bancária

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
      * [x] bank-account-routes
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
        * [x] open-account-usecase.spec 
        * [x] open-account-usecase-protocols
      - repositories
        * [x] load-bank-account-by-userid-repository interface
        * [x] open-account-repository interface
        - infra.repositories
          * [x] bank-account-mongo-repository
          * [x] bank-account-mongo-repository.spec
