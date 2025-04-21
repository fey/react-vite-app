import React from "react";
import ReactDOM from 'react-dom/client';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);

const vdom = (
  <div className="row">
    <div className="col-6">
      <HelloMessage name="Kate" />
    </div>
    <div className="col-6">
      <HelloMessage name="Mark" />
    </div>
  </div>
);

root.render(vdom);
