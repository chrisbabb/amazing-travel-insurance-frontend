import React from 'react';
import { useEffect } from "react";
import { Container, FloatingLabel, Form, Row, Col, Card, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { theHomeQuotePlanType, theHomeQuoteCoverageLevel, theHomeQuoteDateRange, theHomeQuoteNumTravelers, theHomeQuoteRenderTravelers } from '../atoms';
import { theTravelerAgeArray, theHomeQuoteCountry, theHomeQuoteTripCost, theReturnedTotalPrice, theReturnedDays, theReturnedFee, theReturnedTravelers, theReturnedPrice, thePurchasePlanName } from '../atoms'
import { Link, Navigate } from 'react-router-dom';

function StartQuote(){

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
    const [purchasePlanName, setPurchasePlanName] = useRecoilState(thePurchasePlanName); 

    const agesForRequest = travelerAgeArray.filter(age => age >= 0);
    let agesForRequestInt = agesForRequest.map(age => parseInt(age))

    let fixedStartDate = new Date(homeQuoteDateRange[0]).toLocaleDateString();
    let fixedEndDate = new Date(homeQuoteDateRange[1]).toLocaleDateString();
    let fixedEndDateAnnual = new Date(homeQuoteDateRange[1])
    fixedEndDateAnnual.setFullYear(fixedEndDateAnnual.getFullYear() + 1)
    fixedEndDateAnnual = new Date(fixedEndDateAnnual).toLocaleDateString();

    let planName = "";
    let planNameRequest = "";
    if(homeQuotePlanType == 1){
        planName = "Trip Cancellation";
        planNameRequest = "tripcan";
        setPurchasePlanName(planNameRequest);
    }
    else if(homeQuotePlanType == 2){
        planName = "Daily Medical Evacuation";
        planNameRequest = "dailymedevac";
        setPurchasePlanName(planNameRequest);
    }
    else{
        planName = "Annual Medical Evacuation";
        planNameRequest = "annualmedevac";
        fixedEndDate = fixedEndDateAnnual;
        setPurchasePlanName(planNameRequest);
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

    useEffect(()=>{
        fetch("http://localhost:4000/rater",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            },
            body: JSON.stringify({
                ages: agesForRequestInt,
                product_name: planNameRequest,
                coverage_level: parseInt(homeQuoteCoverageLevel),
                trip_cost: parseInt(homeQuoteTripCost),
                start_date: fixedStartDate,
                end_date: fixedEndDate
            })
        })
        .then(res => res.json())
        .then(final => {
            setReturnedDays(final.days);
            setReturnedTravelers(final.travelers);
            setReturnedPrice(final.price);
            setReturnedFee(final.plan_fee);
            setReturnedTotalPrice(final.total_price);
        })
    },[])

    return(
        <>
            <div id="quote-container">
                {homeQuoteDateRange[0] === null ? <Navigate to="/" replace /> : <></> }
                <Container>
                    <Row>
                        <Col id="quote-details">
                            <h1>Your Personal Quote</h1>
                            {returnedTotalPrice != "" && returnedPrice != "" && returnedFee != "" ? 
                                <>
                                    <h4>Selected Plan: {planName}</h4>
                                    <p>
                                    {homeQuotePlanType == 1 ? <><strong>Coverage Level:</strong> {coverageLevel}<br /></> : <></>}
                                    <strong>Destination:</strong> {homeQuoteCountry}<br />
                                    {returnedTravelers > 0 ? <><strong>Number of Travelers:</strong> {returnedTravelers}<br /></> : <></>}
                                    {homeQuotePlanType != 3 ? <><strong>Trip Dates:</strong> {fixedStartDate} - {fixedEndDate}<br /></> : <><strong>Coverage Dates:</strong> {fixedStartDate} - {fixedEndDate}<br /></>}
                                    <strong>Price:</strong> ${returnedPrice}.00<br />
                                    <strong>Plan Fee:</strong> ${returnedFee}.00<br />
                                    <strong>Total Cost:</strong> ${returnedTotalPrice}.00
                                    </p>
                                    <p className='margin-top-30 margin-bottom-30'><Link to={`/`}><Button size="lg" variant="danger">Start Over</Button></Link> <Link to={`/plan-purchase`}><Button size="lg">Continue to Purchase</Button></Link></p>
                                </>
                                :
                                <h4>Loading your Quote</h4>
                            }
                            

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default StartQuote