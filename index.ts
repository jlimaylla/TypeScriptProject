import "reflect-metadata";
import { createExpressServer } from 'routing-controllers'
import { LibraryController } from './controllers/library.controller';

const aplication = createExpressServer({
  controllers: [LibraryController]
});

aplication.listen(3000);
console.log('Escuchando en http://localhost:3000');
