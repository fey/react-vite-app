import React from 'react'

export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props
    const childrenElements = React.Children.map(children, child => (
      <li className="list-group-item">
        {child}
      </li>
    ))
    return (
      <ul className="list-group">{childrenElements}</ul>
    )
  }
}
