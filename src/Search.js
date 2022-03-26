import React, { Component } from 'react';
import { FormControl,Container,Row,Col } from 'react-bootstrap';

function SearchDoc(props) {
    let callback = props.callback;
    return (  
        <>
        <Container className='m-4'>
            <Row>
                <Col>
                <FormControl
                type="text"
                placeholder='Search Doctors ..'
                onChange={(event)=>{
                    callback({string: event.target.value});
                    //alert(event.target.value);
                }}

                ></FormControl>

                
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default SearchDoc;