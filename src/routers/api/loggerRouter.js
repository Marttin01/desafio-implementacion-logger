import { Router } from "express"
import { testController } from "../../controllers/api/testController.js"

export const loggerRouter = Router()

loggerRouter.get('/', testController)