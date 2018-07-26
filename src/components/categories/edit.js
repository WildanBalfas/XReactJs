import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField  from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default ({ editCategory, handleChangeCheckBox ,handleClose, handleSubmit, handleChange, category:{initial, name, active} }) => {
    return <Fragment>
    
    <Dialog
    open={editCategory}
    onClose={handleClose}
    >
    <DialogTitle id="alert-dialog-title">{"Update category"}</DialogTitle>
    <DialogContent>
    <DialogContentText id="alert-dialog-description">
    Update this category
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
    <Button onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button  onClick={handleSubmit} color="primary" autoFocus>
    Save
    </Button>
    </DialogActions>
    </Dialog>
    </Fragment>
}