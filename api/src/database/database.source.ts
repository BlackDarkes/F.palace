import { config } from "dotenv";
import { DataSource } from "typeorm";

config();

export const AppDatabaseSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT!) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "f_palace",
  entities: [__dirname + "/../modules/**/entities/*.entity.ts"],
  migrations: [__dirname + "/../migrations/*.ts"],
  synchronize: false,
  logging: true,
});