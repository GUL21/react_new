import React, { Component } from 'react'

const style = {
  div: {
    marginLeft: '400px',
    marginTop: '100px',
    marginBottom: '40px',
  },
  h2: {
    color: 'black',
    fontWeight: 'normal',
  },
}

const inputik  = {
  width: '400px',
  padding: '5px',
}

const submit  = {
  width: '50px',
  padding: '5px',
  marginLeft: '20px',
  color: 'white',
  backgroundColor: 'blue',
}

export class AddTodo extends Component {

    //This is the value of the text input field and is updated as user types in a new value
    state = {
        title: ''
    }

    //Updates the 'title' state of the text input field
    onChange = (e) => this.setState({ title: e.target.value });

    //Submits the title value of input field to create new Todo
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    };

  render() {
    return (
     <div style={style.div}>
     <h2 style={style.h2}>ToDo List</h2>
     <form onSubmit={this.onSubmit}>
         
         <input type="text" name="title" placeholder="Add Todo" style={inputik} value={this.state.title} onChange={this.onChange}/>
        
         <input type="submit" value="Add" style={submit}/>

     </form>
     </div>
    )
  }
}

export default AddTodo;
