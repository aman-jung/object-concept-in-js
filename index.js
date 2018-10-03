//object literal

const book = {
  title: "Alice is wonderLand",
  author: "By Aman",
  year: "2018",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};
console.log(Object.values(book));
console.log(book.getSummary());
