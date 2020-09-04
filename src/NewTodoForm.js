import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    //
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const newItem = { ...this.state, id: uuidv4() };
    this.props.func(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div>
        <h2>New Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"></label>
          <input
            id="name"
            name="name"
            // type="text"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          <button className="addBtn">
            <AddBoxIcon />
          </button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
