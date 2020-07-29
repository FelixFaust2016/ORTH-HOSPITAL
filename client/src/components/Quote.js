import React, { Component } from "react";
import { connect } from "react-redux";

import { getQuotes } from "../store/action";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
    };
  }

  componentDidMount() {
    const { getQuotes } = this.props;
    getQuotes();
  }

  // handleQuotes = () => {
  //   const { quotes } = this.props;
  //   let quoter = quotes[Math.floor(Math.random() * quotes.length)];
  //   this.setState({quote: quoter})
  //   console.log(this.state.quote)
  // };

  render() {
    const { quote } = this.state;
    return (
      <div>
        <p>
          {" "}
          Keep your vitality. A life without health is like a river without
          water. Maxime Lagacé{" "}
        </p>
      </div>
    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    quotes: store.quotes,
  }),
  {
    getQuotes,
  }
)(Quotes);
