import express from "express";
import "express-async-errors";

import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);
// app.get('/api/users/hello', (req,res) => {
//     res.send('Hi there~~')
// })

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!");
});
