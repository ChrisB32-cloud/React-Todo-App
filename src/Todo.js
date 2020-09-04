import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
// import PlusIcon from '@material-ui/icons/Plus';
// import { mdiPencil } from '@mdi/js';
import EditTodoForm from './EditTodoForm';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      name: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick_2 = this.handleClick_2.bind(this);
    // this.handleClick_3 = this.handleClick_3.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e) {
    //
    this.setState({
      [e.target.name]: e.target.value,
      id: this.props.id,
    });
  }

  handleToggle(e) {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
    // this.setState({ isEditing: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editFunc(this.state);
    this.setState({
      isEditing: false,
      name: '',
    });
  }

  handleClick() {
    this.props.func(this.props.id);
  }
  handleClick_2() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    // console.log(this.state.isEditing);
    // console.log(this.state.name);

    let result;
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"></label>
          <input
            id="name"
            name="name"
            type="text"
            className="editInput"
            value={this.state.name}
            placeholder={`${this.props.params}`}
            onChange={this.handleChange}
          />
          {/* <button onClick={this.handleToggle}>Save</button> */}
          <button className="upDateBtn" onClick={this.handleToggle}>
            <AddIcon style={{ fontSize: 'large', font: 'bold' }} />
          </button>
        </form>
      );
    } else {
      result = (
        <div className="edDeBtnContainer">
          {/* {this.state.name === '' ? this.props.params : this.state.name} */}
          {this.props.params}: {/* {this.state.name}:  */}
          {/* <button onClick={this.handleClick_2}>Edit</button>{' '} */}
          {/* <button onClick={this.handleClick}>x</button> */}
          <div className="editDeleteBtn">
            <EditIcon onClick={this.handleClick_2} />
            <DeleteIcon onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    return result;
  }
}
export default Todo;

// <div>
//   <EditTodoForm
//     passEditFunc={this.props.editFunc}
//     val={this.props.params}
//     val_Id={this.props.id}
//     eventToggle={this.state.isEditing}
//     buttonToggle={this.handleClick_3}
//     newSetFunc={this.props.setFunc}
//     // disable={this.state}
//   />
//   {/* <button onClick={this.handleClick_2}>Save</button> */}
// </div>
