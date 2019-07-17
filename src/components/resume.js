import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';


import logo from './hugo.jpg'
import react from './react.png'
import express from './express.png'



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={logo}
                alt="Hugo Tamayo"
                style={{height: '400px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Hugo Tamayo Rojas</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hello, I’m a full-stack web developer and industrial engineer from Bogotá, Colombia. My passion is programming, that´s the reason so I decided to start my career as web developer..</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Bogotá, Colombia</p>
            <h5>Phone</h5>
            <p>(314) 4261190</p>
            <h5>Email</h5>
            <p>doctamayot@hotmail.com</p>
            <h5>Web</h5>
            <p>https://doctamayot.github.io/portfolio</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Make it Real"
              schoolDescription="Bootcamp Full Stack Web Developer"
                />
            
            <Education
              startYear={2002}
              endYear={2007}
              schoolName="Politecnico Grancolombiano"
              schoolDescription="Industrial Engineer"
               />

            
                <hr style={{borderTop: '3px solid #e22947'}} />

              
           
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <span>
                <img src="https://img.icons8.com/color/144/000000/javascript.png"/>
              </span>
              <span>
                <img src="https://img.icons8.com/color/144/000000/html-5.png"/>
              </span>
              <span>
                <img src="https://img.icons8.com/color/144/000000/bootstrap.png"/>
              </span>
              <span>
                <img style={{width: '11%'}} src={react}/>
              </span>
              <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img style={{width: '13%'}} src={express}/>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>
              <img src="https://img.icons8.com/color/144/000000/ruby-gem.png"/>
              </span>
              
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
