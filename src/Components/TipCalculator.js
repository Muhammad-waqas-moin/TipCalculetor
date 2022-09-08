import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, InputGroup, Button } from "react-bootstrap";

import { useEffect, useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [NumberOfPerson, setNumberOfPerson] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState(0.0);
  const [totalPerPerson, setTotalPerPerson] = useState(0.0);
  const [customValue, setCustomValue] = useState(null);
  const [customValueStatus, setCustomValueStatus] = useState(null);
  let percentageValues = [5, 10, 15, 25, 50];

  const calculateTip = () => {
    if (
      bill &&
      bill > 0 &&
      tip &&
      tip > 0 &&
      NumberOfPerson &&
      NumberOfPerson > 0
    ) {
      console.log("Bill:", bill);
      console.log("Tip :", tip);
      console.log("Person", NumberOfPerson);
      calTip(bill, tip, NumberOfPerson);
      clearInputField();
    } else {
      console.log("Fill all fields");
      console.log(bill);
      console.log(tip);
      console.log(NumberOfPerson);
    }
  };
  const calTip = (MyBill, MyTip, MyPersons) => {
    let OverAllTip = (MyBill * MyTip) / 100;
    let perPersonTip = OverAllTip / MyPersons;
    let perPersonAmount = (MyBill + OverAllTip) / MyPersons;
    console.log(perPersonAmount);
    console.log(perPersonTip);
    console.log(OverAllTip);
    setTipPerPerson(perPersonTip);
    setTotalPerPerson(perPersonAmount);
  };

  const resetResult = () => {
    setTipPerPerson(0);
    setTotalPerPerson(0);
    clearInputField();
  };
  const clearInputField = () => {
    setBill("");
    setNumberOfPerson("");
    setCustomValue("");
    setCustomValueStatus(null);
  };

  const submitCustomValue = () => {
    if (
      customValue &&
      customValue > 0 &&
      customValue != 5 &&
      customValue != 10 &&
      customValue != 15 &&
      customValue != 20 &&
      customValue != 25 &&
      customValue != 50
    ) {
      setTip(customValue);
      setCustomValueStatus(null);
      console.log(customValue);
    }

    // setCustomValueStatus(null);
  };

  return (
    <>
      <div className="card">Generate Tip</div>

      {/* <div className="mainDiv"> */}
      <Container fluid className="mainBody">
        <Container className="mainContainer">
          <Row className="Row1">
            <Col sm="12" lg="6" className="col1">
              <Container className="abc">
                <Row className="firstBillRow">
                  <Col sm="12" lg="12" className="fontStyle">
                    Bill
                  </Col>
                  <Col sm="12" lg="12">
                    <InputGroup className="mb-3">
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control
                        style={{ textAlign: "right" }}
                        label="Number input"
                        type="Number"
                        placeholder="0"
                        aria-label="Amount (to the nearest dollar)"
                        value={bill}
                        onChange={(e) => {
                          setBill(Number(e.target.value));
                        }}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="TipRow">
                  <Col className="fontStyle">Select Tip %</Col>
                </Row>
                <Row>
                  {percentageValues.map((item, index) => {
                    return (
                      <Col keys={index} lg={4} md={6} sm={6} xs={6}>
                        <Button
                          keys={index}
                          className="btn mybtn"
                          value={item}
                          onClick={(e) => {
                            setTip(Number(e.target.value));
                            setCustomValue(false);
                          }}
                        >
                          {item} %
                        </Button>
                      </Col>
                    );
                  })}
                  <Col lg={4} md={6} sm={6} xs={6}>
                    {customValueStatus ? (
                      <>
                        <Row style={{ marginTop: "5px" }}>
                          <Col lg={8} md={10} sm={9} xs={8}>
                            <Form.Control
                              className="customInputFeild"
                              style={{ textAlign: "right" }}
                              label="Number input"
                              placeholder="0"
                              aria-label="Amount (to the nearest dollar)"
                              min={1}
                              type="number"
                              onChange={(e) => {
                                setCustomValue(Number(e.target.value));
                              }}
                            />
                          </Col>
                          <Col lg={4} md={2} sm={3} xs={4}>
                            <Button
                              className="btn  customValueBtn"
                              onClick={(e) => {
                                submitCustomValue();
                              }}
                            >
                              +
                            </Button>
                          </Col>
                        </Row>
                      </>
                    ) : (
                      <Button
                        className="btn Custmbtn"
                        onClick={() => {
                          setCustomValueStatus(true);
                        }}
                      >
                        {customValue ? customValue : "Custom"}
                      </Button>
                    )}
                  </Col>
                </Row>

                <Row className="NumberOfPeopleRow">
                  <Col className="fontStyle" sm="12" lg="12">
                    Number Of People
                  </Col>
                  <Col sm="12" lg="12">
                    <InputGroup className="mb-3">
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control
                        style={{ textAlign: "right" }}
                        label="Number input"
                        type="Number"
                        placeholder="0"
                        aria-label="Amount (to the nearest dollar)"
                        value={NumberOfPerson}
                        onChange={(e) => {
                          setNumberOfPerson(Number(e.target.value));
                        }}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" lg="8">
                    <Button
                      className="submitBtn"
                      onClick={() => calculateTip()}
                    >
                      Calculate Tip
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col sm="12" lg="6" className="resultMainCol">
              <Container>
                <Row className="resultportionfirstRow">
                  <Col className="tipAmountTotal" xs="6" lg="6">
                    Tip Amount <br />
                    <span className="perperson">/ Person</span>
                  </Col>
                  <Col className="TipAmountTotalNumber" xs="6" lg="6">
                    ${tipPerPerson ? Math.round(tipPerPerson) : "0.00"}
                  </Col>
                </Row>
                <Row className="resultportionfirstRow">
                  <Col className="tipAmountTotal" xs="6" lg="6">
                    Total <br />
                    <span className="perperson">/ Person</span>
                  </Col>
                  <Col className="TipAmountTotalNumber" xs="6" lg="6">
                    ${totalPerPerson ? Math.round(totalPerPerson) : "0.00"}
                  </Col>
                </Row>
                <Row className="resetRow">
                  <Col xs="6" lg="6">
                    <Button
                      className="resetBtn mb-2"
                      onClick={() => {
                        resetResult();
                      }}
                    >
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* </div> */}
    </>
  );
};

export default TipCalculator;
