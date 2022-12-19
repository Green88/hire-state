import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import './Header.scss'; 

const LoginModal = ({currentUser, onCurrentUserChange}) => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState(currentUser || '');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleLogin = () => {
        console.log(username);
        localStorage.setItem('user', username);
        onCurrentUserChange(username);
        setOpen(false);
    };
  
    return (
      <div>
        {currentUser ? (
            <Chip
                avatar={<Avatar>{currentUser[0]}</Avatar>}
                label={currentUser}
                onClick={handleClickOpen}
                sx={{backgroundColor: 'white'}}
            />
        ) : (
            <Button variant="outlined" onClick={handleClickOpen}>
                Login
            </Button>
        )}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Enter your user name</DialogTitle>
          <DialogContent>
            <TextField
                value={username}
                autoFocus
                margin="dense"
                id="user_name"
                label="User name"
                fullWidth
                variant="standard"
                onChange={(evt) => setUsername(evt.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleLogin}>Login</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default LoginModal;