import Image from "./Image.jsx";
const BookItem = props => {
    console.log("props:");
    console.log(props);
    return (
      <div>
        <div className="card-title"><h5>{props.book.name}</h5></div>
        <Image src={props.book.imageCover} />
        <button onClick={props.removeBook.bind(null, props.book)}>Delete</button>
      </div>
    );
  };
  export default BookItem;