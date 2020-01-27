// lib/models/node.model.ts
import {Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt} from "sequelize-typescript";
@Table
export class Customer extends Model<Customer> {
  @PrimaryKey
  @Column
  id!: string;
  @Column
  identityDocumentType: string;
  @Column
  name!: string;
  @CreatedAt
  creationDate: Date;
  @UpdatedAt
  updatedOn: Date;
  @DeletedAt 
  deletedAt: Date;
}