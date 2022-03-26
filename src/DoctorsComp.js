import React, { Component } from 'react';
import { Container, Row, Col,Card } from "react-bootstrap";
import './App.css';
import PrintDoc from './printDoc';

function Doctor(props) {

    const str = props.Str;
    var data = props.dataDoc;

    if(str){
        //alert('found');
        const searchst = str.toLowerCase();
        //alert(searchst);
        data = data.filter((obj)=>{
            const title = obj.Specialization.toLowerCase();
            return title.includes(str);
        })
        //alert(data);

    }

    let temp = data.map((obj)=>{
        return <PrintDoc data = {obj} />;
    })


    return ( 
        <div>{temp}</div>
     );
}

export default Doctor;