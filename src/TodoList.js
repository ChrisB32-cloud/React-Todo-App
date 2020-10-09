import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
// import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{ name: '' }],
    };
    this.addItem = this.addItem.bind(this);
    this.showList = this.showList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  //

  addItem(item) {
    //
    const newItem = { ...item, id: uuidv4() };
    this.setState((state) => ({
      items: [...state.items, newItem],
    }));
  }

  editItem(item) {
    this.state.items.filter((newIt) => {
      if (newIt.id === item.id) {
        newIt.name = item.name;
      }
    });

    this.setState((state) => ({
      items: [...state.items],
    }));
  }

  deleteItem(id) {
    // console.log(this.state.items);
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  }

  showList() {
    return (
      <ul>
        {this.state.items.map((item, id) => (
          <li className="List_li" key={id} id={item.id}>
            {item.name === '' ? (
              ''
            ) : (
                <Todo
                  params={item.name}
                  id={item.id}
                  func={this.deleteItem}
                  editFunc={this.editItem}
                // setFunc={this.setNewItem}
                />
              )}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log(this.state.items);
    return (
      <div className="TodoListContainer">
        <h1><u>Todo List</u></h1>
        {this.showList()}
        <NewTodoForm func={this.addItem} />
      </div>
    );
  }
}

export default TodoList;
