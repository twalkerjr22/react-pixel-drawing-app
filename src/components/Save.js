import React, { useReact } from 'react';

const Save = (props) => {
    
    const saveCanvas = (e) => {
        e.preventDefault();
        localStorage.setItem(props.matrixName, JSON.stringify(props.currMatrix));
      }

    return(
        <div className="">
            <form onSubmit={saveCanvas}>
                <input type="text"></input>
                <button type="submit">Save</button>
            </form>

        </div>
    )

}

export default Save;