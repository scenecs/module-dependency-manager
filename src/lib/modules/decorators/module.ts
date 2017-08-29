import { ModuleInterface, ModuleOptionsInterface } from '../ModuleInterface';

export function module(options : ModuleOptionsInterface) {
    return function<T extends {new(...args:any[]):{}}>(constructor:T) {
        return class extends constructor implements ModuleInterface {
            file : string = options.file;
            type : string = options.type;
        }
    }
}
