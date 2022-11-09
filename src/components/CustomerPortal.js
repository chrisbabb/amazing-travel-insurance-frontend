import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { theCurrentUserData } from '../atoms'
import { Link, Navigate } from 'react-router-dom';

function CustomerPortal(){
    const [currentUserData, setCurrentUserData] = useRecoilState(theCurrentUserData);



    let productName = "";
    if(currentUserData != ""){
        if(currentUserData.product[0].name == "dailymedevac"){
            productName = "Daily Medical Evacuation";
        }
        else if(currentUserData.product[0].name == "annualmedevac"){
            productName = "Annual Medical Evacuation";
        }
        else{
            productName = "Trip Cancellation";
        }
    }


    return(
        <>
            {currentUserData == "" && localStorage.token == null ? <Navigate to="/" replace /> : <></> }
            <Container>
                <Row>
                    <Col>
                    {currentUserData ?
                        <>
                            <h1 className='margin-bottom-30 margin-top-30'>Customer Portal</h1>
                            <h4>Personal Information</h4>
                            <p><strong>Name:</strong> {currentUserData.first_name} {currentUserData.last_name}<br />
                            <strong>Email:</strong> {currentUserData.email}<br/>
                            <strong>Phone Number:</strong> {currentUserData.phone}<br/>
                            <strong>Address:</strong> {currentUserData.address}, {currentUserData.city}, {currentUserData.state} {currentUserData.postal_code}
                            </p>
                            <h4>Purchases</h4>
                            <p><strong>Product Name:</strong> {productName}<br/>
                            <strong>Purchased on:</strong> {currentUserData.policies[0].purchase_date}<br/>
                            <strong>Policy Number:</strong> {currentUserData.policies[0].policy_number}<br/>
                            <strong>Coverage Dates:</strong> {currentUserData.policies[0].start_date} - {currentUserData.policies[0].end_date}<br/>
                            {currentUserData.additional_covereds.length > 0 ? <><strong>Additional Covered:</strong><br/></> : <></>}
                            {currentUserData.additional_covereds.map(person => 
                                <><strong className='margin-left-15'>Name:</strong> {person.first_name} {person.last_name}<br/></>
                            )}
                            <strong>Total Purchase Price:</strong> ${currentUserData.product[0].price_total}.00
                            </p>
                        </>
                    :
                        <h2>Loading please wait...</h2>
                    }
                    </Col>
                </Row>
            
            </Container>
        </>
    )

}

export default CustomerPortal