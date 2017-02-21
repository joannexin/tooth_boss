import React from 'react';
import {render} from 'react-dom';
import HomePage from './components/HomePage.jsx';
import AwesomeComponent from './components/AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <HomePage />
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
