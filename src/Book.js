import React from 'react';

const Book = ({ img, title, author }) => {
    // const { img, title, author } = props;
    return (
        <article className="book">
            <img src={img} alt="Book cover"></img>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};

export default Book;
// we can only have one default export in a file. But, can have multiple named exports.