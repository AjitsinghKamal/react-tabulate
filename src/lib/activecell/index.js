import React, { Component } from 'react';

const defStyle = {
	padding: '10px',
	flex: '1 0',
}


class ActiveCell extends Component {
	constructor(props) {
		super(props);
		this.dispactch = this.dispactch.bind(this)
		this.state = {order: 0}
	}
	dispactch() {
		const order = (this.state.order < 0)? 1 : -1;
		this.setState({order}, () => {
			this.props.sort(this.state.order, this.props.dataIndex);
		})
	}
	render() {
		const cellStyle = Object.assign({}, defStyle, this.props.cellStyle);
		return (
			<div className="row_cell" style={cellStyle} onClick={this.dispactch}>{this.props.value}</div>
		)
	}
}

export default ActiveCell;