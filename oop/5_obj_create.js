const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

const book1 = Object.create(bookProtos);
book1.title = 'Book one';
book1.author = 'John York';
book1.year = '2011';

const book2 = Object.create(bookProtos, {
    title: {value: 'Book Two'},
    author: {value: 'Mary Smith'},
    year: { value: '2013'}
});

console.log(book1.getAge());

console.log(book2.getSummary());