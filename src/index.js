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
                    <BookItem book={book} removeBook={this.removeBook} />
                  </div>
                </div>
              );
            })}
          </div>
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
