// import React, { Fragment } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import { Add } from '@material-ui/icons';

// export default ({ createNew, handleToggle, handleClose, handleChange, handleChangeCheckBox, handleSubmit, product: { initial, name, description, price, categoryId, activate }, categories }) => {
//     return <Fragment>
//         <Button variant='contained' color='primary' onClick={handleToggle} mini>
//             <Add />
//         </Button>
//         <Dialog
//             open={createNew}
//             onClose={this.handleClose}
//         >
//             <DialogTitle id="form-dialog-title">
//                 Create new User
//               </DialogTitle>
//             <DialogContent>
//                 <DialogContentText>
//                     Please fill out the form below!
//                 </DialogContentText>
//                 <form>
//                     <TextField label="Initial" value={initial} onChange={handleChange('initial')} margin="normal" />&nbsp;
//                     <TextField label="Name" value={name} onChange={handleChange('name')} margin="normal" />
//                     <br />
//                     <TextField label="Description" value={description} onChange={handleChange('description')} margin="normal" />&nbsp;
//                     <TextField label="Price" value={price} onChange={handleChange('price')} margin="normal" />
//                     <br />
//                     {/* <TextField label="Category" value={categoryId} onChange={handleChange('email')} margin="normal" />&nbsp; */}
//                     <FormControl>
//                         <InputLabel htmlFor="category-simple">Category</InputLabel>
//                         <Select
//                             value={categoryId}
//                             onChange={handleChange('categoryId')}
//                             inputProps={{
//                                 name: 'categoryId',
//                                 id: 'category-simple',
//                             }}
//                         >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>
//                             {categories.map(c => {
//                                 return(
//                                     <MenuItem value={c._id}>{c.name}</MenuItem>
//                                 )
//                             })}
//                         </Select>
//                     </FormControl>
//                     <br />
//                     <FormControlLabel
//                         label="Activate"
//                         control={
//                             <Switch
//                                 checked={activate}
//                                 onChange={handleChangeCheckBox('activate')}
//                                 value="activate"
//                                 color="primary"
//                             />
//                         }
//                     />
//                 </form>
//             </DialogContent>
//             <DialogActions>
//                 <Button
//                     onClick={handleClose}
//                     color="primary"
//                     variant='raised'>
//                     Cancel
//                     </Button>
//                 <Button
//                     onClick={handleSubmit}
//                     color="primary"
//                     variant='raised'>
//                     Create
//                     </Button>
//             </DialogActions>
//         </Dialog>
//     </Fragment>
// }