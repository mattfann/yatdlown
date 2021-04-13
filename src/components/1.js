import React, {Component} from 'react'

class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    list: []};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
    addItem() {
        this.state.list.push(this.state.value)
    }

    render() {
      return (<div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.addItem()} />
          
        </form>
        <p>{this.state.list}</p>
        <p>{this.state.value}</p>
        </div>
      );
    }
  }

  export default NameForm