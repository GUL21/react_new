import React from 'react';

const style = {
	header: {
		backgroundColor: 'black',
	},
	h1: {
		color: 'grey',
		fontWeight: 'normal',
		margin: '0px',
		padding: '10px 0px 10px 30px',
	}
}

function Header() {
  return (
    <header style={style.header}>
      <h1 style={style.h1}>ToDo List</h1>
    </header>
  );
}

export default Header;