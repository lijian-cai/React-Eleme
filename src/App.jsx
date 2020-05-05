// root component
import React from 'react'
import {Component} from 'react'

import Test from './components/Test.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Test />
     );
  }
}
 
export default App;