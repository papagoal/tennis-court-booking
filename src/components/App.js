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
		this.toggleForm = this.toggleForm.bind(this)
		this.addAppointment = this.addAppointment.bind(this)
	}

	toggleForm() {
		this.setState({
			formDisplay: !this.state.formDisplay
		})
	}

	addAppointment(apt) {
		let tempApts = this.state.myAppointments;
		apt.aptId = this.state.lastIndex;
		tempApts.unshift(apt)
		this.setState({
			myAppointment: tempApts,
			lastIndex: this.state.lastIndex + 1
		})
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
										toggleForm={this.toggleForm}
										addAppointment={this.addAppointment}
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
