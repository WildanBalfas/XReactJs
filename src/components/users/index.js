// import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import EditIcon from '@material-ui/icons/Edit';
// import DelIcon from '@material-ui/icons/Delete';
// import CreateUser from './create';
// import EditUser from './edit';
// import DeleteUser from './delete';
// import IconButton from '@material-ui/core/IconButton';
// import { config } from '../configs/config';
// import axios from 'axios'

// export default class extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: [
//                 {
//                     "_id": "1",
//                     "userName": "wildan",
//                     "password": "wildan123",
//                     "email": "wildan@gmail.commm",
//                     "name": {
//                         "first": "M",
//                         "mid": "Wildan",
//                         "last": "Balfas"
//                     },
//                     "phone": "08123123123",
//                     "active": "1"

//                 },

//                 {
//                     "_id": "2",
//                     "userName": "Mbappe",
//                     "password": "MbappeAja",
//                     "email": "mbappeaja@yahoo.com",
//                     "name": {
//                         "first": "Kylian",
//                         "mid": "M",
//                         "last": "Mbappe"
//                     },
//                     "phone": "0812381283",
//                     "active": "1"
//                 },

//                 {
//                     "_id": "3",
//                     "userName": "iningasal",
//                     "password": "asalaja",
//                     "email": "asalaja.com",
//                     "name": {
//                         "first": "Ngasal",
//                         "mid": "M",
//                         "last": "Com"
//                     },
//                     "phone": "53512421312",
//                     "active": "1"
//                 },

//             ],
//             createNew: false,
//             editUser: false,
//             deletUser: false,
//             user: { _id: 0, userName: '', first: '', mid: '', last: '', email: '', phone: '', active: '' }
//         }

//     }
//     //toggle
//     handleToggle = () => {
//         this.setState({
//             createNew: true
//         })
//     }
//     //hapus data

//     //tutup
//     handleClose = () => {
//         this.setState({
//             createNew: false,
//             editUser: false,
//             deleteUser: false,
//             user: { _id: 0, userName: '', first: '', mid: '', last: '', email: '', phone: '', active: '' }
//         })
//     }
//     //bisa diketik
//     handleChange = name => ({ target: { value } }) => {
//         this.setState({
//             user: {
//                 ...this.state.user,
//                 [name]: value
//             }
//         })
//     }
//     //submit data

//     handleSubmit = () => {
//         const { user, users, createNew } = this.state;
//         const newId = parseInt(users[users.length - 1]._id) + 1;

//         let newUser =
//         {
//             _id: createNew ? newId : user._id,
//             userName: user.userName,
//             name: {
//                 first: user.first,
//                 mid: user.mid,
//                 last: user.last
//             },
//             email: user.email,
//             phone: user.phone,
//             active: user.active
//         }

//         if (createNew) {
//             users.push(newUser)
//         } else {
//             let idx = users.findIndex(u => u._id === newUser._id);
//             users[idx] = newUser;
//         }

//         this.setState({
//             createNew: false,
//             editUser: false,
//             user: { _id: 0, userName: '', first: '', mid: '', last: '', email: '', phone: '', active: '' },
//             users: users
//         })


//     }

//     handleEdit = (_id) => {
//         const { users } = this.state;
//         const user = users.find(u => u._id === _id);
//         // console.log(user);
//         this.setState({
//             editUser: true,
//             user: {
//                 _id: user._id,
//                 userName: user.userName,
//                 first: user.name.first,
//                 mid: user.name.mid,
//                 last: user.name.last,
//                 email: user.email,
//                 phone: user.phone,
//                 active: user.active
//             }
//         })
//     }

//     handleDelete = (_id) => {
//         const { users } = this.state;
//         const user = users.find(u => u._id === _id);
//         this.setState({
//             deleteUser: true,
//             user: {
//                 _id: user._id,
//                 userName: user.userName,
//                 first: user.name.first,
//                 mid: user.name.mid,
//                 last: user.name.last,
//                 email: user.email,
//                 phone: user.phone,
//                 active: user.active
//             }
//         })
//     }

//     handleDeleteConfirm = () => {
//         const { users, user } = this.state;
//         let idx = users.findIndex(u => u._id === user._id)
//         users.splice(idx, 1);
//         this.setState({
//             deleteUser: false,
//             user: { _id: 0, userName: '', first: '', mid: '', last: '', email: '', phone: '', active: '' }
//         })

//     }

//     render() {
//         const users = this.state.users;
//         return (
//             <div>
//                 <h3><center>List Of Users</center></h3>

//                 <CreateUser createNew={this.state.createNew} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} />

//                 <EditUser editUser={this.state.editUser} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} />

//                 <DeleteUser deleteUser={this.state.deleteUser} handleClose={this.handleClose} handleDelete={this.handleDeleteConfirm} user={this.state.user} />

//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Username</TableCell>
//                             <TableCell >Name</TableCell>
//                             <TableCell >Email </TableCell>
//                             <TableCell >Phones </TableCell>
//                             <TableCell >Active </TableCell>
//                             <TableCell >Action </TableCell>

