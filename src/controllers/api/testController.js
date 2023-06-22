import config, { environment } from "../../config/config.js";
import { loggerDev, loggerProd } from "../../utils/logger.js";

export function testController (req,res,next){
    if(environment === 'desarrollo'){
        loggerDev.debug('Mensaje de prueba debug')
        loggerDev.http('Mensaje de prueba http')
        loggerDev.info('Mensaje de prueba info')
        loggerDev.warning('Mensaje de prueba warning')
        loggerDev.error('Mensaje de prueba error')
        loggerDev.fatal('Mensaje de prueba fatal')
    }else{
        loggerProd.info('Mensaje de prueba produccion info')
        loggerProd.warning('Mensaje de prueba produccion warning')
        loggerProd.error('Mensaje de prueba produccion error')
        loggerProd.fatal('Mensaje de prueba produccion fatal')
    }
}