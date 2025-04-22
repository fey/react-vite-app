import React from "react";

export default class Progress extends React.Component {
  render() {
    const percentage = this.props.percentage;
    return (
      <div>
        <h2>Progress</h2>
        <p>Progress is a component that indicates the progress of a task.</p>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Progressbar"
          >
            </div>
        </div>
      </div>
    );
  }
}

Progress.defaultProps = {
  percentage: 0,
};
