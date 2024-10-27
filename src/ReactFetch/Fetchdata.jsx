import { Component } from "react";

import "./style.css";

class Data extends Component {
  constructor() {
    super();
    this.state = {
      api:[]
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({
          api: res,
        });
      });

    console.log("componentdidmount");
  }

  render() {
    var aa = this.state.api.map((val, ind) => {
      const Mystyle = {
        color: "black",
        border: "4px solid black",
      };

      return (


        
        <>
          {/* <div key={ind}>
                <h1>{val.id}</h1>
                <h3>{val.title}</h3>
                </div> */}

          

          <table style={Mystyle}>
            <tr key={ind}>
              <td>{val.id}</td>
              <td>{val.title}</td>
              <td>{val.price}</td>
              <td>{val.description}</td>
              <td>{val.category}</td>
              <td><img src={val.image} alt="No img" width={100} /></td>
              <td><button>{val.rating.rate}</button></td>
              <td><button>{val.rating.count}</button></td>
            </tr>
          </table>
        </>
      );
    });

    return (
      <>
      <h1>Fakestore by using Fetch (componentDidMount)</h1>
        {/* {console.log(this.state)} */}
        {aa}
      </>
    );
  }
}
export default Data;
