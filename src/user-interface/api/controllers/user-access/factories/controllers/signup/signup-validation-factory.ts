import { ValidationComposite, RequiredFieldValidation, CompareFieldsValidation, EmailValidation } from '@/user-interface/common/validation/validators'
import { Validation } from '@/user-interface/common/interfaces/validation'
import { EmailValidatorAdapter } from '@/infra/adapters/validators/email-validator-adapter'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'cpf', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
