import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getTypeormConfig = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
  return {
    type: "postgres",
    host: configService.get<string>("DB_HOST") || "localhost",
    port: configService.get<number>("DB_PORT") || 5432,
    username: configService.get<string>("DB_USER") || "postgres",
    password: configService.get<string>("DB_PASSWORD") || "",
    database: configService.get<string>("DB_NAME") || "f_palace",
    entities: ["dist/modules/**/entities/*.entity.{js,ts}"],
    migrations: ["dist/migrations/*.{js,ts}"],
    synchronize: false,
    logging: true,
  }
}