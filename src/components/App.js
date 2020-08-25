import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListAppointments from "./ListAppointments";
import AddAppointments from "./AddAppointments";
import SearchAppointment from './SearchAppointment';

import { without } from 'lodash'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			myAppointments: [],
			formDisplay: false,
			lastIndex: 0,
			orderBy: 'customerName',
			orderDir: 'asc',
			queryText: ''
		}
		this.deleteAppointment = this.deleteAppointment.bind(this)
		this.toggleForm = this.toggleForm.bind(this)
		this.addAppointment = this.addAppointment.bind(this)
		this.changeOrder = this.changeOrder.bind(this)
		this.searchApts = this.searchApts.bind(this)
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

	changeOrder(order, dir) {
		this.setState({
			orderBy: order,
			orderDir: dir
		})
	}

	searchApts(query) {
		this.setState({queryText: query})
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
		let order;
		let filteredApts = this.state.myAppointments;
		if(this.state.orderDir === 'asc') {
			order = 1;
		} else {
			order = -1;
		}
		filteredApts = filteredApts.sort((a, b) => {
			if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
				return -1 * order;
			} else {
				return 1 * order;
			}
		}).filter(eachItem => {
			return(
				eachItem['customerName']
					.toLowerCase()
					.includes(this.state.queryText.toLowerCase()) ||
				eachItem['aptNotes']
					.toLowerCase()
					.includes(this.state.queryText.toLowerCase())
			)
		})

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
								<div>
									<SearchAppointment
										orderBy={this.state.orderBy}
										orderBy={this.state.orderDir}
										changeOrder={this.changeOrder}
										searchApts={this.searchApts}
									/>
								</div>
								<div>
									<ListAppointments
										appointments={filteredApts}
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
