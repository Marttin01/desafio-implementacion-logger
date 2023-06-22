import dotenv from 'dotenv'
import { definedProgram } from './program/program.js'

export const environment = definedProgram.opts().mode
export const logLevel = definedProgram.opts().log

dotenv.config({
    path:environment ==='desarrollo'?'./src/config/env/.env.desarrollo':'./src/config/env/.env.produccion'
})

export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    logLevel: process.env.LOG_LEVEL
}