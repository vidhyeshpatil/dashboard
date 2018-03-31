import React, { Component } from 'react';
import config from '../data/config.json';

export default class PendingPayments extends Component {
 
  render() {
	let pendingPayments = config.data.pendingPayments;
	
	return (
		<div className = "col-sm-6">
			<div className = "card-box">
				<h4>Pending Payments</h4>
				<div className = "row">
					{pendingPayments.map((elem, index) => {
						return <div key = {index} className = "col-sm-12 card-box widget-user">
								 <div>
									<img src={elem.imagePic} className="img-responsive rounded-circle" alt = "pets"/>
									<div className = "wid-u-info">
										<h5 className = "mt-0 m-b-5 font-16">{elem.name}</h5>
									</div>
								 </div>
							   </div>
					})}
				</div>
			</div>			
		</div>
    );
  }
}