function Image(props) {
    return <div className="image card-body"><img src={props.src} alt="im" style={{ width: "150px" }} /></div>;
  }

  export default Image;