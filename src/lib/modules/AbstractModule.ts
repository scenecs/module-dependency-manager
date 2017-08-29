import { ModuleInterface } from './ModuleInterface';

export abstract class AbstractModule  implements ModuleInterface {
    public file : string;
    public type : string;
}
