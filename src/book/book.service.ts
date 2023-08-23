import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne({where : {id: id}});
  }

  create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async update(id: number, book: Book): Promise<Book> {
    await this.bookRepository.update(id, book);
    return this.bookRepository.findOne({where : {id: id}});
  }

  async remove(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
