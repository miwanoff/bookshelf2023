import React from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import BookItem from "./BookItem.jsx";
import Image from "./Image.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: booksData,
      cart: [],
    };
  }

  render() {
    return (
      <div>
        <Header className="header container-fluid p-5 bg-dark text-primary text-center" />
        <div className="container text-center">
          <div className="row justify-content-center">
            {this.state.books.map((book) => {
              //console.log(book.id);
              return (
                <div key={book.id} className="col-sm-4 col-12">
                  <div className="card text-center my-5 p-3">
                    <BookItem
                      book={book}
                      removeBook={this.removeBook}
                      addBookToCart={this.addBookToCart}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-fluid text-center">
          <h4>Кошик товарів</h4>
          <p>Кількість книг: {this.state.cart.length} </p>
          <ul className="list-group">
            {this.state.cart.map((book) => (
              <li key={book.id} className="list-group-item">
                <div className="row">
                  <div className="col-4">{book.name}</div>
                  <div className="col-3">{book.author}</div>
                  <div className="col-2">{book.price}</div>
                  <div className="col-3">
                    <button
                      onClick={this.deleteBookFromCart.bind(this, book)}
                      type="button"
                      className="btn btn-outline-primary mt-auto mb-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  removeBook = (book) => {
    const updateBooks = this.state.books.filter(function (item) {
      return item.id !== book.id;
    });
    console.log(updateBooks);
    this.setState({
      books: updateBooks,
    });
  };

  addBookToCart = (book) => {
    //console.log(book);
    const goods = this.state.cart;
    goods.push(book);
    //console.log(goods);
    this.setState({
      cart: goods,
    });
  };

  deleteBookFromCart = (book) => {
    const goods = this.state.cart.filter((item) => item.id !== book.id);
    this.setState({
      cart: goods,
    });
  };
}

function Header(props) {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1 className="display-2">Книжный магазин</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
