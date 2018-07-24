import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


export default ({ createNew, handleToggle, handleClose, handleChange, handleSubmit, user:{userName,first,mid,last,email,phone,active} }) => {
    return <Fragment>
        <Button onClick={handleToggle} variant='contained' color='primary'>Create</Button>
        <Dialog
            open={createNew}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"Create new user"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   Please fill out the form below!
            </DialogContentText>
            <form>
                <TextField label='User Name' value={userName} onChange={handleChange('userName')} margin='normal'/>
                <br/>
                <TextField label='First Name' value={first} onChange={handleChange('first')} margin='normal'/>
                <br/>
                <TextField label='Middle Name' value={mid} margin='normal' onChange={handleChange('mid')} />
                <br/>
                <TextField label='Last Name' value={last} margin='normal' onChange={handleChange('last')} />
                <br/>
                <TextField label='Email' value={email} margin='normal' onChange={handleChange('email')} />
                <br/>
                <TextField label='Phone' value={phone} margin='normal' onChange={handleChange('phone')} />
                <br/>
                <TextField label='Active' value={active} margin='normal' onChange={handleChange('active')} />
                <br/>
            </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='contained' color='primary'>
                    Cancel
            </Button>
                <Button onClick={handleSubmit} variant='contained' color='primary' autoFocus>
                    Save
            </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}