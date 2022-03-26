import React, { Component } from 'react';
import { Container, Row, Col,Card } from "react-bootstrap";
import './App.css';


function PrintDoc(props) {

    return (
        <div className="d-flex justify-content-center m-4 card-design ">
                <Card style={{ width: '75%' }} className="card-block">
                        <Card.Body>
                            <Card.Title>{props.data?.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted fs-6"><i>{props.data?.Specialization}</i></Card.Subtitle>
                                <Card.Text className="text-start">
                                {props.data?.Intro}
                                </Card.Text>
                            <a href="#" className="btn btn-success mb-2 ">Book Appointment</a> &nbsp;
                            <a href="#" className="btn btn-warning mb-1">See Schedule</a>

                            <p class='mt-2'>
                                Rating 
                                <span class='ms-2 mt-1'>3.5</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning ms-2 mt-0" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </p>
                            
                        </Card.Body>
                </Card>
            </div>
      );
}

export default PrintDoc;