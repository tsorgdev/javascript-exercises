const getTheTitles = function(books) {
    const newBooks = [];
    books.forEach(book => newBooks.push(book.title));
    return newBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
