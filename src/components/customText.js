import * as React from 'react'
import * as PIXI from 'pixi.js'
import * as ReactPIXI from 'react-pixi'

const { Stage, /* TilingSprite, */ Text } = ReactPIXI

export default ({ width, height, xposition }) => {
  var fontstyle = { font: '40px Times' }
  return (
    <Stage width={width} height={height}>
      {/* <TilingSprite
        image={assetpath("bg_castle.png")}
        width={width}
        height={height}
        key="1"
      /> */}
      <Text text="Vector text" x={xposition} y={10} style={fontstyle} anchor={new PIXI.Point(0.5, 0)} key="2" />
    </Stage>
  )
}
