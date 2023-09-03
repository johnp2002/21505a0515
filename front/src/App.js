import axios from "axios";
import React from "react";

import './App.css';
import WithHeaderStyledExample from './components/train_details.js';
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App(){
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(post)
    });
  }, []);
      return (
      <div className="App">
        <WithHeaderStyledExample />
        <WithHeaderStyledExample />
      </div>
    );
  
}

export default App;
