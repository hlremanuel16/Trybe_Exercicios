import React from 'react';
import './App.css';

const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

const tasks = ['acordar', 'academia', 'estudar'];

class App extends React.Component {
  render() {
    return(
      <ul>{ tasks.map((task) => Task(task)) }</ul>
    );
  }
}

export default App;
