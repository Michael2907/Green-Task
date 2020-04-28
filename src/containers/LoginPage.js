import React, { useState } from 'react';
import { Form, Input, CustomInput, FormGroup, Label, Container, Row, Col } from 'reactstrap';
import logo from '../logo.svg';


const LoginPage = () => {
    const [rememberDevice, setRememberDevice] = useState(true);
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        alert("email: " + email + ", Remember user: " + rememberDevice)
        event.preventDefault();
    }

    const handleEmailChange = ({ target: { value } }) => {
        setEmail(value);
    }

    const handleRememberDevice = () => {
        setRememberDevice(!rememberDevice);
    }


    return (
        <Container>
            <section className="shadow-none p-3 bg-light rounded">
                <section className="content">

                    <Row>
                        <Col><img src={logo} className="App-logo" alt="logo" /></Col>
                    </Row>

                    <Row>
                        <Col><h1>Example login screen</h1></Col>
                    </Row>

                    <Row>
                        <Col><h2>Getting started with Green.</h2></Col>
                    </Row>

                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col> <FormGroup>
                                <Label for="Email">Email Address</Label>
                                <Input type="email" name="email" id="Email" value={email} onChange={handleEmailChange} />
                            </FormGroup></Col>
                        </Row>

                        <Row>
                            <Col>  <FormGroup>
                                <CustomInput type="checkbox" id="CustomCheckbox" label="Remember this device" value={rememberDevice} defaultChecked={rememberDevice} onChange={handleRememberDevice} />
                            </FormGroup></Col>
                        </Row>

                        <Row>
                            <Col>
                                <button type="submit" value="Submit"><label>Sign In</label></button></Col>
                        </Row>

                    </Form>
                </section>
            </section>
        </Container >
    )
}

export default LoginPage;


