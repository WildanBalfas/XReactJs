import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default ({ createNew,handleChangeCheckBox ,handleToggle, handleClose, handleChange, handleSubmit, user:{userName,first,mid,last,email,phone,active} }) => {
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
    &nbsp;
    <TextField label='First Name' value={first} onChange={handleChange('first')} margin='normal'/>
    <br/>
    <TextField label='Middle Name' value={mid} margin='normal' onChange={handleChange('mid')} />
    &nbsp;
    <TextField label='Last Name' value={last} margin='normal' onChange={handleChange('last')} />
    <br/>
    <TextField label='Email' value={email} margin='normal' onChange={handleChange('email')} />
    &nbsp;
    <TextField label='Phone' value={phone} margin='normal' onChange={handleChange('phone')} />
    <br/>
    <FormControlLabel
    control={
        <Switch
        checked={active}
        onChange={handleChangeCheckBox('active')}
        value="active"
        color="primary"
        />
    }
    label="Primary"
    />
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