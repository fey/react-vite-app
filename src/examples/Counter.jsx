class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count }
  }

  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return <button onClick={this.handleClick}>
      count: {this.state.count}
    </button>;
  }
}

Counter.defaultProps = {
  count: 0,
};

const vdom = <div>
  <Counter />
  <Counter count={5} />
</div>;

const mountNode = document.getElementById('react-root');
const root = ReactDOM.createRoot(mountNode);
root.render(vdom);
