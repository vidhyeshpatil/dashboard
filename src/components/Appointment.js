import React, { Component } from 'react';
import config from '../data/config.json';

export default class Appointment extends Component {
 
  render() {
	let headings = config.data.headings, slotData = config.data.slotData[this.props.currentSlot].info;
    
	return (
	  <table className = "table table-hover slotData table-responsive">
		<thead className = "thead-default">
			<tr>
				{headings.map((elem, index) => {
					return <th key = {index}>{elem}</th>
				})}
			</tr>
		</thead>
		<tbody>
			{slotData.map((elem, index) => {
				return <tr key = {index}>
						<th>{elem.time}</th>
						<td>{elem.patientName}</td>
						<td>{elem.species}</td>
						<td>{elem.breed}</td>
						<td>{elem.parentName}</td>
						<td>{elem.address}</td>
					   </tr>
			})}
		</tbody>
	  </table>
    );
  }
}