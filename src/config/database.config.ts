import { Sequelize } from "sequelize-typescript";

export const database = new Sequelize({
  database: "some_db",
  dialect: "sqlite",
  storage: ":memory:",
  models: [__dirname + '/models']
});