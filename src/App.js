import React from "react";
// import Counter from "./components/Counter";
import UseStateHook from "./UseStateHook/UseStateHook";
class Car extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0,
  //     };
  //   }
  componentDidMount() {
    console.log("ConmponentDidMount: when Compnent rendered first time");
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("Update");
    return (
      <>
        <UseStateHook />
      </>
    );
  }
}
export default Car;
