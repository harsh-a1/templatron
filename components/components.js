import React,{propTypes} from 'react';


export function UploadFile(props){
    return (
            <div>
            <label>Upload .json file</label>
            <input type="file" id="fileInput"/>
            <button onClick={props.onClick}>Import</button>
            </div>
    )
}
