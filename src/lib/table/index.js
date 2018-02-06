import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../row';


class Table extends Component{
	constructor(props) {
		super(props) ;
		this.state = {
			data: this.props.data
		}
		this.sort = this.sort.bind(this);
		this.createRows = this.createRows.bind(this);
	
	}

	sort(order, dataIndex) {
		function sortAscending(a, b) {
			if (a[dataIndex] < b[dataIndex]) {
				return -1;
			} else if (a[dataIndex] > b[dataIndex]) {
				return 1;
			} else {
				return 0;
			}
		}

		function sortDescending(a, b) {
			if (a[dataIndex] > b[dataIndex]) {
				return -1;
			} else if (a[dataIndex] < b[dataIndex]) {
				return 1;
			} else {
				return 0;
			}
		}
		function sortNumericAscending(a, b) {
			return a[dataIndex] - b[dataIndex];
		}
		function sortNumericDescending(a, b) {
			return b[dataIndex] - a[dataIndex];
		}

		const dataAr = this.state.data;
		if(order < 0 && isNaN(dataAr[0][dataIndex])) {
			dataAr.sort(sortAscending);
		}
		if(order > 0 && isNaN(dataAr[0][dataIndex]))  {
			dataAr.sort(sortDescending);
		}
		if (order < 0 && !isNaN(dataAr[0][dataIndex])) {
			dataAr.sort(sortNumericAscending);
		}
		if (order > 0 && !isNaN(dataAr[0][dataIndex])) {
			dataAr.sort(sortNumericDescending);
		}
		this.setState({
			data: dataAr
		})
	}

	createRows( ) {
		const { columns, cellStyle, rowStyle } = this.props;
		const allRows = [<Row key={0} sort={this.sort} column={columns} head={this.props.headStyle} cellStyle={cellStyle} rowStyle={rowStyle} fixed={this.props.fixedHeader}/>]
		
		this.rest = this.state.data.map((datum, index) => (
			<Row key={index + 1} column={columns} values={datum} head={false} cellStyle={cellStyle} rowStyle={rowStyle} />
		));

		return [...allRows, ...this.rest];
	}

	render() {
		const rows = this.createRows();
		return (
			<div className="table_ak" style={{width:this.props.width, height: this.props.height, overflow:'scroll', position:'relative'}}>{rows}</div>
		)
	}
}

Table.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object).isRequired, //define table fields
	data: PropTypes.arrayOf(PropTypes.object).isRequired,	//defines table data
	cellStyle: PropTypes.object,					//specify style for cells
	rowStyle: PropTypes.object,						//specify style for each row
	fixedHeader: PropTypes.bool,	//if true make top row fixed
	headStyle: PropTypes.object,	// if provided set custom style to top row
	width: PropTypes.number,		// set table dimension
	height: PropTypes.number		// set table dimension
}

export default Table;