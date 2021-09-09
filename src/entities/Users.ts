import {
  Entity,
  PrimaryColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Exclude } from 'class-transformer'

//-------Entity Creating Process---------

@Entity('users')
class Users {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  admin: boolean

  @Exclude()
  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
export { Users }
