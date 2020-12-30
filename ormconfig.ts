import config from "@/config";
import { Depart, Student, Enterprise, User } from "@/entities";
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
  entities: [Depart, Student, Enterprise, User],
};

export default connectionOptions;
