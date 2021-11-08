import React from 'react'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      helloClicks: 0,
      goodbyeClicks: 0,
      welcomeClicks: 0
    };

    this.hello =this.hello.bind(this);
    this.goodbye =this.goodbye.bind(this);
    this.welcome =this.welcome.bind(this);
  }

  hello() {
    this.setState((prevQntnd, _props) => ({
      helloClicks: prevQntnd.helloClicks + 1
    }), () => {
      console.log(`Botão hello ${this.getButtonColor(this.state.helloClicks)}`)
    })
  };
  goodbye() {
    this.setState((prevQntnd, _props) => ({
      goodbyeClicks: prevQntnd.goodbyeClicks + 1
    }), () => {
      console.log(`Botão goodbye ${this.getButtonColor(this.state.goodbyeClicks)}`)
    })
  };
  welcome() {
    this.setState((prevQntnd, _props) => ({
      welcomeClicks: prevQntnd.welcomeClicks + 1
    }), () => {
      console.log(`Botão hello ${this.getButtonColor(this.state.clicksBtnThree)}`)
    })
  };

  getButtonColor(num) {
    return num % 2 === 0 ? 'green': 'white'
  };

  render() {
    const {helloClicks, goodbyeClicks, welcomeClicks} = this.state;
    return (
    <div className="App">
      <button
        onClick={this.hello}
        style={{backgroundColor: this.getButtonColor(helloClicks)}}
      >hello</button>
      <button 
        onClick={this.goodbye}
        style={{backgroundColor: this.getButtonColor(goodbyeClicks)}}
      >goodbye</button>
      <button 
        onClick={this.welcome}
        style={{backgroundColor: this.getButtonColor(welcomeClicks)}}
      >welcome</button>
    </div>
  );
  }
}

export default App;
