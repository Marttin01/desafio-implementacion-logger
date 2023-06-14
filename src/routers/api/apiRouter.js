import { Router } from "express";
import { usersRouter } from "./usersRouter.js";
import { sessionsRouter } from "./sessionsRouter.js";
import { mockinRouter } from "./mockingRouter.js";


export const apiRouter = Router()

apiRouter.use('/users', usersRouter)

apiRouter.use('/sessions', sessionsRouter)

apiRouter.use('/mockingproducts', mockinRouter)