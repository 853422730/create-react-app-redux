import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

class App extends Component {
    state={
      current:'当前状态'
    };
    clickFun = () => {
        alert(`你点击到的状态是${this.state.current}`)
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hello word</h1>
                </header>
                <button onClick={this.clickFun}>点击我</button>
                {this.props.children}
            </div>
        );
    }
}

export default App;
