const book1 = {
    title: 'Green Mile',
    author: 'Stephen King',
    year: '2000',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.getSummary());

console.log(Object.keys(book1));
console.log(Object.values(book1));
