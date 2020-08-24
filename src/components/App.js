import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListAppointments from "./ListAppointments";
import AddAppointments from "./AddAppointments";

import { without } from 'lodash'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			myAppointments: [],
			formDisplay: false,
			lastIndex: 0,
		}
		this.deleteAppointment = this.deleteAppointment.bind(this)
	}

	deleteAppointment(apt) {
		let tempApts = this.state.myAppointments;
		tempApts = without(tempApts, apt);
		this.setState({
			myAppointments: tempApts
		})
	}

	componentDidMount() {
		fetch('./data.json')
			.then(response => response.json())
			.then(result => {
				const apts = result.map(item => {
					item.aptId = this.state.lastIndex;
					this.setState({ lastIndex: this.state.lastIndex + 1 })
					return item;
				})
				this.setState({
					myAppointments: apts
				})
			})
	}



	render() {
		return (
			<div className='App'>
				<div className='container mt-4'>
					<div className='row'>
						<div className='col-md-12 bg-white'>
							<div contaienr>
								<div>
									<AddAppointments
										formDisplay={this.state.formDisplay}
									/>
								</div>
								<div><h1>Search Appointments</h1></div>
								<div>
									<ListAppointments
										appointments={this.state.myAppointments}
										deleteAppointment={this.deleteAppointment}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
