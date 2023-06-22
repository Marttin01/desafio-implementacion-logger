import { Command } from "commander"

export const program = new Command()

program
    .option('-p <port>', 'el port', 8080)
    .option('--mode <mode>', 'mode de trabajo', 'desarrollo')
    .option('--log <log>', 'nivel de log', 6)
program.parse()

export const definedProgram = program