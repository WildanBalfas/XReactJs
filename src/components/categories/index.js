import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateCategory from './create';
import EditCategory from './edit';
import DeleteCategory from './delete';
import { config } from '../configs/config';
import EditIcon from '@material-ui/icons/Edit';
import DelIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

class Categories extends React.Component {
  
  CategoriesModel = {
    _id: '',
    initial: '',
    name: '',
    active: true
  }
  
  
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      createNew: false,
      editCategory: false,
      deleteCategory: false,
      loading: true,
      category: this.CategoriesModel
    }
  }
  
  //Reload
  reloadCategoryData = () => {
    axios.get(config.url + '/categories')
    .then(res =>{
      this.setState({
        categories: res.data,
        createNew:false,
        editCategory:false,
        deleteCategory:false,
        category: this.CategoriesModel,
        loading :false
      })
    })
    .catch((error) => {
      alert(error);
    })
  }
  
  //API connect ke cloud
  componentDidMount() {
    this.reloadCategoryData();
  }
  
  //toggle
  handleToggle = () => {
    this.setState({
      createNew: true,
      category: this.CategoriesModel
    })
  }
  
  //tutup
  handleClose = () => {
    this.setState({
      createNew: false,
      editCategory: false,
      deleteCategory: false,
      category: this.CategoriesModel
    })
  }
  //bisa diketik
  handleChange = name => ({ target: { value } }) => {
    this.setState({
      category: {
        ...this.state.category,
        [name]: value
      }
    })
  }
  //submit data
  
  handleSubmit = () => {
    const { category, categories, createNew } = this.state;
    let newCategory =
    {
      
      initial: category.initial,
      name: category.name,
      active: category.active
    }
    
    if (createNew) {
      axios.post(config.url + '/categories', newCategory)
      .then(res => {
        this.reloadCategoryData();
        alert('category has been saved. \n');
      })
      .catch((error) => {
        alert(error)
      })
      
      
    } else {
      axios.put(config.url + '/categories/' + category._id, newCategory)
      .then(res => {
        this.reloadCategoryData();
        alert('category has been edited. \n');
      })
      .catch((error) => {
        alert(error)
      })
    }
  }
  
  handleEdit = (_id) => {
    const { categories } = this.state;
    const category = categories.find(u => u._id === _id);
    // console.log(category);
    this.setState({
      editCategory: true,
      category: {
        _id: category._id,
        initial: category.initial,
        name: category.name,
        active: category.active
      }
    })
  }
  //hapus data
  handleDelete = (_id) => {
    const { categories } = this.state;
    const category = categories.find(u => u._id === _id);
    this.setState({
      deleteCategory: true,
      category: {
        _id: category._id,
        initial: category.initial,
        name: category.name,
        active: category.active
      }
    })
  }
  
  handleDeleteConfirm = () => {
    const { categories, category } = this.state;
    axios.delete(config.url + '/categories/' + category._id)
    .then(res => {
      this.reloadCategoryData();
      alert('category has been deleted. \n');
    })
    .catch((error) => {
      alert(error)
    })
    
  }
  
  handleChangeCheckBox = name => event => {
    this.setState({
      category: {
        ...this.state.category,
        [name]: event.target.checked
      }
    })
  }
  
  render() {
    const { categories, loading } = this.state;
    const { classes } = this.props;
    
    return (
      <div>
      <h3><center>List Of Categories</center></h3>
      
      <CreateCategory createNew={this.state.createNew} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit} category={this.state.category} handleChangeCheckBox={this.handleChangeCheckBox} />
      
      <EditCategory editCategory={this.state.editCategory} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit} category={this.state.category} handleChangeCheckBox={this.handleChangeCheckBox} />
      
      <DeleteCategory deleteCategory={this.state.deleteCategory} handleClose={this.handleClose} handleDelete={this.handleDeleteConfirm} category={this.state.category} />
      
      <CircularProgress className={classes.progress} style={{ visibility: (loading ? 'visible' : 'hidden') }} color="secondary" />
      
      <Table>
      <TableHead>
      <TableRow>
      <TableCell>Initial</TableCell>
      <TableCell >Name</TableCell>
      <TableCell >Active </TableCell>
      <TableCell >Action </TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
      {categories.map(n => {
        return (
          <TableRow key={n._id}>
          <TableCell component="th" scope="row">
          {n.initial}
          </TableCell>
          <TableCell>{n.name}</TableCell>
          <TableCell>
          <Checkbox checked={n.active} value="active" />
          </TableCell>
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

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);