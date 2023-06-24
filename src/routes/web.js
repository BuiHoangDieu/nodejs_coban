import express from "express";
import { homePage } from "../controller/homController";

let router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homePage);

    return app.use(router);
}

export default initWebRouter;