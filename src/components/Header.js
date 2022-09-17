import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, FloatingLabel } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { Link, Navigate } from 'react-router-dom';
import { theCurrentUser, theFormUserName, theFormUserPass, theCurrentUserData } from '../atoms'

function Header(){

    const [currentUserData, setCurrentUserData] = useRecoilState(theCurrentUserData);
    const [currentUser, setCurrentUser] = useRecoilState(theCurrentUser);
    const [formUserName, setFormUserName] = useRecoilState(theFormUserName);
    const [formUserPass, setFormUserPass] = useRecoilState(theFormUserPass);

    function logUserOut(){
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        setCurrentUserData("");
        setCurrentUser("");
    }

    function logUserIn(e){
        e.preventDefault();
        fetch('http://localhost:4000/login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: formUserName,
                password: formUserPass
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.user.id);
            localStorage.setItem('name', data.user.first_name);
            setCurrentUser(data.user);
            setFormUserName("");
            setFormUserPass("");
        })
    }

    if(localStorage.id && currentUserData == ""){
        fetch(`http://localhost:4000/customer/${localStorage.id}`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            }
        })
        .then(res => res.json())
        .then(final => {
            setCurrentUserData(final);
        })
    }

    return(
        <div className='header'>
        <Container>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="../"><img id="site-logo" src={require('/home/chrisbabb/code/final-project/amazing-travel-insurance-frontend/src/images/ati.png')} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="../">Home</Nav.Link>
                            <Nav.Link href="./quote">Get a Quote</Nav.Link>
                            <NavDropdown
                                title="Plan Options"
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                                <NavDropdown.Item href="#action3">Medical Evacuation</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">Trip Cancellation</NavDropdown.Item>
                            </NavDropdown>
                            {currentUserData != "" ? 
                                <Navbar.Text className="justify-content-end">
                                    {currentUserData.user_level == 4 ? 
                                        <>Signed in as: <Link to={`/admin-portal`}>{currentUserData.first_name}</Link><br/></>
                                    :
                                        <>Signed in as: <Link to={`/customer-portal`}>{currentUserData.first_name}</Link><br/></>
                                    }                                    
                                    <Button className='margin-top-15' onClick={logUserOut}>Log Out</Button>
                                </Navbar.Text>
                            :
                                <>
                                    <Form onSubmit={logUserIn}>
                                        <h4 className='margin-top-15'>Login</h4>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control type="email" placeholder="name@example.com" value={formUserName} onChange={(e) => setFormUserName(e.target.value)} required />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control type="password" placeholder="Password" value={formUserPass} onChange={(e) => setFormUserPass(e.target.value)} required />
                                        </FloatingLabel>
                                        <Button className='margin-top-15' type="submit" >Log In</Button>
                                    </Form>
                                </>
                            }
                            </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        ))}
        </Container>
        </div>
    )

}

export default Header