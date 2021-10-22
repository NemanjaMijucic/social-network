import "./App.css";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Nav from "./Nav";
import Create from "./Create";
import Posts from './Posts';
import Post from './Post';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get('https://dummyapi.io/data/v1/post?limit=10', {
      headers: {
       "app-id": "616e75e6a7d1af79dadb9732"
     }
    }).then(result => {
     setPosts( result.data.data.map( item => {
        return item 
      }))
      
    });
  }, [])


  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <div className="wrapper">
        <Switch>
          <Route path="/create/" component={Create} />
          <Route path="/id" component={Post} />
          <Route path="/" component={Posts}><Posts posts={posts} key={posts.map(p =>  p.id)} /></Route>
         
        </Switch>
        </div>
          
      </div>
    </Router>
  );
}



export default App;
