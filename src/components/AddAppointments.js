import React, {Component} from 'react';
import { FaPlus } from 'react-icons/fa'

class AddAppointments extends Component {
	render() {
		const displayApt= this.props.formDisplay ? '' : 'add-appointment'
		return (
			<div>
				<div
					className={displayApt}
				>
					<div className="apt-addheading card-header bg-primary text-white">
						<FaPlus /> Add Appointment
					</div>

					<div className="card-body">
						<form id="aptForm" noValidate>
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
