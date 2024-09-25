import React from 'react';
import { Button, TextField, Select, MenuItem } from '@mui/material';

const EventForm = ({ event, setEvent }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  return (
    <form>
      <TextField
        label="Event Name"
        name="name"
        value={event.name || ''}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={event.description || ''}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Select
        label="Status"
        name="status"
        value={event.status || ''}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={() => console.log('Save event')}>
        Save
      </Button>
    </form>
  );
};

export default EventForm;
