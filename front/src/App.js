import React from 'react';
import './App.css';
import WithHeaderStyledExample from './components/train_details.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
      fetch(
  "https://api.example.com/items")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
          console.log(this.state)
  }
  render(){
    
      return (
      <div className="App">
        <WithHeaderStyledExample />
        <WithHeaderStyledExample />
      </div>
    );
  }
}

export default App;
