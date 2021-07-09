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
              [x]xopen-account-controller
              [x]xopen-account-controller.spec
              [x]xopen-account-controller-protocols
              - factories
                [x] open-account-controller-factory            
- infra
  - Server
    - config
      - routes
        [x] bank-account-routes
  - usecases-factory
    [ ] bank-account
      [ ] usecase-name
- core
  - components
    - component-name
      - domain
        [x] models (entities, aggregates e value objects)
        - bank-account
      - usecase-name
        [x] open-account interface
        [x] open-account-usecase
        [x] open-account-usecase.spec 
        [x] open-account-usecase-protocols
      - repositories
        [x] usecase-repository-i
        [x] open-account-repository
        - infra.repositories
          [x] bank-account-mongo-repository
          [x] bank-account-mongo-repository.spec
