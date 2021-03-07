import { config } from "dotenv";

config();

export default {
  port: Number(process.env.SERVER_PORT),
  mysql: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  secretKey: process.env.JWT_SECRET,
  s3: {
    name: process.env.S3_NAME,
    access: process.env.S3_ACCESS,
    secret: process.env.S3_SECRET,
    region: process.env.S3_REGION,
  },
};
