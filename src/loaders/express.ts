import * as express from "express";
import morgan from "morgan";
import cors from "cors";
import { ApiNotFound } from "@/exception";

export default (app: express.Application) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));

  app.use((req, res, next) => {
    next(ApiNotFound);
  });

  app.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({ message: err.message, code: err.code });
  });
};
