  
import { Express, Request, Response } from 'express'
import { UsuarioController } from "../controllers/index";
export class Routes {
  public UsuarioController: UsuarioController = new UsuarioController();
  public routes(app:Express): void {
    app.route("/").get(this.UsuarioController.getTestUser);
    //app.route("/nodes").get(this.UsuarioController.index);
  }
}