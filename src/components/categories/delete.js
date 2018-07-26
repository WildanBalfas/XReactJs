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

export default ({ deleteCategory, handleClose, handleDelete, category:{initial,name,active} }) => {
    return <Fragment>
    <Dialog
    open={deleteCategory}
    onClose={handleClose}
    >
    <DialogTitle id="alert-dialog-title">{"Delete category"}</DialogTitle>
    <DialogContent>
    <DialogContentText id="alert-dialog-description">
    Are you sure to delete?
    </DialogContentText>
    <form>
    <TextField label='Initial' value={initial}  margin='normal' disabled={true}/>
    &nbsp;
    <TextField label='Name' value={name} margin='normal' disabled={true}/>
    <br/>
    <FormControlLabel
    control={
        <Switch
        checked={active}
        value="active"
        color="primary"
        />
    }
    label="Primary"
    disabled={true}
    />
    </form>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} variant='contained' color='primary'>
    Cancel
    </Button>
    <Button onClick={handleDelete} variant='contained' color='primary' autoFocus>
    Delete
    </Button>
    </DialogActions>
    </Dialog>
    </Fragment>
}