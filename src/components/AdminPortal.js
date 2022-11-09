import React, { useEffect } from 'react';
import { Container, Form, Row, Col, FloatingLabel, Button, Table } from 'react-bootstrap';
import { theCurrentUserData, theAdminData, theCustomerDetailsOpen, theCustomerDetails, theSearchTerms, theFilteredAdminData } from '../atoms'
import { useRecoilState } from 'recoil';
import { Link, Navigate } from 'react-router-dom';

function AdminPortal(){

    const [currentUserData, setCurrentUserData] = useRecoilState(theCurrentUserData);
    const [adminData, setAdminData] = useRecoilState(theAdminData);
    const [customerDetailsOpen, setCustomerDetailsOpen] = useRecoilState(theCustomerDetailsOpen);
    const [customerDetails, setCustomerDetails] = useRecoilState(theCustomerDetails);
    const [searchTerms, setSearchTerms] = useRecoilState(theSearchTerms);
    const [filteredAdminData, setFilteredAdminData] = useRecoilState(theFilteredAdminData);

    useEffect(() => {
        fetch(`http://localhost:4000/customer/`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            }
        })
        .then(res => res.json())
        .then(final => {
            setAdminData(final);
        })
    } ,[])

    if(adminData != "" && searchTerms == "" && filteredAdminData == ""){
        let filterResults = adminData.filter(data => data.user_level != 4);
        setFilteredAdminData(filterResults)
    }

    function filterForSearch(searchData){
        setSearchTerms(searchData)
        let filterResults = adminData.filter(data => data.user_level != 4 && (data.first_name.toLowerCase().includes(searchData.toLowerCase()) || data.last_name.toLowerCase().includes(searchData.toLowerCase()) || data.email.toLowerCase().includes(searchData.toLowerCase())));
        console.log(filterResults)
        setFilteredAdminData(filterResults)
    }

    let productName = "";
    if(customerDetails != ""){
        if(customerDetails.product[0].name == "dailymedevac"){
            productName = "Daily Medical Evacuation";
        }
        else if(customerDetails.product[0].name == "annualmedevac"){
            productName = "Annual Medical Evacuation";
        }
        else{
            productName = "Trip Cancellation";
        }
    }    

    function showCustomerDetails(id){
        fetch(`http://localhost:4000/customer/${id}`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            }
        })
        .then(res => res.json())
        .then(final => {
            setCustomerDetails(final);
            setCustomerDetailsOpen(1);
        })
    }

    function closeCustomerDetails(){
        setCustomerDetailsOpen(0);
        setCustomerDetails("")
    }

    return(
        <>
            {(currentUserData == "" && localStorage.token == null) || (currentUserData.user_level != 4 && currentUserData != "") ? <Navigate to="/" replace /> : <></> }
            
            <Container>
                <Row>



                    <Col>
                    <h2 className='margin-bottom-15 margin-top-30'>Admin Panel</h2>
                    {adminData == "" ?
                    <><h4>Loading Table</h4></>
                    :
                    <>
                        {customerDetailsOpen == 0 ?
                            <>
                                <Form.Group className='margin-bottom-15' as={Col} md="4" controlId="floatingSearchGroup">
                                <FloatingLabel controlId="floatingSearch" label="Search">
                                <Form.Control type="text" placeholder="Search Terms" value={searchTerms} onChange={(e) => filterForSearch(e.target.value)} />
                                </FloatingLabel>
                                </Form.Group>
                                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Policy Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAdminData.map(data => <tr className='pointer' onClick={() => showCustomerDetails(data.id)}><td>{data.id}</td><td>{data.first_name}</td><td>{data.last_name}</td><td>{data.email}</td><td>{data.policies[0].policy_number}</td></tr>)}
                                </tbody>
                            </Table>
                            </>
                            :
                            <>
                                <h4>Personal Information</h4>
                                <p><strong>Name:</strong> {customerDetails.first_name} {customerDetails.last_name}<br />
                                <strong>Email:</strong> {customerDetails.email}<br/>
                                <strong>Phone Number:</strong> {customerDetails.phone}<br/>
                                <strong>Address:</strong> {customerDetails.address}, {customerDetails.city}, {customerDetails.state} {customerDetails.postal_code}
                                </p>
                                <h4>Purchases</h4>
                                <p><strong>Product Name:</strong> {productName}<br/>
                                <strong>Purchased on:</strong> {customerDetails.policies[0].purchase_date}<br/>
                                <strong>Policy Number:</strong> {customerDetails.policies[0].policy_number}<br/>
                                <strong>Coverage Dates:</strong> {customerDetails.policies[0].start_date} - {customerDetails.policies[0].end_date}<br/>
                                {customerDetails.additional_covereds.length > 0 ? <><strong>Additional Covered:</strong><br/></> : <></>}
                                {customerDetails.additional_covereds.map(person => 
                                    <><strong className='margin-left-15'>Name:</strong> {person.first_name} {person.last_name}<br/></>
                                )}
                                <strong>Total Purchase Price:</strong> ${customerDetails.product[0].price_total}.00<br/>
                                <Button className='margin-top-15' onClick={() => closeCustomerDetails()}>Close Customer Details</Button>
                                </p>
                            </>
                        }
                    </>
                    }
                    
                    </Col>

                </Row>
            </Container>
        </>
    )

}

export default AdminPortal