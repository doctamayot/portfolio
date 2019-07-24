import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import lex from './lex.jpg'
import recon from './recon.jpg'
import make from './make.jpg'
import stark from './stark.png'
import gastos from './gastos.png'




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}} >
            <img
              src={lex}
              alt="Hugo"
              className="web-img"
              />lexnlaw.com</CardTitle>
            
            <CardText>
            Technology : JQuery, Bootstrap, TweenMax.
            </CardText>
            <CardActions border>
              
              <Button colored><a href='http://www.lexnlaw.com'>Enjoy</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}} >
            <img
              src={recon}
              alt="reconciliemos"
              className="web-img"
              />.com</CardTitle>
            
            <CardText>
              Technology : JQuery, Bootstrap.
            </CardText>
            <CardActions border>
            <Button colored><a href='http://www.reconciliemoscolombia.com'>Enjoy</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

           {/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px'}} >
        <img
          src={stark}
          alt="reconciliemos"
          className="web-img"
          />.com</CardTitle>
        
        <CardText>
          Technology : Ruby on Rails
        </CardText>
        <CardActions border>
        <Button colored><a href='https://obscure-savannah-61787.herokuapp.com/'>Enjoy</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project 5 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px'}} >
        <img
          src={gastos}
          alt="reconciliemos"
          className="web-img"
          />.com</CardTitle>
        
        <CardText>
          Technology : Ruby on Rails
        </CardText>
        <CardActions border>
        <Button colored><a href='https://peaceful-eyrie-81264.herokuapp.com/'>Enjoy</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}} >
            <img
              src={make}
              alt="makeit"
              className="web-img"
              />.com</CardTitle>
            
            <CardText>
              All projects of Make it Real Bootcamp FULL STACK WEB DEVELOPER .
            </CardText>
            <CardActions border>
            <Button colored><a href='https://www.makeitreal.camp/u/doctamayot'>Enjoy</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
         

        </div>

        


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>WEB PROJECTS</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
