import { Injectable } from '@nestjs/common'
import { ICat } from './interfaces'
import { ListAllEntities } from './dtos'

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = []

  create(cat: ICat) {
    if (!cat) return

    this.cats.push(cat)
  }

  findAll(pageOptions: ListAllEntities): ICat[] {
    console.log(pageOptions)

    return this.cats
  }
}
