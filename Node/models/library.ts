import { Book } from './book'
export class Library {
  books: Book[];

  constructor() {
    this.books = []
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  searchBook(title: string) {
    return this.books.find(x => x.title.toLowerCase().includes(title.toLowerCase()))
  }
}