import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsFacebook,BsGoogle } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react'


function Startup() {

  const [login, setLogin] = useState(true)

  var x
  
  return (
    <div className="startup">
      <Card className="login_card" border="light" style={{ width: '60%' ,backgroundColor:'transparent',display: 'flex',flexDirection:'column',alignItems: 'center',paddingTop:'3%'}}>
        <Card.Header><h1>Welcome</h1></Card.Header>
        <Card.Body style={{display: 'flex',flexDirection:'column',alignItems: 'center'}}>
            <div className="startup_buttons">
              <Button className={!login? 'active':''} variant="outline-light" style={{display: 'flex',marginRight:'20px'}} onClick={()=> setLogin(false)}>Sign Up</Button>
              <Button  className={login? 'active':''} variant="outline-light" onClick={()=> setLogin(true)} >Login</Button>
            </div>
            <h6>Connect With Your Accounts</h6>
            <div className="social_buttons">
              <Button variant="outline-light" style={{width:'100%',display: 'flex',flexDirection:'space-between',marginRight:'20px'}}><BsFacebook/></Button>
              <Button  variant="outline-light"><BsGoogle/></Button>
            </div>
            <p>OR</p>
            {login && (
               <Form style={{  display: 'flex',flexDirection:'column',alignItems: 'center'}}>
               <Form.Group className="mb-2" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" placeholder="Enter email" />
               
               </Form.Group>
 
               <Form.Group className="mb-2" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" />
               </Form.Group>
             
               <Button  variant="outline-light" type="submit">
                 Login
               </Button>
             </Form>

            )}
            {!login && (
               <Form style={{  display: 'flex',flexDirection:'column',alignItems: 'center'}}>
               <Form.Group className="mb-2" >
                 <Form.Label>User Name</Form.Label>
                 <Form.Control type="text" placeholder="Enter User Name" />
               </Form.Group>
               <Form.Group className="mb-2" >
                 <Form.Label>Mobile Number</Form.Label>
                 <Form.Control  placeholder="Enter Mobile Number" />
               </Form.Group>
               <Form.Group className="mb-2" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" placeholder="Enter email" />
               </Form.Group>
 
               <Form.Group className="mb-2" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" />
               </Form.Group>
             
               <Button  variant="outline-light" type="submit">
                 Sign Up
               </Button>
             </Form>

            )}
           
        </Card.Body>
      </Card>
     
      
      
    {/* <Row>
        <Col lg="9">
            <h2>Welcome</h2>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}
      
    </div>
  )
}

export default Startup


