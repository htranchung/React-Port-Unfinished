import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return(
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="React Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Experience">Experience</Link>
            </Navigation>
        </Header>
        <Drawer title="React Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Experience">Experience</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
