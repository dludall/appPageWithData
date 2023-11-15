

export class Book {
    id: number;
    name: string;
    website: string;
    writer: string;
    category: string[] =[];
  
    constructor(book: { id: number; name: string; website: string; writer: string; category:string[] }) {
        {
          this.id = book.id;
          this.name = book.name || '';
          this.website = book.website || '';
          this.writer = book.writer || '';
          this.category = book.category || [];
        }
    }
  }