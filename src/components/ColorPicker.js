import React, { useReact } from 'react';
import Colors from './Colors';
import Pixel from './Pixel';

const ColorPicker = (props) => {

    return(
        <div class="color-picker">
            {Colors.map((color,index) => {
               return( 
                    <Pixel
                        onClick={e => { props.setColor(index)}}
                        key={index}
                        background={color}
                        current={Colors[props.currentColor] === color}
                    />
                )
            })}
            
        </div>
    )

}

export default ColorPicker;