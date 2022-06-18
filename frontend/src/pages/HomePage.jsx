import NavBar from "../components/NavBar";
import CountdownTimer from "../components/CountdownTimer";
import { Component } from "react";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      targetDate: new Date("June 23, 2022 12:00:00"),
    };
  }

  render() {
    return (
      <div style={{height: "100vh"}}>
        <div>
          <NavBar />
        </div>
        <div style={{
          position: "absolute",
          left: "4vw",
          top: "30vh"
        }}>
          <CountdownTimer targetDate={this.state.targetDate} />
        </div>
      </div>
    );
  }
}

export default Homepage;