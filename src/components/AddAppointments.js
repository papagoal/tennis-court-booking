import React, {Component} from 'react';
import {FaPlus} from 'react-icons/fa'

class AddAppointments extends Component {
	constructor() {
		super();
		this.state = {
			customerName: '',
			aptDate: '',
			aptTime: '',
			aptNotes: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const value = e.target.value
		const name = e.target.name
		this.setState({
			[name]: value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		let tempApt = {
			customerName: this.state.customerName,
			aptDate: this.state.aptDate,
			aptTime: this.state.aptTime,
			aptNotes: this.state.aptNotes
		}
		this.props.addAppointment(tempApt)
		this.setState({
			customerName: '',
			aptDate: '',
			aptTime: '',
			aptNotes: ''
		})
		this.props.toggleForm();
	}

	render() {
		const displayApt = this.props.formDisplay ? '' : 'add-appointment'
		return (
			<div>
				<div
					className={displayApt}
				>
					<div
						className="apt-addheading card-header bg-primary text-white"
						onClick={this.props.toggleForm}
					>
						<FaPlus/> Add Appointment
					</div>

					<div className="card-body">
						<form id="aptForm" noValidate onSubmit={this.handleSubmit}>
							<div className="form-group form-row">
								<label
									className="col-md-2 col-form-label text-md-right"
									htmlFor="customerName"
								>
									<p>Name</p>
								</label>
								<div className="col-md-10">
									<input
										type="text"
										className="form-control"
										name="customerName"
										placeholder="Customer's Name"
										value={this.state.customerName}
										onChange={this.handleChange}
									/>
								</div>
							</div>

							<div className="form-group form-row">
								<label
									className="col-md-2 col-form-label text-md-right"
									htmlFor="aptDate"
								>
									Date
								</label>
								<div className="col-md-4">
									<input
										type="date"
										className="form-control"
										name="aptDate"
										id="aptDate"
										value={this.state.aptDate}
										onChange={this.handleChange}
									/>
								</div>
								<label
									className="col-md-2 col-form-label text-md-right"
									htmlFor="aptTime"
								>
									Time
								</label>
								<div className="col-md-4">
									<input
										type="time"
										className="form-control"
										name="aptTime"
										id="aptTime"
										value={this.state.aptTime}
										onChange={this.handleChange}
									/>
								</div>
							</div>

							<div className="form-group form-row">
								<label className="col-md-2 text-md-right" htmlFor="aptNotes">
									Apt. Notes
								</label>
								<div className="col-md-10">
                  <textarea
					  className="form-control"
					  rows="4"
					  cols="50"
					  name="aptNotes"
					  id="aptNotes"
					  placeholder="Appointment Notes"
					  value={this.state.aptNotes}
					  onChange={this.handleChange}
				  />
								</div>
							</div>

							<div className="form-group form-row mb-0">
								<div className="offset-md-2 col-md-10">
									<button
										type="submit"
										className="btn btn-primary d-block ml-auto"
									>
										Add Appointment
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddAppointments;
