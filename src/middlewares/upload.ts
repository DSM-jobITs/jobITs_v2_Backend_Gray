import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import path from "path";
import config from "@/config";

const s3 = new aws.S3({
  accessKeyId: config.s3.access,
  secretAccessKey: config.s3.secret,
  region: config.s3.region,
});

export const uploadMiddleware = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.s3.region,
    key: (req, file, cb) => {
      const extention = path.extname(file.originalname);
      cb(null, Date.now().toString() + extention);
    },
    acl: "public-read-write",
  }),
});
