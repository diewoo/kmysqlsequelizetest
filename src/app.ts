import * as express from "express";
import { json, urlencoded} from 'body-parser'
import { CustomerRoutes } from './routes/index'
import { Express } from 'express'
export class App {
  public app: Express;
  public routeCustomer: CustomerRoutes = new CustomerRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.routeCustomer.routes(this.app);
  }

  private config(): void {
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }
}
export default new App().app;