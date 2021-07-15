import { Hasher } from '@/core/ports/criptography/hasher'
import { HashComparer } from '@/core/ports/criptography/hash-comparer'
import bcrypt from 'bcryptjs'

export class BcryptJsAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number) {}

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
