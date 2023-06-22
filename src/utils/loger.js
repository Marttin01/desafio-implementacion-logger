import { log } from 'console'
import fs from 'fs/promises'
import config, { environment } from '../config/config.js'
import { LOG } from '../server.config/server.config.js'

class Logger {
    constructor(entorno, nivelImportancia){
        this.entorno = entorno
        this.nivelImportancia = nivelImportancia
    }

    log(mensaje, importancia){
        if(importancia <= this.nivelImportancia){
                const registro = `${new Date().toLocaleString()}: ${mensaje}` + '\n'
            if(this.entorno === 'desarrollo'){
                console.log(registro)
            }else {
                fs.appendFile('eventos.log', registro)
            }
        }   
    }
}

export const logger = new Logger(environment, LOG)