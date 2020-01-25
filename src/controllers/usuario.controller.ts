import { Request, Response } from "express";
class UsuarioController {

  public getTestUser(req: Request, res: Response) {
    res.json({
      message: "Hola mysql"
    });
  }
}
export default UsuarioController