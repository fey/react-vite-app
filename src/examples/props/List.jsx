import React from "react";
import ReactDOM from 'react-dom/client';

class List extends React.Component {
  render() {
    const { data } = this.props

    return (
      <ul>
        {data.map(item => <li>{item.name}</li>)}
      </ul>
    );
  }
}

const items = [
  { name: 'first' },
  { name: 'second' }
];

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<List data={items} />);
