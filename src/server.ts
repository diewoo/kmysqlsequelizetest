// src/server.ts
import app from './app';
import { sequelize } from './config/index';
const PORT = process.env.PORT || 3000;
(async () => {
	try {
		await sequelize.sync({ force: false })
		app.listen(PORT, () => console.log(`Server app listening on port ${PORT}!`))
	} catch (error) {
		console.log(error)
	}
})()
