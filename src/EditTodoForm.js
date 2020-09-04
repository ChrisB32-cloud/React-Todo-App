import React, { Component } from 'react';

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
      isEditing: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e) {
    //
    this.setState({
      [e.target.name]: e.target.value,
      id: this.props.val_Id,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.passEditFunc(this.state);
    this.setState({
      name: '',
    });
  }

  handleToggle() {
    //
    this.props.buttonToggle(this.state.name);
    // this.props.newSetFunc();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <fieldset> */}
          <label htmlFor="name"></label>
          <input
            id="name"
            name="name"
            // type="text"
            value={this.state.name}
            placeholder={`${this.props.val}`}
            onChange={this.handleChange}
          />
          <button onClick={this.handleToggle}>Save</button>
          {/* </fieldset> */}
        </form>
      </div>
    );
  }
}
export default EditTodoForm;
