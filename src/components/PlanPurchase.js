import React, { useState } from 'react';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { theHomeQuotePlanType, theHomeQuoteCoverageLevel, theHomeQuoteDateRange, theHomeQuoteNumTravelers, theHomeQuoteRenderTravelers } from '../atoms';
import { theTravelerAgeArray, theHomeQuoteCountry, theHomeQuoteTripCost, theReturnedTotalPrice, theReturnedDays, theReturnedFee, theReturnedTravelers, theReturnedPrice } from '../atoms'
import { thePrimaryFirstName, thePrimaryLastName, thePrimaryEmail, thePrimaryPhone, thePrimaryAddress, thePrimaryCity, thePrimaryState, thePrimaryZip, thePrimaryDOB, thePurchaseStep } from '../atoms'
import { theTravelerOneFirstName, theTravelerOneLastName, theTravelerOneDOB, theTravelerTwoFirstName, theTravelerTwoLastName, theTravelerTwoDOB, theTravelerThreeFirstName, theTravelerThreeLastName, theTravelerThreeDOB, theTravelerFourFirstName, theTravelerFourLastName, theTravelerFourDOB, theTravelerFiveFirstName, theTravelerFiveLastName, theTravelerFiveDOB, theTravelerSixFirstName, theTravelerSixLastName, theTravelerSixDOB, theTravelerSevenFirstName, theTravelerSevenLastName, theTravelerSevenDOB, theTravelerEightFirstName, theTravelerEightLastName, theTravelerEightDOB, theTravelerNineFirstName, theTravelerNineLastName, theTravelerNineDOB } from '../atoms';
import { theBillingName, theBillingZip, theBillingCard, theBillingExp, theBillingExpMonth, theBillingExpYear, theBillingCode, theLoadPurchase, thePolicyNum } from '../atoms';
import { theCustomerData, thePurchasePlanName } from '../atoms'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { Link, Navigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function PlanPurchase(){

    const [homeQuotePlanType, setHomeQuotePlanType] = useRecoilState(theHomeQuotePlanType);
    const [homeQuoteCoverageLevel, setHomeQuoteCoverageLevel] = useRecoilState(theHomeQuoteCoverageLevel);
    const [homeQuoteDateRange, setHomeQuoteDateRange] = useRecoilState(theHomeQuoteDateRange);
    const [homeQuoteNumTravelers, setHomeQuoteNumTravelers] = useRecoilState(theHomeQuoteNumTravelers);
    const [homeQuoteRenderTravelers, setHomeQuoteRenderTravelers] = useRecoilState(theHomeQuoteRenderTravelers);
    const [travelerAgeArray, setTravelerAgeArray] = useRecoilState(theTravelerAgeArray);
    const [homeQuoteCountry, setHomeQuoteCountry] = useRecoilState(theHomeQuoteCountry);
    const [homeQuoteTripCost, setHomeQuoteTripCost] = useRecoilState(theHomeQuoteTripCost);
    const [returnedTotalPrice, setReturnedTotalPrice] = useRecoilState(theReturnedTotalPrice);
    const [returnedDays, setReturnedDays] = useRecoilState(theReturnedDays);
    const [returnedFee, setReturnedFee] = useRecoilState(theReturnedFee);
    const [returnedTravelers, setReturnedTravelers] = useRecoilState(theReturnedTravelers);
    const [returnedPrice, setReturnedPrice] = useRecoilState(theReturnedPrice);
    const [primaryFirstName, setPrimaryFirstName] = useRecoilState(thePrimaryFirstName);   
    const [primaryLastName, setPrimaryLastName] = useRecoilState(thePrimaryLastName);   
    const [primaryEmail, setPrimaryEmail] = useRecoilState(thePrimaryEmail);
    const [primaryPhone, setPrimaryPhone] = useRecoilState(thePrimaryPhone);
    const [primaryAddress, setPrimaryAddress] = useRecoilState(thePrimaryAddress);
    const [primaryCity, setPrimaryCity] = useRecoilState(thePrimaryCity);   
    const [primaryState, setPrimaryState] = useRecoilState(thePrimaryState);   
    const [primaryZip, setPrimaryZip] = useRecoilState(thePrimaryZip);   
    const [primaryDOB, setPrimaryDOB] = useRecoilState(thePrimaryDOB);
    const [purchaseStep, setPurchaseStep] = useRecoilState(thePurchaseStep);
    const [travelerOneFirstName, setTravelerOneFirstName] = useRecoilState(theTravelerOneFirstName);
    const [travelerOneLastName, setTravelerOneLastName] = useRecoilState(theTravelerOneLastName);
    const [travelerOneDOB, setTravelerOneDOB] = useRecoilState(theTravelerOneDOB);
    const [travelerTwoFirstName, setTravelerTwoFirstName] = useRecoilState(theTravelerTwoFirstName);
    const [travelerTwoLastName, setTravelerTwoLastName] = useRecoilState(theTravelerTwoLastName);
    const [travelerTwoDOB, setTravelerTwoDOB] = useRecoilState(theTravelerTwoDOB);
    const [travelerThreeFirstName, setTravelerThreeFirstName] = useRecoilState(theTravelerThreeFirstName);
    const [travelerThreeLastName, setTravelerThreeLastName] = useRecoilState(theTravelerThreeLastName);
    const [travelerThreeDOB, setTravelerThreeDOB] = useRecoilState(theTravelerThreeDOB);
    const [travelerFourFirstName, setTravelerFourFirstName] = useRecoilState(theTravelerFourFirstName);
    const [travelerFourLastName, setTravelerFourLastName] = useRecoilState(theTravelerFourLastName);
    const [travelerFourDOB, setTravelerFourDOB] = useRecoilState(theTravelerFourDOB);
    const [travelerFiveFirstName, setTravelerFiveFirstName] = useRecoilState(theTravelerFiveFirstName);
    const [travelerFiveLastName, setTravelerFiveLastName] = useRecoilState(theTravelerFiveLastName);
    const [travelerFiveDOB, setTravelerFiveDOB] = useRecoilState(theTravelerFiveDOB);
    const [travelerSixFirstName, setTravelerSixFirstName] = useRecoilState(theTravelerSixFirstName);
    const [travelerSixLastName, setTravelerSixLastName] = useRecoilState(theTravelerSixLastName);
    const [travelerSixDOB, setTravelerSixDOB] = useRecoilState(theTravelerSixDOB);
    const [travelerSevenFirstName, setTravelerSevenFirstName] = useRecoilState(theTravelerSevenFirstName);
    const [travelerSevenLastName, setTravelerSevenLastName] = useRecoilState(theTravelerSevenLastName);
    const [travelerSevenDOB, setTravelerSevenDOB] = useRecoilState(theTravelerSevenDOB);
    const [travelerEightFirstName, setTravelerEightFirstName] = useRecoilState(theTravelerEightFirstName);
    const [travelerEightLastName, setTravelerEightLastName] = useRecoilState(theTravelerEightLastName);
    const [travelerEightDOB, setTravelerEightDOB] = useRecoilState(theTravelerEightDOB);
    const [travelerNineFirstName, setTravelerNineFirstName] = useRecoilState(theTravelerNineFirstName);
    const [travelerNineLastName, setTravelerNineLastName] = useRecoilState(theTravelerNineLastName);
    const [travelerNineDOB, setTravelerNineDOB] = useRecoilState(theTravelerNineDOB);
    const [billingName, setBillingName] = useRecoilState(theBillingName);
    const [billingZip, setBillingZip] = useRecoilState(theBillingZip);
    const [billingCard, setBillingCard] = useRecoilState(theBillingCard);
    const [billingExp, setBillingExp] = useRecoilState(theBillingExp);
    const [billingExpMonth, setBillingExpMonth] = useRecoilState(theBillingExpMonth);
    const [billingExpYear, setBillingExpYear] = useRecoilState(theBillingExpYear);
    const [billingCode, setBillingCode] = useRecoilState(theBillingCode);
    const [policyNum, setPolicyNum] = useRecoilState(thePolicyNum);
    const [loadPurchase, setLoadPurchase] = useRecoilState(theLoadPurchase);
    const [customerData, setCustomerData] = useRecoilState(theCustomerData);
    const [purchasePlanName, setPurchasePlanName] = useRecoilState(thePurchasePlanName); 

    let planName = "";
    if(homeQuotePlanType == 1){
        planName = "Trip Cancellation";
    }
    else if(homeQuotePlanType == 2){
        planName = "Daily Medical Evacuation";
    }
    else{
        planName = "Annual Medical Evacuation";
    }

    let coverageLevel = "";
    if(homeQuoteCoverageLevel == 1){
        coverageLevel = "Select";
    }
    else if(homeQuoteCoverageLevel == 2){
        coverageLevel = "Preferred";
    }
    else if(homeQuoteCoverageLevel == 3){
        coverageLevel = "Elite";
    }


    if(billingExp != ""){
        setBillingExpMonth(billingExp.getMonth() + 1);
        setBillingExpYear(billingExp.getFullYear());
    }

    
    const dateToday = new Date();
    const dateEighteen = new Date();
    const dateSeventyFour = new Date();
    const dateEightyFour = new Date();
    dateEighteen.setFullYear( dateToday.getFullYear() - 18 );
    dateSeventyFour.setFullYear( dateToday.getFullYear() - 74 );
    dateEightyFour.setFullYear( dateToday.getFullYear() - 84 );


    const [validatedPersonalInfo, setValidatedPersonalInfo] = useState(false);
    const [validatedAdditionalTravelers, setValidatedAdditionalTravelers] = useState(false);
    const [validatedBillingInfo, setValidatedBillingInfo] = useState(false);

    const agesForRequest = travelerAgeArray.filter(age => age >= 0);

    let fixedStartDate = new Date(homeQuoteDateRange[0]).toLocaleDateString();
    let fixedEndDate = new Date(homeQuoteDateRange[1]).toLocaleDateString();
    let fixedEndDateAnnual = new Date(homeQuoteDateRange[1])
    let fixedTodayDate = new Date(dateToday).toLocaleDateString();
    fixedEndDateAnnual.setFullYear(fixedEndDateAnnual.getFullYear() + 1)
    fixedEndDateAnnual = new Date(fixedEndDateAnnual).toLocaleDateString();

    let fixedPrimaryDoB = new Date(primaryDOB).toLocaleDateString();

    if(homeQuotePlanType == 3){
        fixedEndDate = fixedEndDateAnnual;
    }

    const handleSubmitPersonalInfo = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        if(homeQuotePlanType == 1 || homeQuoteNumTravelers == 1){
            setPurchaseStep(3);
          }
          else{
            setPurchaseStep(2);
        }
      }
  
      setValidatedPersonalInfo(true);

    };

    const handleSubmitAdditionalTravelers = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();        
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            setPurchaseStep(3);
        }
    
        setValidatedAdditionalTravelers(true);
  
      };

      const handleSubmitBillingInfo = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();        
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            createPurchase();

        }
    
        setValidatedBillingInfo(true);
  
      };

      function createPurchase(){
        setPurchaseStep(4);
        let policyNumGenerated = Math.floor(Math.random() * 9999999999) + 1000000000;
        setPolicyNum(policyNumGenerated);        
        let emailSendInfo = {
            email: `${primaryEmail}`,
            from_name: 'Awesome Travel Insurance',
            to_name: `${primaryFirstName}`,
            plan: `${planName}`,
            policy_number: `${policyNumGenerated}`,
            start_date: `${fixedStartDate}`,
            end_date: `${fixedEndDate}`,
            reply_to: 'awesometravelinsurance@gmail.com'
        }
        emailjs.send('service_j7frk8d', 'template_fa1c1ib', emailSendInfo, 'HEuNEESXo5KXl82CS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        fetch("http://localhost:4000/customer",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            },
            body: JSON.stringify({
                first_name: primaryFirstName,
                last_name: primaryLastName,
                email: primaryEmail,
                password: `${policyNumGenerated}`,
                user_level: 1,
                address: primaryAddress,
                city: primaryCity,
                state: primaryState,
                postal_code: primaryZip,
                phone: primaryPhone,
                dob: fixedPrimaryDoB
            })
        })
        .then(res => res.json())
        .then(final => {
            localStorage.setItem("id", final.id);
            localStorage.setItem("user", JSON.stringify(final.email));
            localStorage.setItem("first_name", JSON.stringify(final.first_name));
			localStorage.setItem("token", final.password_digest);
            setCustomerData(final);
            setCustomerCC(final.id, policyNumGenerated);
        })
      }

      function setCustomerCC(id, policy){
        let lastFour = billingCard.slice(-4);
        fetch("http://localhost:4000/credit_card",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            },
            body: JSON.stringify({
                name: billingName,
                number: billingCard,
                last_four: lastFour,
                exp_month: billingExpMonth,
                exp_year: billingExpYear,
                cvv: billingCode,
                customer_id: id
            })
        })
        .then(res => res.json())
        .then(final => {
            console.log(final)
            setCustomerPolicy(id, policy);
        })
      }

      function setCustomerPolicy(id, policy){
        
        fetch("http://localhost:4000/policy",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            },
            body: JSON.stringify({
                policy_number: policy,
                purchase_date: fixedTodayDate,
                start_date: fixedStartDate,
                end_date: fixedEndDate,
                customer_id: id
            })
        })
        .then(res => res.json())
        .then(final => {
            console.log(final)
            setCustomerProduct(final.id);
        })
      }

      function setCustomerProduct(id){
        fetch("http://localhost:4000/product",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            },
            body: JSON.stringify({
                name: purchasePlanName,
                coverage_level: homeQuoteCoverageLevel,
                price: returnedPrice,
                fee: returnedFee,
                price_total: returnedTotalPrice,
                policy_id: id
            })
        })
        .then(res => res.json())
        .then(final => {
            console.log(final)
            setAdditionalTravelers(id);
        })
      }

      function setAdditionalTravelers(id){
        agesForRequest.map((age, index) => {
            if(index == 1){
                let fixTravelerDob = new Date(travelerOneDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerOneFirstName,
                        last_name: travelerOneLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }
            if(index == 2){
                let fixTravelerDob = new Date(travelerTwoDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerTwoFirstName,
                        last_name: travelerTwoLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }
            if(index == 3){
                let fixTravelerDob = new Date(travelerThreeDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerThreeFirstName,
                        last_name: travelerThreeLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }
            if(index == 4){
                let fixTravelerDob = new Date(travelerFourDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerFourFirstName,
                        last_name: travelerFourLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }
            if(index == 5){
                let fixTravelerDob = new Date(travelerFiveDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerFiveFirstName,
                        last_name: travelerFiveLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }
            if(index == 6){
                let fixTravelerDob = new Date(travelerSixDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerSixFirstName,
                        last_name: travelerSixLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }
            if(index == 7){
                let fixTravelerDob = new Date(travelerSevenDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerSevenFirstName,
                        last_name: travelerSevenLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }
            if(index == 8){
                let fixTravelerDob = new Date(travelerEightDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerEightFirstName,
                        last_name: travelerEightLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }
            if(index == 9){
                let fixTravelerDob = new Date(travelerNineDOB).toLocaleDateString();
                fetch("http://localhost:4000/additional_covered",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Accept:"application/json",
                    },
                    body: JSON.stringify({
                        first_name: travelerNineFirstName,
                        last_name: travelerNineLastName,
                        dob: fixTravelerDob,
                        policy_id: id
                    })
                })
                .then(res => res.json())
                .then(final => {
                    console.log(final)
                })
            }

        })
      }

    return(
        <>
            { purchaseStep == 1 ?
            
                <div id="plan-purchase-step-1">
                    {homeQuoteDateRange[0] === null ? <Navigate to="/" replace /> : <></> }
                    <Container>
                        <Row>
                            <Col md={2}></Col>
                            <Col>
                                <h2>Primary Insured Information</h2>
                                <p>We just need to collect a little bit of information to finalize your policy.</p>
                                <Form noValidate validated={validatedPersonalInfo} onSubmit={handleSubmitPersonalInfo}>
                                    <Row className="mb-3 margin-bottom-15">
                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First Name"
                                            value={primaryFirstName}
                                            onChange={(e) => setPrimaryFirstName(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your First Name.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last Name"
                                            value={primaryLastName}
                                            onChange={(e) => setPrimaryLastName(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your Last Name.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        </Row>
                                        <Row className='margin-bottom-15'>
                                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                        <Form.Label>E-Mail Address</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                            type="email"
                                            placeholder="E-Mail Address"
                                            aria-describedby="inputGroupPrepend"
                                            value={primaryEmail}
                                            onChange={(e) => setPrimaryEmail(e.target.value)}
                                            required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                            Please provide your E-Mail Address.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                        </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <DatePicker
                                            className="form-control"
                                            selected={primaryDOB}
                                            onChange={(date) => setPrimaryDOB(date)}
                                            openToDate={dateEighteen}
                                            maxDate={dateEighteen}
                                            minDate={dateSeventyFour}
                                            yearDropdownItemNumber={100}
                                            scrollableYearDropdown                                    
                                            showYearDropdown
                                            required
                                            
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                        </Form.Group>                                        
                                    </Row>                                    
                                    <Row className="margin-bottom-15">
                                    <Form.Group as={Col} md="6" controlId="validationCustomAddress">
                                        <Form.Label>Address</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                            type="text"
                                            placeholder="Street Address"
                                            aria-describedby="inputGroupPrepend"
                                            value={primaryAddress}
                                            onChange={(e) => setPrimaryAddress(e.target.value)}
                                            required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                            Please provide your Street Address.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustomAddress">
                                        <Form.Label>Primary Phone Number</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                            type="text"
                                            placeholder="Phone Number"
                                            aria-describedby="inputGroupPrepend"
                                            value={primaryPhone}
                                            onChange={(e) => setPrimaryPhone(e.target.value)}
                                            required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                            Please provide your Street Address.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="City"
                                            value={primaryCity}
                                            onChange={(e) => setPrimaryCity(e.target.value)} 
                                            required 
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select 
                                            placeholder="State" 
                                            value={primaryState}
                                            onChange={(e) => setPrimaryState(e.target.value)} 
                                            required >
                                            <option></option>
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please select a state.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Zip" 
                                            value={primaryZip}
                                            onChange={(e) => setPrimaryZip(e.target.value)} 
                                            required 
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid zip.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    
                                    <p className='margin-bottom-30'><Link to={`/`}><Button  variant="danger">Start Over</Button></Link> { homeQuotePlanType == 1 || homeQuoteNumTravelers == 1 ? <Button type="submit" >Next: Billing Information</Button> : <Button type="submit" >Next: Additional Travelers</Button> }</p>
                                    </Form>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </Container>

                </div>

                :

                purchaseStep == 2 ?
                    <div id="plan-purchase-step-2">
                        <Container>
                            <Row>
                                <Col md={2}></Col>
                                <Col>
                                    <h2>Additional Travelers</h2>
                                    <p>Please provide a little more information about your additional travelers.</p>
                                    <Form noValidate validated={validatedAdditionalTravelers} onSubmit={handleSubmitAdditionalTravelers}>
                                        {agesForRequest.map((person, index) => index == 1 ?
                                            <>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={travelerOneFirstName}
                                                        onChange={(e) => setTravelerOneFirstName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your First Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={travelerOneLastName}
                                                        onChange={(e) => setTravelerOneLastName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your Last Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    {homeQuotePlanType == 3 && homeQuoteNumTravelers == 2 ?
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerOneDOB}
                                                        onChange={(date) => setTravelerOneDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    :
                                                    homeQuotePlanType == 3 ?
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerOneDOB}
                                                        onChange={(date) => setTravelerOneDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEighteen}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    :
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerOneDOB}
                                                        onChange={(date) => setTravelerOneDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    }
                                                    </Form.Group>
                                                </Row>
                                            </>
                                            :
                                            index == 2 ?
                                            <>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="First Name"
                                                    value={travelerTwoFirstName}
                                                    onChange={(e) => setTravelerTwoFirstName(e.target.value)}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter your First Name.
                                                </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Last Name"
                                                    value={travelerTwoLastName}
                                                    onChange={(e) => setTravelerTwoLastName(e.target.value)}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter your Last Name.
                                                </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                <Form.Label>Date of Birth</Form.Label>
                                                {homeQuotePlanType == 3 ?
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerTwoDOB}
                                                        onChange={(date) => setTravelerTwoDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEighteen}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    :
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerTwoDOB}
                                                        onChange={(date) => setTravelerTwoDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    }
                                                </Form.Group>
                                            </Row>
                                        </>
                                                :
                                                index == 3 ?
                                                <>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={travelerThreeFirstName}
                                                        onChange={(e) => setTravelerThreeFirstName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your First Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={travelerThreeLastName}
                                                        onChange={(e) => setTravelerThreeLastName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your Last Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    {homeQuotePlanType == 3 ?
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerThreeDOB}
                                                        onChange={(date) => setTravelerThreeDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEighteen}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    :
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerThreeDOB}
                                                        onChange={(date) => setTravelerThreeDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    }
                                                    </Form.Group>
                                                </Row>
                                            </>
                                            :
                                            index == 4 ?
                                            <>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={travelerFourFirstName}
                                                        onChange={(e) => setTravelerFourFirstName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your First Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={travelerFourLastName}
                                                        onChange={(e) => setTravelerFourLastName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your Last Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    {homeQuotePlanType == 3 ?
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerFourDOB}
                                                        onChange={(date) => setTravelerFourDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEighteen}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    :
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerFourDOB}
                                                        onChange={(date) => setTravelerFourDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    }
                                                    </Form.Group>
                                                </Row>
                                            </>
                                            :
                                            index == 5 ?
                                            <>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={travelerFiveFirstName}
                                                        onChange={(e) => setTravelerFiveFirstName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your First Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={travelerFiveLastName}
                                                        onChange={(e) => setTravelerFiveLastName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your Last Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    {homeQuotePlanType == 3 ?
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerFiveDOB}
                                                        onChange={(date) => setTravelerFiveDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEighteen}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    :
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerFiveDOB}
                                                        onChange={(date) => setTravelerFiveDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    }
                                                    </Form.Group>
                                                </Row>
                                            </>
                                            :
                                            index == 6 ?
                                            <>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={travelerSixFirstName}
                                                        onChange={(e) => setTravelerSixFirstName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your First Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={travelerSixLastName}
                                                        onChange={(e) => setTravelerSixLastName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your Last Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    {homeQuotePlanType == 3 ?
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerSixDOB}
                                                        onChange={(date) => setTravelerSixDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEighteen}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    :
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={travelerSixDOB}
                                                        onChange={(date) => setTravelerSixDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                        />
                                                    }
                                                    
                                                    </Form.Group>
                                                </Row>
                                            </>
                                            :
                                            index == 7 ?
                                            <>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={travelerSevenFirstName}
                                                        onChange={(e) => setTravelerSevenFirstName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your First Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={travelerSevenLastName}
                                                        onChange={(e) => setTravelerSevenLastName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your Last Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    <DatePicker
                                                        className="form-control"
                                                        selected={travelerSevenDOB}
                                                        onChange={(date) => setTravelerSevenDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                    />
                                                    </Form.Group>
                                                </Row>
                                            </>
                                            :
                                            index == 8 ?
                                            <>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={travelerEightFirstName}
                                                        onChange={(e) => setTravelerEightFirstName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your First Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={travelerEightLastName}
                                                        onChange={(e) => setTravelerEightLastName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your Last Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    <DatePicker
                                                        className="form-control"
                                                        selected={travelerEightDOB}
                                                        onChange={(date) => setTravelerEightDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                    />
                                                    </Form.Group>
                                                </Row>
                                            </>
                                            :
                                            index == 9 ?
                                            <>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={travelerNineFirstName}
                                                        onChange={(e) => setTravelerNineFirstName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your First Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={travelerNineLastName}
                                                        onChange={(e) => setTravelerNineLastName(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please enter your Last Name.
                                                    </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    <DatePicker
                                                        className="form-control"
                                                        selected={travelerNineDOB}
                                                        onChange={(date) => setTravelerNineDOB(date)}
                                                        openToDate={dateToday}
                                                        maxDate={dateToday}
                                                        minDate={dateEightyFour}
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown                                    
                                                        showYearDropdown
                                                        required
                                                    />
                                                    </Form.Group>
                                                </Row>
                                            </>
                                            :
                                            <></>
                                            
                                        )}
                                        <p className='margin-bottom-30'><Link to={`/`}><Button variant="danger">Start Over</Button></Link> <Button onClick={() => setPurchaseStep(1)} >Back: Personal Information</Button> <Button type="submit" >Next: Billing Information</Button></p>
                                    </Form>
                                </Col>
                                <Col md={2}></Col>
                            </Row>
                        </Container>
                    </div>
                :

                purchaseStep == 3 ?

                    <div id="plan-purchase-step-3">
                        <Container>
                            <Row>
                                <Col md={2}></Col>
                                <Col>
                                    <Form noValidate validated={validatedBillingInfo} onSubmit={handleSubmitBillingInfo}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                            <Form.Label>Name on Card</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Name on Card"
                                                value={billingName}
                                                onChange={(e) => setBillingName(e.target.value)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter the name on your Card.
                                            </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                            <Form.Label>Credit Card Number</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Credit Card Number"
                                                value={billingCard}
                                                onChange={(e) => setBillingCard(e.target.value)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter your Credit Card number.
                                            </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="3" controlId="validationCustom03">
                                            <Form.Label>Expiration Date</Form.Label>
                                            <DatePicker
                                                className="form-control"
                                                selected={billingExp}
                                                onChange={(date) => setBillingExp(date)}
                                                minDate={dateToday}
                                                dateFormat="MM/yyyy"
                                                showMonthYearPicker
                                                required
                                            />
                                            </Form.Group>
                                            <Form.Group as={Col} md="3" controlId="validationCustom03">
                                            <Form.Label>CVV Code</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="CVV Code"
                                                value={billingCode}
                                                onChange={(e) => setBillingCode(e.target.value)} 
                                                required 
                                            />
                                            </Form.Group>
                                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Zip" 
                                                value={billingZip}
                                                onChange={(e) => setBillingZip(e.target.value)} 
                                                required 
                                            />
                                            </Form.Group>
                                        </Row>
                                        
                                        <p className='margin-bottom-30'><Link to={`/`}><Button variant="danger">Start Over</Button></Link> { homeQuotePlanType == 1 || homeQuoteNumTravelers == 1 ? <Button onClick={() => setPurchaseStep(1)} >Back: Personal Information</Button> : <Button onClick={() => setPurchaseStep(2)} >Back: Additional Travelers</Button> } <Button type="submit" >Complete Purchase</Button></p>
                                        </Form>
                                </Col>
                                <Col md={2}></Col>
                            </Row>
                        </Container>
                    </div>

                :

                <>
                <div id="ty-container">
                    <Container>
                        <Row>
                            <Col className='move-down'>
                                <h2 className='white'>Thank you for your purchase!</h2>
                                <p><strong>Plan Name:</strong> {planName}<br/>
                                {homeQuotePlanType == 1 ? 
                                    <><strong>Coverage Level:</strong> {coverageLevel}</>
                                :
                                    <></>
                                }
                                <strong>Policy Number:</strong> {policyNum}<br/>
                                <strong>Primary Covered:</strong> {primaryFirstName} {primaryLastName}<br/>
                                { agesForRequest.length > 1 ? 
                                    <><strong>Additional Travelers:</strong><br/>
                                    {agesForRequest.map((ages, index) => {
                                        if(index == 1){
                                            return <>{travelerOneFirstName} {travelerOneLastName}<br/></>
                                        }
                                        if(index == 2){
                                            return <>{travelerTwoFirstName} {travelerTwoLastName}<br/></>
                                        }
                                        if(index == 3){
                                            return <>{travelerThreeFirstName} {travelerThreeLastName}<br/></>
                                        }
                                        if(index == 4){
                                            return <>{travelerFourFirstName} {travelerFourLastName}<br/></>
                                        }
                                        if(index == 5){
                                            return <>{travelerFiveFirstName} {travelerFiveLastName}<br/></>
                                        }
                                        if(index == 6){
                                            return <>{travelerSixFirstName} {travelerSixLastName}<br/></>
                                        }
                                        if(index == 7){
                                            return <>{travelerSevenFirstName} {travelerSevenLastName}<br/></>
                                        }
                                        if(index == 8){
                                            return <>{travelerEightFirstName} {travelerEightLastName}<br/></>
                                        }
                                        if(index == 9){
                                            return <>{travelerNineFirstName} {travelerNineLastName}<br/></>
                                        }
                                        <br/>
                                    })}
                                    </>
                                :
                                    <></>
                                }

                                </p>
                                <p><strong>Plan Price:</strong> ${returnedPrice}.00<br/>
                                <strong>Plan Fee:</strong> ${returnedFee}.00<br/>
                                <strong>Total Price: </strong>${returnedTotalPrice}.00</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
            
            }
        </>
    )

}

export default PlanPurchase