import cn from 'classnames'
import React from 'react'

export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rightActive: false,
      leftActive: false,
    }
  }

  handleRightClick = () => {
    this.setState(() => ({ rightActive: !this.state.rightActive }))
  }

  handleLeftClick = () => {
    this.setState(() => ({ leftActive: !this.state.leftActive }))
  }

  render() {
    const leftBtnClass = cn({
      'btn': true,
      'btn-secondary': true,
      'left': true,
      'active': this.state.leftActive,
    })

    const rightBtnClass = cn({
      'btn': true,
      'btn-secondary': true,
      'right': true,
      'active': this.state.rightActive,
    })
    return (
      <div className="btn-group" role="group">
        <button onClick={this.handleLeftClick} className={leftBtnClass}>Left</button>
        <button onClick={this.handleRightClick} className={rightBtnClass}>Right</button>
      </div>
    )
  }
};

BtnGroup.defaultProps = {
  leftActive: false,
  rightActive: false,
}
