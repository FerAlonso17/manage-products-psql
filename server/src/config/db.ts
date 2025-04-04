import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize-typescript";

configDotenv()
const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*.ts']
})

export default db