//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {users.map(n => {
//                             return (
//                                 <TableRow key={n._id}>
//                                     <TableCell component="th" scope="row">
//                                         {n.userName}
//                                     </TableCell>
//                                     <TableCell>{(n.name.first ? n.name.first + " " : "") +
//                                         (n.name.mid ? n.name.mid + " " : "") +
//                                         (n.name.last ? n.name.last + " " : "")}</TableCell>
//                                     <TableCell>{n.email}</TableCell>
//                                     <TableCell>{n.phone}</TableCell>
//                                     <TableCell>{n.active}</TableCell>
//                                     <TableCell>
//                                         <IconButton><EditIcon color="primary" onClick={() => this.handleEdit(n._id)} /></IconButton>
//                                         <IconButton><DelIcon color="secondary" onClick={() => this.handleDelete(n._id)} /></IconButton>
//                                     </TableCell>
//                                 </TableRow>
//                             );
//                         })}
//                     </TableBody>
//                 </Table>
//             </div>
//         )
//     }
// }

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateUser from './create';
import Edit from './edit';
import DeleteUser from './delete';
import { Button } from '../../../node_modules/@material-ui/core';
import { config } from '../configurations/config';

import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';



class Users extends React.Component {
    
    userModel = {
        _id: '',
        userName: '',
        first: '', mid: '',
        last: '',
        email: '',
        phone: '',
        active: 0
    }
    
    
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            createNew: false,
            editUser: false,
            deletUser: false,
            loading: true,
            user: this.userModel
        }
    }
    
    
    
    //API connect ke cloud
    componentDidMount() {
        axios.get(config.url + '/users')
        .then(res => {
            this.setState({
                users: res.data,
                loading: false
            })
        })
        
        .catch((error) => {
            alert(error)
        })
    }
    
    //toggle
    handleToggle = () => {
        this.setState({
            createNew: true
        })
    }
    
    
    //tutup
    handleClose = () => {
        this.setState({
            createNew: false,
            editUser: false,
            deleteUser: false,
            user: this.userModel
        })
    }
    //bisa diketik
    handleChange = name => ({ target: { value } }) => {
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }
    //submit data
    
    handleSubmit = () => {
        const { user, users, createNew } = this.state;
        let newUser =
        {
            
            userName: user.userName,
            name: {
                first: user.first,
                mid: user.mid,
                last: user.last
            },
            email: user.email,
            phone: user.phone,
            active: user.active
        }
        
        if (createNew) {
            console.log(newUser);
            axios.post(config.url + '/users', newUser)
            .then(res => {
                axios.get(config.url + '/users')
                .then(res => {
                    this.setState({
                        users: res.data,
                        createNew: false,
                        user: this.userModel,
                        loading: false
                    })
                    alert('New user has been saved. \n');
                })
                .catch((error) => {
                    alert(error)
                })
            })
            .catch((error) => {
                alert(error)
            })
            
            
        } else {
            let idx = users.findIndex(u => u._id === newUser._id);
            users[idx] = newUser;
        }
    }
    
    handleEdit = (_id) => {
        const { users } = this.state;
        const user = users.find(u => u._id === _id);
        // console.log(user);
        this.setState({
            editUser: true,
            user: {
                _id: user._id,
                userName: user.userName,
                first: user.name.first,
                mid: user.name.mid,
                last: user.name.last,
                email: user.email,
                phone: user.phone,
                active: user.active
            }
        })
    }
    //hapus data
    handleDelete = (_id) => {
        const { users } = this.state;
        const user = users.find(u => u._id === _id);
        this.setState({
            deleteUser: true,
            user: {
                _id: user._id,
                userName: user.userName,
                first: user.name.first,
                mid: user.name.mid,
                last: user.name.last,
                email: user.email,
                phone: user.phone,
                active: user.active
            }
        })
    }
    
    handleDeleteConfirm = () => {
        const { users, user } = this.state;
        let idx = users.findIndex(u => u._id === user._id)
        users.splice(idx, 1);
        this.setState({
            deleteUser: false,
            user: this.userModel
        })
        
    }
    
    render() {
        const { users, loading } = this.state;
        const { classes } = this.props;
        
        return (
            <div>
            <h3><center>List Of Users</center></h3>
            
            <CreateUser createNew={this.state.createNew} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} />
            
            <Edit editUser={this.state.editUser} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} />
            
            <DeleteUser deleteUser={this.state.deleteUser} handleClose={this.handleClose} handleDelete={this.handleDeleteConfirm} user={this.state.user} />
            
            <CircularProgress className={classes.progress} style={{ visibility: (loading ? 'visible' : 'hidden') }} color="secondary" />
            
            <Table>
            <TableHead>
            <TableRow>
            <TableCell>Username</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Email </TableCell>
            <TableCell >Phones </TableCell>
            <TableCell >Active </TableCell>
            <TableCell >Action </TableCell>
            
            </TableRow>
            </TableHead>
            <TableBody>
            {users.map(n => {
                return (
                    <TableRow key={n._id}>
                    <TableCell component="th" scope="row">
                    {n.userName}
                    </TableCell>
                    <TableCell>{(n.name.first ? n.name.first + " " : "") +
                    (n.name.mid ? n.name.mid + " " : "") +
                    (n.name.last ? n.name.last + " " : "")}</TableCell>
                    <TableCell>{n.email}</TableCell>
                    <TableCell>{n.phone}</TableCell>
                    <TableCell>{n.active}</TableCell>
                    <TableCell>
                    <IconButton><EditIcon color="primary" onClick={() => this.handleEdit(n._id)} /></IconButton>
                    <IconButton><DelIcon color="secondary" onClick={() => this.handleDelete(n._id)} /></IconButton>
                    </TableCell>
                    </TableRow>
                );
            })}
            </TableBody>
            </Table>
            </div>
        )
    }
}

const styles = theme => ({
    progress: {
        position: 'absolute',
        alignSelf: 'center',
        top: '50%',
        left: '50%',
    },
});

Users.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);