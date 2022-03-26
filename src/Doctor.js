import React, { Component, useEffect, useState } from 'react';

import { Container, Row, Col,Card } from "react-bootstrap";
import './App.css';
import dataa from './file.json'
import {logo} from './doc-image.png'
import Doctor from './DoctorsComp';
import SearchDoc from './Search';

function DoctorComponent() {

    const [search, searchstring] = useState({
        string: null,
    });
    const [doctors, setdoctors] = useState([]);


    useEffect(()=>{
        setdoctors(dataa);
    },[search])

    return ( 
        <Container>
            

            <SearchDoc callback={searchstring} />
            <Doctor dataDoc = {doctors} Str = {search.string} />
            
           
        </Container>
     );
}

export default DoctorComponent;