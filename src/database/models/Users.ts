import {Model, Column, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';


@Table
export class Users extends Model<Users> {

  @Column({primaryKey: true, autoIncrement: true})
  id!: number;

  @Column({unique: true})
  email!: string;

  @Column
  nickname!: string;

  @Column @CreatedAt
  createdAt!: Date;

  @Column @UpdatedAt
  updatedAt!: Date;
}
