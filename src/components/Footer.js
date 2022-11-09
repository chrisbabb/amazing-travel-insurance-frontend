import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer(){

    return(
        <>
            <div id="footer">
                <Container>
                    <Row id="footer-menu">
                        <Col>
                            <Row>
                                <Col className='text-align-center white'>
                                    <h4>Plan Options</h4>
                                </Col>
                            </Row>
                            <Row className='margin-top-15 margin-left-15'>
                                <Col className="white">
                                    Medical Evacuation
                                </Col>
                            </Row>
                            <Row className='margin-top-10 margin-left-15'>
                                <Col className="white">
                                    Trip Cancellation
                                </Col>
                            </Row>
                        </Col>
                        <Col className='white-borders'>
                            <Row>
                                <Col className='text-align-center white'>
                                    <h4>Additional Info</h4>
                                </Col>
                            </Row>
                            <Row className='margin-top-15 margin-left-15'>
                                <Col className="white">
                                    Medical Evacuation
                                </Col>
                            </Row>
                            <Row className='margin-top-10 margin-left-15'>
                                <Col className="white">
                                    Trip Cancellation
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className='text-align-center white'>
                                    <h4>Contact</h4>
                                </Col>
                            </Row>
                            <Row className='margin-top-15 margin-left-15'>
                                <Col className="white" md={1}>
                                    <FontAwesomeIcon icon={faAddressBook} />
                                </Col>
                                <Col className="white" md={10}>
                                    1234 Fake St.<br/>City, ST 55555
                                </Col>
                            </Row>
                            <Row className='margin-top-10 margin-left-15'>
                                <Col className="white" md={1}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </Col>
                                <Col className="white" md={10}>
                                    (555)555-5555
                                </Col>
                            </Row>
                            <Row className='margin-top-5 margin-left-15'>
                                <Col className="white" md={1}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </Col>
                                <Col className="white" md={10}>
                                    info@ati.com
                                </Col>
                            </Row>
                            <Row className='margin-top-15'>
                                <Col></Col>
                                <Col className="white text-align-right">
                                    <img className='footer-icon' src={require('../images/instagram.png')} />
                                </Col>
                                <Col className="white text-align-center">
                                    <img className='footer-icon' src={require('../images/facebook.png')} />
                                </Col>
                                <Col className="white">
                                    <img className='footer-icon' src={require('../images/twitter.png')} />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Col>
                        <Col>
                            <img id="footer-logo" src={require('../images/ati-white.png')} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="footer-copyright">
                <Container>
                    <Row id="copyright">
                        <Col className='text-align-center white'>
                            Copyright 2022 - Awesome Travel Insurance
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Footer