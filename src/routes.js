import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionControler from "./app/controllers/SessionController";
import MailController from "./app/controllers/MailController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.get("/", (req, res) => {
  res.json({ Server: "ON" });
});

routes.post("/send-email", MailController.store);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionControler.store);

routes.use(authMiddleware);

routes.put("/users", UserController.update);

export default routes;
