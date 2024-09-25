import React from 'react'
import BoothSelection from "../Admin/BoothSelection"
import EventForm from './EventForm'
import ExhibitorManagement from './ExhibitorManagement';

const Admin = () => {
    const [event, setEvent] = React.useState({});
  return (
    
    <>
    <div>
        {/* <h1>Admin Panel</h1> */}
        <h2>Create/Update Event</h2>
        <EventForm event={event} setEvent={setEvent}/>
        <h2>Exhibitor Management</h2>
        <ExhibitorManagement/>
    </div>
    </>
  )
}

export default Admin