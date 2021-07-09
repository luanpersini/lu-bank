# Título

> ## Caso de sucesso

1. ✅ Valida se a requisição foi feita por um **usuário**


> ## Exceções

1. ⛔️ Retorna erro **404** se a API não existir

- user-interface
    - Api
      - Controllers
        - component-name
            - controller-name
              [ ] controller
              [ ] controller tests
              [ ] controller protocols
            - factories
              [ ] controller-factory
              [ ] validation factory
              [ ] validation factory test
- infra
  - Server
    - config
      - routes
        [ ] component-name
  - usecases-factory
    [ ] usecase-name
- core
  - components
    - component-name
      - domain
        [ ] models (entities, aggregates e value objects)
        [ ] services
      - usecase-name
        [ ] usecase interface
        [ ] usecase implementation
        [ ] usecase test
      - repositories
        [ ] usecase-repository-i
        - infra.repository-implementation
          [ ] usecase-repository-mongo
          [ ] usecase-repository-sql   