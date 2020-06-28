function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//inherit proto
Magazine.prototype = Object.create(Book.prototype);
//change constr from book to mag
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine('Cosmo', 'Helen York', '2020', 'Jun');

console.log(mag1);