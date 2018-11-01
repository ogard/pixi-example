import * as React from 'react'
import ReactDOM from 'react-dom'
import Cat from './components/cat'
import CustomText from './components/customText'

const view = (
  <div>
    <p>Hello world1</p>
    <p>Hello world2</p>
    <Cat x={1} y={1} />
    <CustomText width={300} height={100} xposition={0} />
  </div>
)

const render = () => {
  ReactDOM.render(view, document.getElementById('root'))
}

render()
