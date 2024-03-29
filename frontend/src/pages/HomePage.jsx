import { Component } from "react";

import CountdownTimer from "../components/CountdownTimer";
import Carousel from "../components/Carousel";

import { getTargetDate } from "../utils/eventsUtils";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      targetDate: null,
    };
  }

  componentDidMount() {
    getTargetDate().then(data => {
      this.setState({ targetDate: new Date(data.targetDate) });
    })
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div>
          <Carousel />
        </div>
        <div className="counter">
          <CountdownTimer targetDate={this.state.targetDate} />
        </div>
      </div>
    );
  }
}

export default Homepage;
