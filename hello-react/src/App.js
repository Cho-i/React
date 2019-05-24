import React, { Component } from 'react';
import MyName from './MyName';
import './App.css';

class App extends Component{
	render(){
		return(
			<div>
				HELLO
				<MyName name="aaa"/>
			</div>
		);
	}
}

export default App;
