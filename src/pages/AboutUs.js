import React from 'react';
import Layout from '../components/Layout';

export default function AboutUs() {
  return (
    <Layout>
      <div className="about-us-page">
        <div className="main">
          <img
            className="group"
            src={require("../assets/imgs/pokemon-group-pic.jpg")}
            alt="" />
          <h1>Gotta catch 'em all!</h1>
        </div>

        <div className="who-are-we">
          <h1>Who are we?</h1>
        </div>

        <div className="about-us">
          <div className="about-us-text">
              <h2>About Us</h2>
            <p>We are a group of Computer Science students that are currently taking CPSC 349, which is a Web Front-End
              Engineering. For this project we wanted to help Pokemon trainers reach their goal of getting every
              Pokemon as well as help facilitate trades between them!
            </p>
          </div>
          <img
            className="squirtle"
            src={require("../assets/imgs/squirtle.png")}
            alt="" />
        </div>

        <div className="team-members">
          <img
            className="pikachu"
            src={require("../assets/imgs/pikachu1.png")}
            alt="" />
            <div className="team-members-text">
                <h2>Team Members</h2>
                <ol className="name-list">
                    <li>James Cadavona</li>
                    <li>Kevin Ponting</li>
                    <li>Cyrus Baybay</li>
                    <li>Ashton Yoshino</li>
                </ol>
            </div>
        </div>

        <div className="contact-us">
          <div className="form">
            <h2 className="form-text">Contact Us</h2>
            <input className="first-name" placeholder="First Name" type="text"/>
            <input className="last-name" placeholder="Last Name" type="text"/>
            <input className="email" placeholder="Email" type="text"/>
            <textarea className="comment" cols="30" rows="10" placeholder="Comment"></textarea>
          </div>

          <img
            src={require("../assets/imgs/charmander.png")}
            className="charmander"
            alt="" />
        </div>
      </div>
    </Layout>
  )
}
