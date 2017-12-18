import React from 'react';
import {render} from 'react-dom';
import {UploadFile} from './components/components';
import XLSX from 'xlsx';

render(<UploadFile onClick={uploadFileHandler} />, document.getElementById('app'));

function uploadFileHandler(){

    var file = document.getElementById('fileInput').files[0];

    if (!file) {
        alert("Error Cannot find the file!");
        return;
    }
    
    switch(file.type){
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" :
    case "application/vnd.ms-excel" :
        parseExcel(file);
        break;
    default : alert("Unsupported Format");
        break
    }
}

function parseExcel(file){
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    
    reader.onload = function(e) {
        var data = e.target.result;
        var wb = XLSX.read(data, {type: 'binary'});
	debugger

    };
}
