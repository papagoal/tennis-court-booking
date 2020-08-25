import React, {Component} from 'react';

class SearchAppointment extends Component {
	render() {
		return (
			<div className="search-appointments row justify-content-center my-4">
				<div className="col-md-6">
					<div className="input-group">
						<input
							id="SearchApts"
							type="text"
							className="form-control"
							aria-label="Search Appointments"
							onChange={e=> this.props.searchApts(e.target.value)}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="input-group-append">
						<button
							className="sort-by dropdown-item"
							href="#"
							onClick={ e => this.props.changeOrder('customerName', this.props.orderDir)}
						>
							Customer Name
						</button>
						<button
							className="sort-by dropdown-item"
							href="#"
							onClick={ e => this.props.changeOrder('aptDate', this.props.orderDir)}
						>
							Date
						</button>
						{/*<button*/}
						{/*	className="sort-by dropdown-item"*/}
						{/*	href="#"*/}
						{/*	onClick={ e => this.props.changeOrder(this.props.orderBy, 'asc')}*/}
						{/*>*/}
						{/*	Asc*/}
						{/*</button>*/}
						{/*<button*/}
						{/*	className="sort-by dropdown-item"*/}
						{/*	href="#"*/}
						{/*	onClick={ e => this.props.changeOrder(this.props.orderBy, 'desc')}*/}
						{/*>*/}
						{/*	Desc*/}
						{/*</button>*/}
					</div>
				</div>
			</div>
		);
	}
}

export default SearchAppointment;
