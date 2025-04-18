import express from "express";
import useCatchErrors from "../lib/error.js";
import UserController from "../controller/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

export default class UserRoute {
  router = express.Router();
  userController = new UserController();
  path = "/user";

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // get user data
    this.router.get(
      `${this.path}`,
      useCatchErrors(
        isAuthenticated(this.userController.getUser.bind(this.userController))
      )
    );
  }
}
