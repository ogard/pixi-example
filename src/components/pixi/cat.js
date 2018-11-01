import * as PIXI from 'pixi.js'

const { Container, loader, Sprite } = PIXI

export default class Cat extends Container {
  constructor(props) {
    super()
    const { x = 0, y = 0 } = props
    this.x = x
    this.y = y
    this.sprite = new Sprite(loader.resources['../../../assets/images/cat.png'])
    this.addChild(this.sprite)
  }

  changePosition = (newX, newY) => {
    this.x = newX
    this.y = newY
  }
}
