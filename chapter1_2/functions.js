// Functions and Object Oriented

// @ts-check
/* eslint-disable */

function sayHello() {
    console.log('Hello');
}

sayHello();


/* function with parameter */
function output(text) {
    console.log(text);
  }
  
  output('Hello!');
  
  output('Hello!', 'Other text');

  /*function using the return statement*/
  function sum(num1, num2) {
    return num1 + num2;
  }

  var result = sum(1,2);
  output(result);

  // @ts-check
/* eslint-disable */

/* Object example 1 */
var obj = new Object();

/* Object example 2 */
var obj = {};

obj = {
    name: {
      first: 'Gandalf',
      last: 'the Grey'
    },
    address: 'Middle Earth'
  };
  

/* Object example 3 */
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
      console.log(this.isbn);
    };
  }
  //book.printIsbn();

  var book = new Book ('title', 'pag', 'isbn');
  console.log(book.title);  // outputs the book title

  book.title = 'new.title';  //update the value of the book title

  console.log(book.title); //outputs the updated value

  Book.prototype.printTitle = function() {
    console.log(this.title);
  };
  
  book.printTitle();

book.printIsbn();