import React, { Component } from "react";
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const {events, deleteEvent} = this.props; //instead of this.props.events
    return (
        <div>
            {events.map((event) => {
              return <EventListItem deleteEvent={deleteEvent} key={event.id} event={event}/>
            })}
        </div>
    );
  }
}

export default EventList;