import React from 'react'
import cn from 'classnames'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    const images = props.images
    this.state = {
      currentIndex: 0,
      images
    }
  }

  nextImage = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.images.length,
    }))
  }

  prevImage = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + this.state.images.length) % this.state.images.length,
    }))
  }

  render() {
    const { currentIndex } = this.state

    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {this.state.images.map((image, index) => (
            <div
              key={index}
              className={cn(
                'carousel-item',
                { active: index === currentIndex },
              )}
            >
              <img
                className="d-block w-100"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="prev"
          onClick={this.prevImage}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden" onClick={this.prevImage}>Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="next"
          onClick={this.nextImage}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}

Carousel.defaultProps = {
  images: [],
}
