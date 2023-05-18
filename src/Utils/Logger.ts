import * as chalk from 'chalk';
import * as moment from 'moment';

const strings = {
        Info: ' Info ',
        Error: ' Error ',
    Success: ' Success ',
        Debug: ' Debug ',
};

export interface LoggerOptions {
    prefix?: string,
    debug?: boolean,
    info?: boolean,
    error?: boolean,
    success?: boolean,
}

export class Logger {
    private options: LoggerOptions = { prefix: 'Logger', debug: true, info: true, error: true, success: true };
    private space: string = chalk.magenta.bold(' [::] ');
    constructor (options: LoggerOptions) {
        this.options = { ...this.options, ...options };
    }
    private getDay () {
        return moment().format('DD/MM/YY');
    }
    private getTime () {
        return moment().format('HH:mm:ss.SS');
    }

    info(...input: string[]) {
        if (!this.options.info) return;
        console.log([
            chalk.gray(this.getDay()) + " ",
            chalk.gray.bold(this.getTime()) + " ",
            this.options.prefix ? chalk.yellow.bold (this.options.prefix) : "",
            this.space,
            chalk.cyan.bold(strings.Info),
            chalk.cyan.bold('>: '),
            chalk.cyan.dim(input.flat().join(' ')),
        ].join(''))
    }

    error(error:Error) {
        if (!this.options.error) return;
        console.log([
            chalk.gray(this.getDay()) + " ",
            chalk.gray.bold(this.getTime()) + " ",
            this.options.prefix ? chalk.yellow.bold (this.options.prefix) : "",
            this.space,
            chalk.red.bold(strings.Error),
            chalk.red.bold('>: '),
            chalk.red.dim((error.stack ? [error.stack] : [error.name, error.message]).filter(Boolean).map(v => v.toString()).join('\n')),
        ].join(''))
    }

    success(...input: string[]) {
        if (!this.options.success) return;
        console.log([
            chalk.gray(this.getDay()) + " ",
            chalk.gray.bold(this.getTime()) + " ",
            this.options.prefix ? chalk.yellow.bold (this.options.prefix) : "",
            this.space,
            chalk.green.bold(strings.Success),
            chalk.green.bold('>: '),
            chalk.green.dim(input.flat().join(' ')),
        ].join(''))
    }
    
    debug(...input: string[]) {
        if (!this.options.debug) return;
        console.log([
            chalk.gray(this.getDay()) + " ",
            chalk.gray.bold(this.getTime()) + " ",
            this.options.prefix ? chalk.yellow.bold (this.options.prefix) : "",
            this.space,
            chalk.gray.bold(strings.Debug),
            chalk.gray.bold('>: '),
        ].join(''), ...input)
    }

    raw = {
        info: (...input: any) => {
            if (!this.options.info) return;
            console.log([
                chalk.gray(this.getDay()) + " ",
                chalk.gray.bold(this.getTime()) + " ",
                this.options.prefix ? chalk.yellow.bold (this.options.prefix) : "",
                this.space,
                chalk.cyan.bold(strings.Info),
                chalk.cyan.bold('>: '),
            ].join(''), ...input)
        },
        success: (...input: any) => {
            if (!this.options.success) return;
            console.log([
                chalk.gray(this.getDay()) + " ",
                chalk.gray.bold(this.getTime()) + " ",
                this.options.prefix ? chalk.yellow.bold (this.options.prefix) : "",
                this.space,
                chalk.green.bold(strings.Success),
                chalk.green.bold('>: '),
                chalk.green.dim(input.flat().join(' ')),
            ].join(''))
        },  
        debug: (...input: any) => {
            if (!this.options.debug) return;
            console.log([
                chalk.gray(this.getDay()) + " ",
                chalk.gray.bold(this.getTime()) + " ",
                this.options.prefix ? chalk.yellow.bold (this.options.prefix) : "",
                this.space,
                chalk.gray.bold(strings.Debug),
                chalk.gray.bold('>: '),
            ].join(''), ...input)
        }
    }
}