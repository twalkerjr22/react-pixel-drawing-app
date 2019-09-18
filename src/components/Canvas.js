import React, { useState, useEffect } from 'react';
import Pixel from './Pixel';
import Colors from './Colors';


const Canvas = (props) => {
    const [saves,setSaves] = useState([]);
    const [currCanvas,setCurrCanvas] = useState({});
    const [saveName,setSaveName] = useState();
    const [matrix, setMatrix] = useState(
        Array(30)
        .fill()
        .map(() => Array(30).fill(0)
        ));
    
        useEffect(() => 
            {
                
                fetchMatrixData();

            }, 
        []);

        const fetchMatrixData = () => {
            if(localStorage.getItem('saves')===null){
         
            }else{
               var s = JSON.parse(localStorage.getItem('saves'));
                if(s.length>0){
                    setSaves(s);
                    setMatrix(s[0].matrix);
                    setCurrCanvas(s[0]);
                }
                
            }
        }

        const clearAllSaves = (e) => {
            localStorage.clear();
            window.location.reload();
        }

       const canvasOptions = saves.map((canvas) => 
                <option value={canvas.id} key={canvas.id}>{canvas.canvas}</option>
                );
        
       
        const newCanvas = () =>{
            setMatrix(Array(30)
            .fill()
            .map(() => Array(30).fill(0)
            ));
        }
        const submitSave = (e) => {
            e.preventDefault();
            saves.push({canvas:saveName,id:saves.length,matrix:matrix});
            setSaves(saves);
            console.log(saves);
            localStorage.setItem("saves",JSON.stringify(saves));
          }

        const onChangeCanvasName = (e) => {
            e.preventDefault();
            setSaveName(e.target.value);
           
        }

        const onSelectCanvas = (e) => {
            e.preventDefault(e);
            setMatrix(saves[e.target.value].matrix);
        }
        const changeColor = (rowIndex,colIndex) => {

            var newMatrix = JSON.parse(JSON.stringify(matrix));
            newMatrix[rowIndex][colIndex] = props.currentColor;
            setMatrix(newMatrix);
            saves[currCanvas.id].matrix = newMatrix;
            localStorage.setItem("saves",JSON.stringify(saves));
       
            
        }

        return(
            <div className="canvas-container">
                    <form onSubmit={submitSave} className="canvas-save">
                        <div>
                            <label>Select Canvas To Load</label>
                            <select onChange={(e)=>{onSelectCanvas(e)}}>
                            {canvasOptions}
                            </select>
                        </div>
                        <div>
                            <input id="save-name"  
                            onChange={((e)=>{onChangeCanvasName(e)})}
                            value={saveName}
                            placeholder="Name of this drawing" type="text"></input>
                            <button disabled={!saveName} type="submit">Save Canvas</button>
                        </div>
                        <button class="btn-clear-saves" onClick={ (e)=> clearAllSaves(e) }type="button">Clear All Saves</button>
                    </form>
                <div className={"canvas"}>
                    {matrix.map((row,rowIndex) => 
                        row.map((_,colIndex) => {
                            return(
                                <Pixel 
                                    key={`${rowIndex}-${colIndex}`}
                                    background={Colors[matrix[rowIndex][colIndex]]}
                                    onClick={e => {changeColor(rowIndex,colIndex)}}
                                />)
                        })
                    )}
                
                </div>
                <button onClick={newCanvas} class="btn-save-canvas" type="button">New Canvas</button>
               
            </div>
        )
}

export default Canvas;