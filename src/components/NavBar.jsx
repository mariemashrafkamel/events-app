import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {
  return (
    <div className="navBar">
       <h4 className="mr-2">Scout Events </h4>
        <div>
           
                <a href="#" >Home</a>
                <a href="#" >Profile</a>
                <a href="#" >Contact Us</a>
                <a href="#" >About Us</a>
              
          
        </div>
      
    </div>
  )
}

export default NavBar
