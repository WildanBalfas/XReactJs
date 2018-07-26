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

export default ({ createNew,handleChangeCheckBox ,handleToggle, handleClose, handleChange, handleSubmit, category:{initial,name,active} }) => {
    return <Fragment>
    <Button onClick={handleToggle} variant='contained' color='primary'>Create</Button>
    <Dialog
    open={createNew}
    onClose={handleClose}
    >
    <DialogTitle id="alert-dialog-title">{"Create new Categories"}</DialogTitle>
    <DialogContent>
    <DialogContentText id="alert-dialog-description">
    Please fill out the form below!
    </DialogContentText>
    <form>
    <TextField label='Initial' value={initial} onChange={handleChange('initial')} margin='normal'/>
    &nbsp;
    <TextField label='Name' value={name} onChange={handleChange('name')} margin='normal'/>
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