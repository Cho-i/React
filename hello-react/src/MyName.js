import React, { Component } from 'react';

class MyName extends Component{
	render(){
		return(
			<div>REACT {this.props.name}</div>
		);
	}

}

export default MyName;