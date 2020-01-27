import { Request, Response } from 'express'
import { Customer } from '../models/Customer'
class UsuarioController{
	async listar(req: Request, res: Response) {
		try {
			const lista = await Customer.findAll()
			res.json(lista)
		} catch (e) {
			console.log(e)
			res.status(500).send(e)
		}
	}
	// async detalle(req: Request, res: Response) {
	// 	const _id = req.params._id

	// 	const elemento = await Customer.findOne({ _id })

	// 	res.json(elemento)
	// }
	async insertar(req: Request, res: Response) {
		try {
			const datos = req.body
			const user = new Customer(datos)
			const resultado = await user.save()
			res.status(201).json(resultado)
		} catch (error) {
			console.log(error)
			res.status(400).send(error)
		}
	}
}
export default UsuarioController
