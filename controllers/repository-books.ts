import { Book } from "../models/book";
import { Library } from "../models/library";

export class RepositoryBooks {
  private library: Library;

  constructor() {
    this.library = new Library();
    this.addBook();
  }

  private addBook(): void {
    this.library.addBook(new Book(1, 'Libro 01', 'anonimo'));
    this.library.addBook(new Book(2, 'Libro 02', 'anonimo'));
    this.library.addBook(new Book(2, 'Libro 03', 'anonimo'));
  }

  getBooks(): Book[] {
    return this.library.books;
  }

  getByTitle(title: string): Book | undefined {
    return this.library.searchBook(title);
  }
}