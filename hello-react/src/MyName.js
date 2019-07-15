import React, { Component } from 'react';

class MyName extends Component{
	static defaultProps = {
		name:'test'
	}
	render(){
		return(
			<div>Hello! My name is {this.props.name}</div>
		);
	}

}

export default MyName;