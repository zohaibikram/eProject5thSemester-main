import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', height: '100vh', backgroundColor: '#282c34', color: '#fff', padding: '20px' }}>
      <List>
        <ListItem component={Link} to="/" button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/admin" button>
          <ListItemText primary="Admin Panel" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
