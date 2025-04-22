import React from "react";

export default class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Click, clicked: {count}
        </button>
      </div>
    );
  }
}
