import { makeLoginValidation } from './login-validation-factory'
import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '@/user-interface/common/validation/validators'
import { EmailValidator } from '@/user-interface/common/validation/interfaces/email-validator'
import { Validation } from '@/user-interface/common/interfaces/validation'

jest.mock('@/user-interface/common/validation/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('LoginValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeLoginValidation()
    const validations: Validation[] = []
    for (const field of ['email', 'password']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
