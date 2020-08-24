import React, {Component} from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {
	render() {
		return (
			<div>
				<div className="appointment-list item-list mb-3">
					{this.props.appointments.map(item => (
						<div className="col media py-3" key={item.aptId}>
							<div className="mr-3">
								<button
									className="btn btn-sm btn-danger"
									onClick={()=>this.props.deleteAppointment(item)}
								>
									<FaTimes />
								</button>
							</div>
							<div className="media-body">
								<div className="d-flex">
									<span>{item.customerName}</span>
									<span className="ml-auto">
										<Moment
											date={item.aptDate}
											parse='YYYY-MM-dd hh:mm'
											format='MMM-D h:mma'
										/>
									</span>
								</div>
								<div className="d-flex">
									<span>Number of customers: {item.aptNotes}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default ListAppointments;
