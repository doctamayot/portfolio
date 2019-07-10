import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './hugo.jpg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={logo}
              alt="Hugo"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>HUGO TAMAYO ROJAS </h1>
              <h2>Full Stack Web Developer</h2>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Ruby on Rails | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://www.linkedin.com/in/hugo-tamayo-8126b791" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://www.github.com/doctamayot" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://www.twitter.com/doctamayot" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://www.facebook.com/hugo.tamayo" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
