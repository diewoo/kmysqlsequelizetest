// lib/models/node.model.ts
// import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import {Model, Column, Table, PrimaryKey, ForeignKey} from "sequelize-typescript";
@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id!: string;
  @Column
  name!: string;
}