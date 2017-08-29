import { AbstractModule } from '../modules/AbstractModule';
import * as knownModules from '../modules';

export class ModuleRegister {
    private static instance : ModuleRegister;

    public static getInstance() {
        if (!this.instance) {
            const modules : { [key : string] : typeof AbstractModule }  = <{ [key : string] : any }>knownModules;

            this.instance = new ModuleRegister(Reflect.ownKeys(modules).map((key : string) => Reflect.construct(modules[key], [])));
        }

        return this.instance;
    }

    private moduleList : Array<AbstractModule> = [];

    private constructor(modules? : Array<AbstractModule>) {
        if (modules) {
            modules.forEach((module : AbstractModule) => this.registerModuleType(module));
        }
    }

    public registerModuleType(module : AbstractModule) : void {
        const type : string = module.type;


    }
}
