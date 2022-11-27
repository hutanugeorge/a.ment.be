import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

await (async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
})();
