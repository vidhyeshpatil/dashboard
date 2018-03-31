import React, { Component } from 'react';
import config from '../data/config.json';

export default class OpenCases extends Component {
 
  render() {
	let openCases = config.data.openCases;
	
	return (
		<div className = "col-sm-6">
			<div className = "card-box">
				<h4>OpenCases</h4>
				<div className = "row">
					{openCases.map((elem, index) => {
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