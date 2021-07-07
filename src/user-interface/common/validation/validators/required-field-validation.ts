import { Validation } from '@/user-interface/common/interfaces'
import { MissingParamError } from '@/user-interface/common/errors'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
