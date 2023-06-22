import mongoose from "mongoose";
import { app } from "../app.js";
import { MONGO_CNX } from "../server.config/mongo.config.js";
import { PORT } from "../server.config/server.config.js";
import { logger } from "../utils/loger.js";

mongoose.connect(MONGO_CNX)

app.listen(PORT,() => logger.log(`Servidor levantado en ${PORT}`, 6))