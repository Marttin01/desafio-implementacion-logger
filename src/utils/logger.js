import winston from "winston"


const customLevels = {
    levels: {
        fatal:0,
        error:1,
        warning:2,
        info:3,
        http:4,
        debug:5
    },
    colors: {
        fatal:'red',
        error:'orange',
        warning:'yellow',
        info:'blue',
        debug:'white'
    }
}

export const loggerProd = winston.createLogger({
    levels:customLevels.levels,
    transports: [
        new winston.transports.Console({
            level:'info',
            // format:winston.format.colorize({colors: customLevels.colors})
        }),
        new winston.transports.File({
            filename:'./errors.log',
            level:'error'
        })
    ]
})

export const loggerDev = winston.createLogger({
    levels:customLevels.levels,
    transports: [
        new winston.transports.Console({
            level:'debug',
            // format:winston.format.colorize({colors:customLevels.colors})
        })
    ]
}) 