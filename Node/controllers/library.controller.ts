import { JsonController, Get, Param, QueryParam, Res } from 'routing-controllers';
import { Response } from 'express';
import { RepositoryBooks } from './repository-books';

@JsonController()
export class LibraryController {
  private repo: RepositoryBooks;
  constructor() {
    this.repo = new RepositoryBooks()
  }

  //GET
  @Get('/books')
  getBooks() {
    return this.repo.getBooks();
  }

  //GET
  @Get('/book')
  getBookByTitle(@QueryParam('title') title: string, @Res() response: Response) {
    const found = this.repo.getByTitle(title);

    if (!found) {
      return response.sendStatus(404);
    }

    return found;
  }
}