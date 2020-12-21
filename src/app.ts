import "module-alias/register";
import "reflect-metadata";
import express from "express";

import loader from "@/loaders";
import config from "@/config";
import logger from "@/loaders/logger";

async function startServer() {
  const app = express();
  await loader(app);
  app.listen(config.port, () => {
    logger.info(`Server listening on ${config.port}`);
  });
}

startServer();
