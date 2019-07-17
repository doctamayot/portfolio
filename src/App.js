import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      
      <div className="demo-big-content">
      
    <Layout className="hugo">
        <Header className="header-color" title={<a style={{textDecoration: 'none', color: 'white'}} href={process.env.PUBLIC_URL + "/"}>HUGO TAMAYO ROJAS</a>} scroll>
            <Navigation>
                <a href={process.env.PUBLIC_URL + "/resume"}>About Me</a>
                <a href={process.env.PUBLIC_URL +"/projects"}>Projects</a>
                <a href={process.env.PUBLIC_URL +"/contact"}>Contact</a>
            </Navigation>
        </Header>
        <Drawer className="hamb"  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">HUGO TAMAYO ROJAS</Link>}>
            <Navigation>
              <a href={process.env.PUBLIC_URL + "/resume"}>Resume</a>
              <a href={process.env.PUBLIC_URL + "/projects"}>Projects</a>
              <a href={process.env.PUBLIC_URL + "/contact"}>Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
