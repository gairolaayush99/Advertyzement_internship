
import "../App.css";
import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.data,
        });
      });
  }

  render() {
    const { items, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>LOADING......</div>;
    } else {
      return (
        <div className="note-wrapper">
          {items.map((item) => (
            <div className="card" key={item.id}>
              <div
                style={{
                  fontFamily: "sans-serif",
                  color: "#fff8",
                  display: "flex",
                }}
              >
                <h1 style={{ marginTop: "20px" }}>
                  {item.id}) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h1>
                <img src={item.avatar} alt="asd" />
              </div>
              <br />
              <br />
              <h4>Name: &nbsp; &nbsp; {item.first_name} &nbsp; </h4>
              <br />
              <br />
              <div className="text-wrapper">
                <p style={{ paddingBottom: "50px" }}>Email : {item.email}</p>
              </div>

              <div className="card-footer">
                {item.first_name} {item.last_name}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Details;
