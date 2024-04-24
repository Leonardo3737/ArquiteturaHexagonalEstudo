import UuidProvider from '@/core/providers/UuidProvider'
import { v4 as uuid } from 'uuid'

export default class UuidAdapter implements UuidProvider {
  generate(): string {
    return uuid()
  }
}