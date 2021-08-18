import React, { Component } from 'react'
import "./About.css"

export class About extends Component {
  render() {
    return (
      <div className="about">
        
          <h1>Helping millions grow better.</h1>
        <img src="https://cdn.givingcompass.org/wp-content/uploads/2018/12/18122334/3-Big-Global-Problems-to-Fix-in-2019.jpg"/>
        
      
        <div className="about__goals">
          <div className="about__goal">
            <h2>Our Mission</h2>
            <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
          </div>
          <div className="about__goal">
            <h2>Our Story</h2>
            <p>As fellow graduate students at MIT in 2004, Brian and Dharmesh noticed a shift in the way people shop and buy. Consumers were no longer tolerating interruptive bids for their attention — in fact, they'd gotten really, really good at ignoring them.

From this shift, a company was born: HubSpot. It was founded on "inbound", the notion that people don't want to be interrupted by marketers or harassed by salespeople — they want to be helped.

Today, the inbound movement continues to empower businesses around the world to stop interrupting, start helping, and return their focus to the customer.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
