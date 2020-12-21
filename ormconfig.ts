import config from "./src/config";
import { Depart } from "./src/models";

export = {
  type: "mysql",
  host: config.mysql.host,
  port: 3306,
  username: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.name,
  synchronize: false,
  logging: true,
  entities: [Depart],
};
