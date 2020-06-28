class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static findStore()
    {
        return 'Barnes & Noble';
    }
}

const book1 = new Book('Book One', 'Stephen King', '1990');

console.log(book1.getSummary());

book1.revise('2020');

console.log(book1);

//book1.findStore(); - error

console.log(Book.findStore());