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
        <Header className="header-color" title={<a style={{textDecoration: 'none', color: 'white'}} href="/">HUGO TAMAYO ROJAS</a>} scroll>
            <Navigation>
                <a href="/resume">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">HUGO TAMAYO ROJAS</Link>}>
            <Navigation>
              <a href="/resume">Resume</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
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
