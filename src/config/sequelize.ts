import { Sequelize } from "sequelize-typescript";
export const sequelize = new Sequelize({
  username: "root",
  password: "password",
  dialect: "mysql",
  database: "ktest",
  storage: ":memory:",
  host: "127.0.0.1",
  models: [__dirname + '/../models']
});