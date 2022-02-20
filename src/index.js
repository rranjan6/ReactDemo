import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if(hours<12)timeOfDay="Good Morning"
  else if(hours>=12 && hours<=17) {
    timeOfDay="Good Afternoon"
  }
  else{
    timeOfDay="Good Night"
  }

  return (
    <h1>{timeOfDay}</h1>
  )
}

ReactDOM.render(
  <h1><App/></h1>,
  document.getElementById('root')
);
