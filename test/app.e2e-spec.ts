import { Test, TestingModule } from '@nestjs/testing';
import {
  INestApplication,
  ValidationPipe,
  ValidationError,
} from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ValidationFilter } from './../src/validation/validation.filter';
import { ValidationException } from './../src/validation/validation.exception';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
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
    await app.init();
  });

  it('/api/search (POST)', async () => {
    const result = await request(app.getHttpServer())
      .post('/api/search')
      .send({ searchType: 'users', searchText: 'cs12b015' })
      .set('Accept', 'application/json');
    expect(result.body.items[0].type).toBe('User');
  });

  it('/api/clear-cache (PATCH)', () => {
    return request(app.getHttpServer()).patch('/api/clear-cache').expect(204);
  });

  it('/api/search (POST) minimum searchText error check', async () => {
    return request(app.getHttpServer())
      .post('/api/search')
      .send({ searchType: 'users', searchText: 'xx' })
      .set('Accept', 'application/json')
      .expect(400);
  });

  it('/api/search (POST) invalid searchType error check', async () => {
    return request(app.getHttpServer())
      .post('/api/search')
      .send({ searchType: 'repos', searchText: 'github' })
      .set('Accept', 'application/json')
      .expect(400);
  });
});
