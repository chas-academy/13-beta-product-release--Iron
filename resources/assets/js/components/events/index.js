import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/styles.css';
import { debug } from 'util';

 class Events extends Component {
	 constructor(){
		 super();
		 this.state = {
			 test: [],
		 };
		}
		componentDidMount() {
			const now = this;
		 fetch('/api/event')
		 .then(function(response) {
			 return response.json();
		 })
		 .then(function(data) {
			 console.log(data);
			 now.setState({ test: data });
		 }).catch(function(error) {
			console.log(error);
	});

		}
		
    render() {
        return (
					<div className="events" id="events">
						
						
					 		<div className="bg-image"></div>
					 		<div className="backgroundOverlay"></div>

					 	<div className="megaTitle block">
					 		<h1 className="title is-1 events-title">Mega Events</h1>
					 		<h2 className="title is-3 events-subtitle">Upcoming</h2>
					 	</div>

							{this.state.test && this.state.test.length > 0 ? (
								this.state.test.map((keyName, keyIndex) => {
									return (
					 					<div className="container Block events-placeholder" key = {`${keyName.id}`}>
											<h4 className="title is-4 events-name">{keyName.date} / {keyName.eventName} / {keyName.city}</h4>
											<p className="events-p">{keyName.eventInfo}</p>
											<button className="button" id="events-button" href={keyName.facebookUrl}>Join the party!</button>
										</div>
									);
						})

						) : (
							""
						) }
					 	<div className="pastEvents">
					 		<h2 className="title is-3 past-events-title">Past events</h2>
					 	</div>

					 </div>
        );
    }
}

export default Events;