import HttpError from "./httpError";

export const BadRequest = new HttpError(400, "Bad Request");
export const TokenRequired = new HttpError(401, "Token Required");
export const InvalidToken = new HttpError(403, "Invalid Token");
export const ApiNotFound = new HttpError(404, "Api Not Found");
export const UserNotFound = new HttpError(404, "User Not Found");
export const RecruitNotFound = new HttpError(404, "Recruit Not Found");
export const IsNotAdmin = new HttpError(409, "This User is Not Admin");
export const AlreadyExistsData = new HttpError(409, "Already Exists Data");
