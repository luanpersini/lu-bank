import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '@/user-interface/common/validation/validators'
import { Validation } from '@/user-interface/common/interfaces/validation'
import { EmailValidatorAdapter } from '@/infra/adapters/validators/email-validator-adapter'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
