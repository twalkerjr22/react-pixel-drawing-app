import React, { useState} from 'react';


const Pixel = props => {

    return(
        <div className={ `${props.background} pixel ${
            props.current ? 'current-color' : ''}`}
            onClick={props.onClick}
            background={props.color}
            onClick={props.onClick}
        >
        </div>
    )
}

export default Pixel;