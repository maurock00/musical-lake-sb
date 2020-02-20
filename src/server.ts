import express, {Express} from "express";
import "reflect-metadata";
import {Server} from "http";
import {InversifyExpressServer} from "inversify-express-utils";
import CONTAINER from "./infrastructure/Container";

import './controllers/MusicController';

const app: Express = express();
const port: number = Number(process.env.PORT) || 500;

let server: InversifyExpressServer =  new InversifyExpressServer(CONTAINER, null, { rootPath: "/api" }, app);

let appConfigured = server.build();
let serve: Server = appConfigured.listen(port, () => `App running on ${port}`);
