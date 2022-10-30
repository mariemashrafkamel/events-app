import React from 'react'
import eventsLogo from '../images/events.png'
function Home() {
  return (
    <div className="home">
      <div className="home-div">
        <div className="divCard">
          <h4>Our Events</h4>
          <p style={{fontSize:"20px",width:"50%",margin:"auto"}}>Our Events in scout are unique and enjoyable</p>
          <img src={eventsLogo} style={{width: '50%',margin: 'auto'}}/>
        </div>
        <div className="divCard">
          <h4>Users</h4>
          <h4>Users</h4>
          <h4>Users</h4>
          </div>
        <div className="divCard">
          <h4>Chat With Us</h4>
          <h4>Chat With Us</h4>
          <h4>Chat With Us</h4>
          </div>
      </div>
     {/*  <div id="block">
        <h4>Our Events</h4>
        <h4>Our Events</h4>
        <h4>Our Events</h4>
      </div>
      <div id="inline">
        <h4>Users</h4>
        <h4>Users</h4>
        <h4>Users</h4>
        </div>
      <div id="inlineBlock">
        <h4>Chat With Us</h4>
        <h4>Chat With Us</h4>
        <h4>Chat With Us</h4>
        </div> */}
    </div>
  )
}

export default Home
