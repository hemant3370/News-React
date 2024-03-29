import React from 'react';
export default class Test extends React.Component {
  
    constructor() {
      super(); 
      this.name = 'MyComponent';
      
      this.handleClick2 = this.handleClick1.bind(this);
    }
    
    handleClick1() {
      alert(this.name);
    }
    
    handleClick3 = () => alert(this.name);
  render() {
      return (
        <div>
          <button onClick={this.handleClick1()}>click 1</button>
          <button onClick={this.handleClick1}>click 2</button>
          <button onClick={this.handleClick2}>click 3</button>
          <button onClick={this.handleClick3}>click 4</button>
        </div>
      );
    }
  }