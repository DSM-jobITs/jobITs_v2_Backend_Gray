import config from "./src/config";
import { Depart } from "./src/entities";
import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "mysql",
  host: config.mysql.host,
  port: 3306,
  username: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.name,
  synchronize: true,
  logging: true,
  entities: [Depart],
};

export default connectionOptions;
