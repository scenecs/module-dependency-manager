import { module } from './decorators/module';


@module({
    file: 'composer.json',
    type: 'composer'
})
export class ComposerModule {}
