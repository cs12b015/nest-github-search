import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ValidationException } from './validation/validation.exception';
import { ValidationFilter } from './validation/validation.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { User } from './api/models/user.model';
import { Repo } from './api/models/repo.model';
import { Issue } from './api/models/issue.model';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NEST GITHUB SEARCH API')
    .setDescription('Api for github search')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    extraModels: [User, Repo, Issue],
  });

  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map(
          (error) => `${error.property} has wrong value ${error.value},
            ${Object.values(error.constraints).join(', ')} `,
        );
        return new ValidationException(messages);
      },
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
