import React, { Component} from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Manage from '../components/Manage';
import history from '../history';
import { Router , Route} from 'react-router-dom';


class App extends Component {



  render() {
    return (
        <div className="App">
            <Router history={history}>
                <Navbar/>
                <Route path="/" exact component={Main}/>
                <Route path="/manage" exact component={Manage}/>
            </Router>  
        </div>
    );
  }
}

export default App;
