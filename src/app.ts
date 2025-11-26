import express from "express";

import cors from "cors";
import router from "./routes/routes";   

class App {
    app: any;
    constructor() {
        this.app = express();

        this.middleware()
        this.routes()

    }

    middleware() {
        this.app.use(express());
        this.app.use(cors());
    }
    routes() {
    this.app.use(router)
    }
}

export default new App().app;