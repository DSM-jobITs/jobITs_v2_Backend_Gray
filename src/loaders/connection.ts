import { createConnection } from "typeorm";
import logger from "@/loaders/logger";
import connectionOptions from "@/../ormconfig";

export default async () => {
  try {
    await createConnection(connectionOptions);
  } catch (e) {
    logger.error(`mysql connection error : ${e.message}`);
    process.exit(1);
  }
};
