import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Home } from './Home';
// import { About } from './About';
// import { Contact } from './Contact';
// import { NoMatch } from './NoMatch';
import { Layout } from './Components/Layout';
import { NavigationBar } from './Components/NavigationBar';
import { Jumbotron } from './Components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            
          </Switch>
        </Layout>
      </Router> 
    </React.Fragment>
  );
}

export default App;
