
import React, {Component} from 'react'

class CoordinatesButton extends Component{
    xy = (event) => {
       let x , y

       let array =  [x = event.screenX, y = event.screenY]
       this.props.onReceiveCoordinates(array)

    }

    render() {
        return(
            <div>
                <button onClick={this.xy}>Click</button>
            </div>
        )
    }
}


export default CoordinatesButton