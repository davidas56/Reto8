import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './book.entity';

describe('BookController', () => {
  let controller: BookController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        BookService,
        {
          provide: getRepositoryToken(Book),
          useValue: {}, // Puedes usar un objeto vacío como stub
        },
      ],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  afterAll(async () => {
    await module.close(); // Cierra el módulo después de las pruebas
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Agrega más pruebas aquí

});
