import React from 'react';
import { useState } from 'react';
import './style.css';
import TeamDetails from "./TeamDetails.js";
import ig from "./images/instagram.png";
import li from "./images/linkedin.png"
import twit from "./images/twitter.png" 
import git from "./images/github.png" 
import { Link } from 'react-router-dom';

function AboutUs() {

  




  return (
    <div className="team-main">
      <h1> CSI COUNCIL 2023-24</h1>
      <div className="container row">
        {TeamDetails.map((member)=>
        <div className='image' style={{ background: `url(${member.img}) no-repeat 50% / cover` }} key={member.id}>
        <div className="content  col">
          <h2>{member.name}</h2>
            <span>{member.post}</span>
              <div className='socials'>
                <a href={member.ig} target='_blank'>
                  <img src={ig} alt='instagram' />
                </a>
                <a href={member.git} target='_blank'>
                  <img src={git} alt='gtihub' />
                </a>
                <a href={member.linkedin} target='_blank'>
                  <img src={li} alt='linkedin' />
                </a>
                {member.twit &&
                  <a href={member.twit} target='_blank'>
                    <img src={twit} alt='twitter' />
                  </a>
                }
            </div>
        </div>
      </div>
        )}
    
      </div>
      

    </div>
  )
}

export default AboutUs;
