// src/server.ts
import app from './app'
import { initializeDatabase as sequelize } from './config/index'
const PORT = process.env.PORT || 3000;
(async () => {
	try {
		await app.listen(PORT, () => console.log(`Server app listening on port ${PORT}!`))
	} catch (error) {
		console.log(error)
	}
	try {
		await sequelize.sync({ force: true })
	} catch (error) {
		console.log(error)
	}
})()
