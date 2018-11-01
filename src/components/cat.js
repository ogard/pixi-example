import { CustomPIXIComponent } from 'react-pixi'
import Cat from './pixi/cat'

export default CustomPIXIComponent({
  customDisplayObject(props) {
    const { x, y } = props
    const cat = new Cat({ x, y })
    return cat
  },
})
