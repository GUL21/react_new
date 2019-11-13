import React, { Component } from 'react'
import PropTypes from 'prop-types';
import logo from './basket.png';

const img = {
    width: '20px',
    height: '20px',
    float: 'right',
    cursor: 'pointer',
  }

const list = {
  ul: {
    marginLeft: '300px',
    listStyle: 'none',
  },
  li: {
    border: "1px solid grey",
    width: "600px",
    marginBottom: "5px",
    padding: "10px",
  },
  span: {
    marginLeft: '30px',
  }
}

export class TodoItem extends Component {
    getStyle = () => {
        return {
            border: "1px solid grey",
            width: "600px",
            marginBottom: "5px",
            marginLeft: "400px",
            padding: "10px",
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
   
  render() {
      const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" className="custom-checkbox" style={{marginRight: '10px'}} onChange={this.props.markComplete.bind(this, id)}/> 
        {title}
        <img src={logo} alt={"logo"} className="btnDel" style={img} onClick={this.props.delete.bind(this, id)} />
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
