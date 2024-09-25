import React, { useState } from 'react';
import { Grid2, Paper } from '@mui/material';

const BoothSelection = () => {
  const [booths, setBooths] = useState([
    { id: 1, status: 'available' },
    { id: 2, status: 'occupied' },
    { id: 3, status: 'available' },
    { id: 4, status: 'occupied' },
    // Add more booths
  ]);

  return (
    <Grid2 container spacing={2}>
      {booths.map((booth) => (
        <Grid2 item xs={3} key={booth.id}>
          <Paper 
            style={{ 
              backgroundColor: booth.status === 'available' ? 'green' : 'red', 
              height: '100px', 
              textAlign: 'center', 
              lineHeight: '100px', 
              color: '#fff' 
            }}
          >
            Booth {booth.id}
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default BoothSelection;
