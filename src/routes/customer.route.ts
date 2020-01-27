  
import { Express } from 'express'
import { UsuarioController } from "../controllers/index";
class CustomerRoutes {
  public UsuarioController: UsuarioController = new UsuarioController();
  public routes(app:Express): void {
    app.route("/customer").get(this.UsuarioController.listar);
    app.route("/usuario").post(this.UsuarioController.insertar);
  }
}
export default CustomerRoutes;