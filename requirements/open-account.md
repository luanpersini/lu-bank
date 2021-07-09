# Abrir Conta

## Caso de sucesso

1. - [ ] Recebe uma requisição do tipo **POST** na rota **/api/open-account**
2. - [ ] **Valida** se já existe uma conta bancária com o userId fornecido
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
            * [ ] open-account-controller
            * [ ] open-account-controller.spec
            * [ ] open-account-controller-protocols
              - factories
              * [ ] open-account-controller-factory            
- infra
  - Server
    - config
      - routes
      * [ ] bank-account-routes
      * [ ] bank-account-routes.test
  - usecases-factory
    * [ ] bank-account
     * [ ] usecase-name
- core
  - components
    - component-name
      - domain
        * [ ] models (entities, aggregates e value objects)
        - bank-account
      - usecase-name
        * [ ] open-account interface
        * [ ] open-account-usecase
        * [ ] open-account-usecase.spec 
        * [ ] open-account-usecase-protocols
      - repositories
        * [ ] usecase-repository-i
        * [ ] open-account-repository
        - infra.repositories
          * [ ] bank-account-mongo-repository
          * [ ] bank-account-mongo-repository.spec
