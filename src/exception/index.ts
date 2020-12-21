export class HttpError extends Error {
  public status: number;
  public message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export const ApiNotFoundError = new HttpError(404, "Api Not Found");
