import { Level } from './level';
import { Display } from './display';

import { contain } from './include';

export class Logger<T> {

    constructor(
        private name: string,
        public color: string,
        private display: (name: string, data: any, leve: Level, moduleName: string) => void,
        private developmentMode: boolean,
        private allowed: Level[]) {
    }

    d(name: string, ...data: any[]) {
        if (this.allowed.length >= 1 && contain(this.allowed, Level.__NOTHING)
            && !contain(this.allowed, Level.DATA)) return this;
        if (Logger.isProductionMode) return this;
        if (this.display !== undefined) this.display(name, data, Level.DATA, this.name);
        else if (this.allowed.length === 0 || contain(this.allowed, Level.DATA)) {
            Display.msg(name, data, this.name, this.color, Level.DATA);
        }
        return this;
    }

    er(name: string, ...data: any[]) {
        if (this.allowed.length >= 1 && contain(this.allowed, Level.__NOTHING)
            && !contain(this.allowed, Level.ERROR)) return this;
        if (Logger.isProductionMode) return this;
        if (this.display !== undefined) this.display(name, data, Level.ERROR, this.name);
        else if (this.allowed.length === 0 || contain(this.allowed, Level.ERROR)) {
            Display.msg(name, data, this.name, this.color, Level.ERROR);
        }
        return this;
    }

    i(name: string, ...data: any[]) {
        if (this.allowed.length >= 1 && contain(this.allowed, Level.__NOTHING)
            && !contain(this.allowed, Level.INFO)) return this;
        if (Logger.isProductionMode) return this;
        if (this.display !== undefined) this.display(name, data, Level.INFO, this.name);
        else if (this.allowed.length === 0 || contain(this.allowed, Level.INFO)) {
            Display.msg(name, data, this.name, this.color, Level.INFO);
        }
        return this;
    }

    w(name: string, ...data: any[]) {
        if (this.allowed.length >= 1 && contain(this.allowed, Level.__NOTHING)
            && !contain(this.allowed, Level.WARN)) return this;
        if (Logger.isProductionMode) return this;
        if (this.display !== undefined) this.display(name, data, Level.WARN, this.name);
        else if (this.allowed.length === 0 || contain(this.allowed, Level.WARN)) {
            Display.msg(name, data, this.name, this.color, Level.WARN);
        }
        return this;
    }

    private _level: Level = undefined;
    private level(l: Level) {
        this._level = l;
        return this;
    }

    public static isProductionMode: boolean = false;


}
