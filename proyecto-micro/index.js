import express from "express";
import cors from "cors";
import {getConexion} from "./db/mongo_connection.js";
import Cliente from "./models/Cliente.js";
import Etapa from "./models/Etapa.js";
import Universidad from "./models/Universidad.js";
import TipoDeProyecto from "./models/TipoDeProyecto.js";
import { URL_BASE, PORT } from "./config.js";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
getConexion();
app.use("/", router);
app.listen(PORT, () => console.log(`${URL_BASE}:${PORT}`))