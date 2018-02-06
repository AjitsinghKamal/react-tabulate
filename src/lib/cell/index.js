import React, { PureComponent } from 'react';

const defStyle = {
	padding: '10px',
	flex: '1 0'
}


class Cell extends PureComponent {
	render() {
		const cellStyle = Object.assign({}, defStyle, this.props.cellStyle);
		return (
			<div className="row_cell" style={cellStyle} >{this.props.value}</div>
		)
	}
}

export default Cell;