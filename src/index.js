import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

import { books } from './books'; // js file, so no need to specify extension.
// this is a named export, not a default export. So, name needs to match the name in the other file. (books)

import Book from './Book'; // this is a default export, so we can name it whatever we want. However, I still went with the same name (Book) since it makes the most sense.
// We also do not have to destructure the export, since default export is only one.

function BookList() {
    return (
      <section className="booklist">
          {books.map(book => <Book key={book.id} {...book} />)}
      </section>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root')); 