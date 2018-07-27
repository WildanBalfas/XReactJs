// import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import CreateProduct from './create';
// import EditProduct from './edit';
// import DeleteProduct from './delete';
// import { config } from '../configs/config';
// import EditIcon from '@material-ui/icons/Edit';
// import DelIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton'
// import CircularProgress from '@material-ui/core/CircularProgress';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Checkbox from '@material-ui/core/Checkbox';
// import axios from 'axios';

// class Products extends React.Component {
    
//     productModel = {
//         _id: '',
//         code:'',
//         initial: '',
//         name: '', 
//         description: '',
//         price:'',
//         categoryId:'',
//         active: true
//     }
    
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [],
//             categories: [],
//             createNew: false,
//             editProduct: false,
//             deleteProduct: false,
//             loading: true,
//             product: this.productModel
//         }
//     }
    
//     //Reload
//     reloadProductData = () => {
//         axios.get(config.url + '/products')
//         .then(res =>{
//             this.setState({
//                 product: res.data,
//                 createNew:false,
//                 editProduct:false,
//                 deleteProduct:false,
//                 product: this.productModel,
//                 loading :false
//             })
//         })
//         .catch((error) => {
//             alert(error);
//         })
//     }
    
//     //API connect ke cloud
//     componentDidMount() {
//         this.reloadProductData();
//     }
    
//     //toggle
//     handleToggle = () => {
//         this.setState({
//             createNew: true,
//             product: this.productModel
//         })
//     }
    
//     //tutup
//     handleClose = () => {
//         this.setState({
//             createNew: false,
//             editProduct: false,
//             deleteProduct: false,
//             product: this.productModel
//         })
//     }
//     //bisa diketik
//     handleChange = name => ({ target: { value } }) => {
//         this.setState({
//             product: {
//                 ...this.state.product,
//                 [name]: value
//             }
//         })
//     }
//     //submit data
    
//     handleSubmit = () => {
//         const { product, products, createNew } = this.state;
//         let newProduct =
//         {
//           code: product.code,
//           initial: product.initial,
//           name: product.name, 
//           description: product.description,
//           price:product.price,
//           categoryId:product.categoryId,
//           active: true
//         }
        
//         if (createNew) {
//             axios.post(config.url + '/products', newProduct)
//             .then(res => {
//                 this.reloadProductData();
//                 alert('User has been saved. \n');
//             })
//             .catch((error) => {
//                 alert(error)
//             })
            
            
//         } else {
//             axios.put(config.url + '/products/' + user._id, newProduct)
//             .then(res => {
//                 this.reloadProductData();
//                 alert('product has been edited. \n');
//             })
//             .catch((error) => {
//                 alert(error)
//             })
//         }
//     }
    
//     handleEdit = (_id) => {
//         const { products } = this.state;
//         const product = products.find(u => u._id === _id);
//         // console.log(product);
//         this.setState({
//             editProduct: true,
//             product: {
//                 _id: product._id,
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
//     //hapus data
//     handleDelete = (_id) => {
//         const { products } = this.state;
//         const user = products.find(u => u._id === _id);
//         this.setState({
//             deleteProduct: true,
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
//         const { products, user } = this.state;
//         // let idx = products.findIndex(u => u._id === user._id)
//         // products.splice(idx, 1);
//         axios.delete(config.url + '/products/' + user._id)
//         .then(res => {
//             this.reloadProductData();
//             alert('User has been deleted. \n');
//         })
//         .catch((error) => {
//             alert(error)
//         })
        
//     }
    
//     handleChangeCheckBox = name => event => {
//         this.setState({
//             user: {
//                 ...this.state.user,
//                 [name]: event.target.checked
//             }
//         })
//     }
    
//     render() {
//         const { products, loading } = this.state;
//         const { classes } = this.props;
        
//         return (
//             <div>
//             <h3><center>List Of products</center></h3>
            
//             <CreateProduct createNew={this.state.createNew} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} handleChangeCheckBox={this.handleChangeCheckBox} />
            
//             <EditProduct editProduct={this.state.editProduct} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} handleChangeCheckBox={this.handleChangeCheckBox} />
            
//             <DeleteProduct deleteProduct={this.state.deleteProduct} handleClose={this.handleClose} handleDelete={this.handleDeleteConfirm} user={this.state.user} />
            
//             <CircularProgress className={classes.progress} style={{ visibility: (loading ? 'visible' : 'hidden') }} color="secondary" />
            
//             <Table>
//             <TableHead>
//             <TableRow>
//             <TableCell>Username</TableCell>
//             <TableCell >Name</TableCell>
//             <TableCell >Email </TableCell>
//             <TableCell >Phones </TableCell>
//             <TableCell >Active </TableCell>
//             <TableCell >Action </TableCell>
//             </TableRow>
//             </TableHead>
//             <TableBody>
//             {products.map(n => {
//                 return (
//                     <TableRow key={n._id}>
//                     <TableCell component="th" scope="row">
//                     {n.userName}
//                     </TableCell>
//                     <TableCell>{(n.name.first ? n.name.first + " " : "") +
//                     (n.name.mid ? n.name.mid + " " : "") +
//                     (n.name.last ? n.name.last + " " : "")}</TableCell>
//                     <TableCell>{n.email}</TableCell>
//                     <TableCell>{n.phone}</TableCell>
//                     <TableCell>
//                       <Checkbox checked={n.active} value="active" />
//                     </TableCell>
//                     <TableCell>
//                     <IconButton><EditIcon color="primary" onClick={() => this.handleEdit(n._id)} /></IconButton>
//                     <IconButton><DelIcon color="secondary" onClick={() => this.handleDelete(n._id)} /></IconButton>
//                     </TableCell>
//                     </TableRow>
//                 );
//             })}
//             </TableBody>
//             </Table>
//             </div>
//         )
//     }
// }

// const styles = theme => ({
//     progress: {
//         position: 'absolute',
//         alignSelf: 'center',
//         top: '50%',
//         left: '50%',
//     },
// });

// Products.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Products);