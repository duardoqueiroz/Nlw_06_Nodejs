import { EntityRepository, Repository } from 'typeorm'
import { Compliments } from '../entities/Compliments'

@EntityRepository(Compliments)
export class ComplimentRespositories extends Repository<Compliments> {}
