// import App from './App.jsx'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'

// import Clock from './examples/Clock'
// import Card from './components/Card'
// import Clicker from './examples/Clicker'
// import Buttons from './examples/Buttons'
// import BtnGroup from './components/BtnGroup'
import Carousel from './examples/Carousel'

const images = [
  'https://picsum.photos/id/1015/800/400',
  'https://picsum.photos/id/1016/800/400',
  'https://picsum.photos/id/1018/800/400',
  'https://picsum.photos/id/1020/800/400',
]

const mountNode = document.getElementById('root')
const root = ReactDOM.createRoot(mountNode)

root.render(
  <StrictMode>
    {/* <h2>Card</h2>
    <Card />
    <hr />
    <h2>Clock</h2>
    <Clock />
    <hr />
    <h2>Clicker</h2>
    <Clicker />
    <hr />
    <h2>Buttons</h2>
    <Buttons />
    <hr /> */}
    {/* <h2>BtnGroup</h2> */}
    {/* <BtnGroup /> */}
    <h2>Carousel</h2>
    <Carousel images={images} />
  </StrictMode>,
)
