import express from "express";
import logger from "./util/logger";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Controllers (route handlers)
import * as apiController from "./controllers/api";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * API examples routes.
 */
app.get("/api", apiController.getApi);

export default app;
