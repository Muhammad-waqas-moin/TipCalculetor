import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const MyTipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [NumberOfPerson, setNumberOfPerson] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState(0.0);
  const [totalPerPerson, setTotalPerPerson] = useState(0.0);
  let percentageValues = [5, 10, 15, 25, 50];

  const calculateTip = () => {
    if (bill && tip && NumberOfPerson) {
      console.log(bill);
      console.log(tip);
      console.log(NumberOfPerson);
      calTip(bill, tip, NumberOfPerson);
      clearInputField();
    } else {
      console.log("Fill all fields");
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
  };

  return (
    <>
      <Container fluid className="body">
        <Container>
          <div className="main font">
            <p>Generate Tip</p>
          </div>
          <Row>
            <Col>
              <Row className="mainBody">
                {/* section 1 */}

                <Col className="section1 mx-2">
                  <Row>
                    <Col lg={3} md={6} sm={12} xs={12}>
                      <p className="font">Bill </p>
                    </Col>
                  </Row>

                  <Row>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control
                        className="BillInput"
                        type="number"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="0"
                        value={bill}
                        onChange={(e) => {
                          setBill(Number(e.target.value));
                        }}
                      />
                    </InputGroup>
                  </Row>

                  <Row>
                    <p className="font">Select Tip % </p>
                  </Row>

                  <Row>
                    {percentageValues.map((item, index) => {
                      return (
                        <Col keys={index} lg={4} md={6} sm={6} xs={6}>
                          <Button
                            className="btn mybtn"
                            value={item}
                            onClick={(e) => {
                              setTip(Number(e.target.value));
                            }}
                          >
                            {item} %
                          </Button>
                        </Col>
                      );
                    })}
                    <Col lg={4} md={6} sm={6} xs={6}>
                      <Button className="btn Custmbtn">Custom </Button>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <Button
                        className="btn mybtn"
                        value={5}
                        onClick={(e) => {
                          setTip(Number(e.target.value));
                        }}
                      >
                        5 %
                      </Button>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <Button
                        className="btn mybtn"
                        value={10}
                        onClick={(e) => {
                          setTip(Number(e.target.value));
                        }}
                      >
                        10 %
                      </Button>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <Button
                        className="btn mybtn"
                        value={15}
                        onClick={(e) => {
                          setTip(Number(e.target.value));
                        }}
                      >
                        15 %
                      </Button>
                    </Col>

                    <Col lg={4} md={6} sm={6} xs={12}>
                      <Button
                        className="btn mybtn"
                        value={25}
                        onClick={(e) => {
                          setTip(Number(e.target.value));
                        }}
                      >
                        25 %
                      </Button>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <Button
                        className="btn mybtn"
                        value={50}
                        onClick={(e) => {
                          setTip(Number(e.target.value));
                        }}
                      >
                        50 %
                      </Button>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <Button className="btn Custmbtn">Custom </Button>
                    </Col>
                  </Row>  */}

                  <Row className="nump">
                    <Col>
                      {" "}
                      <p>Number Of Peoples</p>{" "}
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={8} md={8} sm={12} xs={12}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text> P</InputGroup.Text>
                        <Form.Control
                          className="BillInput"
                          aria-label="Amount (to the nearest dollar)"
                          placeholder="0"
                          value={NumberOfPerson}
                          onChange={(e) => {
                            setNumberOfPerson(Number(e.target.value));
                          }}
                        />
                      </InputGroup>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Button
                        variant="primary"
                        className=" btn mybtn"
                        onClick={() => calculateTip()}
                      >
                        Calculate
                      </Button>
                    </Col>
                  </Row>
                </Col>

                {/* section 2 */}
                <Col className="section2">
                  <Row className="sec2ROw">
                    <Col>
                      {/* /// */}
                      <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                          <p className="sec2text">
                            Tip Amount <br /> /person
                          </p>
                        </Col>

                        <Col lg={6} md={6} sm={6} xs={12}>
                          <h1 className="sec2text">
                            ${tipPerPerson ? tipPerPerson : "0.00"}
                          </h1>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={6} md={6} sm={6} xs={12}>
                          <p className="sec2text">
                            Total <br /> /person
                          </p>
                        </Col>

                        <Col lg={6} md={6} sm={6} xs={12}>
                          <h1 className="sec2text">
                            ${totalPerPerson ? totalPerPerson : "0.00"}
                          </h1>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          {" "}
                          <Button
                            className="btn Rbtn"
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            onClick={() => {
                              resetResult();
                            }}
                          >
                            {" "}
                            RESET
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MyTipCalculator;
