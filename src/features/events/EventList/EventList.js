import React, { Component } from "react";
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const {events, onEventOpen, deleteEvent} = this.props; //instead of this.props.events
    return (
        <div>
            <h1>EventList</h1>
            {events.map((event) => {
              return <EventListItem onEventOpen={onEventOpen} deleteEvent={deleteEvent} key={event.id} event={event}/>
            })}
        </div>
    );
  }
}

export default EventList;