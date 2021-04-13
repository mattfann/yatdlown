import React, { Component } from 'react';
import SaveButton from './SaveButton.js'
import InputBox from './InputBox.js';

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(input) {
      this.setState({value: input});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (<form onSubmit={this.handleSubmit}>
          <label>
            List:
            <input type="text" value={this.state.value} onChange={this.handleChange(this.state.value)} />
          </label>
          <p>{this.state.value}</p>
          <input type="submit" value="Save" />
          </form>
      );
    }
  }
export default List;