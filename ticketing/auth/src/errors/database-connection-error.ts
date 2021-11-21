import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 400;
  constructor() {
    super("Error connecting to db");

    Object.setPrototypeOf(this, DatabaseConnectionError);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
