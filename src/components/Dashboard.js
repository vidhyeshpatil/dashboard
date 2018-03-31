import React, { Component } from 'react';
import Appointment from './Appointment';
import PendingPayments from './PendingPayments';
import OpenCases from './OpenCases';

export default class Dashboard extends Component {
  constructor() {
	super();
	//
	this.state = {
		noOfSlots: ["Slot 1", "Slot 2", "Slot 3"],
		currentSlot: 0
	}
  }	
  
  slotBtnClick = (index) => {
	this.setState({
		currentSlot: index
	});
  }
  
  render() {
    return (<div>
		  <div className = "row">
			<div className = "col-sm-12">
				<div className = "card-box">
					<h4> Today's Appoinment </h4>
					<div className = "row">
						<div className = "col-sm-6"></div>
						<div className = "col-sm-6">
							<ul className = "nav nav-pills navtab-bg nav-justified slotBtn">
								{this.state.noOfSlots.map((elem, i) => {
									let currActiveClass = (this.state.currentSlot === i) ? "active" : "";
									
									return <li key = {i} className ="nav-item" onClick = {() => this.slotBtnClick(i)}>
												<span className = {"nav-link "+currActiveClass+""}>{elem}</span>
										   </li>
								})}
							</ul>
						</div>
					</div>
					<div className = "tab-content">
						<Appointment currentSlot = {this.state.currentSlot} />
					</div>
				</div>
				<button type="button" className="btn btn-outline-info AddPatientBtn" style = {{marginBottom: "4%"}}>Add New Patient</button>
			</div>
		  </div>
		  <div className = "row">
			<OpenCases />
			<PendingPayments />
		  </div>
	  </div>
    );
  }
}