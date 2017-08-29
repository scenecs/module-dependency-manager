import { module } from './decorators/module';
import { AbstractModule } from './AbstractModule';


@module({
    file: 'package.json',
    type: 'node'
})
export class NpmModule extends AbstractModule {}
