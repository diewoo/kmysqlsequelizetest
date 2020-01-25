import * as express from "express";
import { json, urlencoded } from 'body-parser'
import { Routes } from './routes/index'
import { Express } from 'express'
export class App {
  public app: Express;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }
}
export default new App().app;