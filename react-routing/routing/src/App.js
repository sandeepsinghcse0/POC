import React from "react";
import { Router, Route, browserHistory } from "react-router";

function Home(props) {
  return <h1>Home</h1>;
}

function Contact(props) {
  return <h1>Contact</h1>;
}

function News(props) {
  return <h1>News</h1>;
}

function About(props) {
  return <h1>About</h1>;
}

function App() {
  return (
    <div className="App">
      <ul className='nav'>
        <li className='nav-link'> <a href='/home'>Home</a></li>
        <li className='nav-link'><a href='/news'>News</a></li>
        <li className='nav-link'><a href='/contact'>Contact</a></li>
        <li className='nav-link'><a href='/about'>About</a></li>
        <li className='nav-link'><a href='/product'>Poduct</a></li>
        <li className='nav-link'><a href='/services'>Services</a></li>
      </ul>
      <Router history={browserHistory}>
          <Route path="/home" component={Home}></Route>
          <Route path="news" component={News}></Route>
          <Route path="contact" component={Contact}></Route>
          <Route path="about" component={About}></Route>
      </Router>
    </div>
  );
}

export { Home, Contact, News, About };

export default App;
