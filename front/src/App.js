import axios from "axios";
import React from "react";
import Card from 'react-bootstrap/Card';
import './App.css';
import WithHeaderStyledExample from './components/train_details.js';
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App(){
  const [trains, getTrains] = React.useState([]);
  

  React.useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/trains',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
      getTrains(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
    
  }, []);
      return (
      <div className="App">
         <Card.Header as="h5" className="title">JTrains Systems</Card.Header>
        {/* <WithHeaderStyledExample /> */}
        {/* <WithHeaderStyledExample /> */}
        {trains.map((e)=>{
            return (
            <WithHeaderStyledExample info = {e} />
          );})}
      </div>
    );
  
}

export default App;
