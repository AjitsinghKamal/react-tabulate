import React, { Component } from 'react';
import Cell from '../cell';
import ActiveCell from '../activecell';

const defStyle = {
	display: 'flex',
	flexFlow: 'row nowrap',
	alignItems: 'center',
	justifyContent: 'center',
}




class Row extends Component{
	constructor(props) {
		super(props);
		this.createRow = this.createRow.bind(this);
	}

	createRow(){
		const { column, values, head, cellStyle } = this.props;
		if (head) {
			return column.map((cellMap, index) => <ActiveCell dataIndex={cellMap.dataIndex} value={cellMap.title} sort={this.props.sort} cellStyle={cellStyle} />)
		} else {
			return (
				column.map((cellMap, index) => {
					const pos = cellMap.dataIndex;
					return <Cell dataIndex={cellMap.dataIndex} value={values[pos]} cellStyle={cellStyle} />
				})
			);
		}
	}
	render() {
		let styles = (this.props.rowStyle)? Object.assign({},this.props.rowStyle, defStyle) : defStyle;
		if (this.props.fixed) {
			styles.position = 'fixed',
			styles.width = 'inherit'
		}
		if(this.props.head) {
			styles = Object.assign({}, styles, this.props.head);
		}
		const cells = this.createRow(this.props);
		return (
			<div className="row" style={styles}>{cells}</div>
		)
	}
}

export default Row;