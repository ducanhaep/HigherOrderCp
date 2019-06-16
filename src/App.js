import React from "react";
import "./App.css";
const withCouter = Component =>
  class Hoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    update = type => {
      if (type === "Inc") {
        this.setState(prevState => ({ count: prevState.count + 1 }));
      } else if (type === "Dec") {
        this.setState(({ count }) => ({ count: count - 1 }));
      }
    };

    render() {
      return <Component {...this.state} {...this.props} update={this.update} />;
    }
  };

const Couter = ({ count, update }) => (
  <div>
    <button onClick={() => update("Inc")}>Inc</button>
    {count}
    <button onClick={() => update("Dec")}>Dec</button>
  </div>
);

const App = withCouter(Couter)

export default App;
