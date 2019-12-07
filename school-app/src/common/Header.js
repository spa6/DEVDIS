import React, {Component} from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  grow1: {
    flexGrow: 0.1
  },
  search: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: '#c0c0c0',
    marginLeft: 0,
    width: '300px',
  },
  searchIcon: {
    width: theme.spacing(4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#000000'
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  avatar: {
    width: 40,
    height: 40,
  },
  appHeader:{
    backgroundColor:'#263238'
  },
  hr:{
    height:'1.5px',
    backgroundColor:'#f2f2f2',
    marginLeft:'5px',
    marginRight:'5px'
  }
})

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  render(){
    const {classes,screen} = this.props;
    return (<div>
        <AppBar className={classes.appHeader}>
          <Toolbar>
            {/* {(screen === "Login" || screen === "Home") && <span className="header-logo">Image Viewer</span>} */}
            {/* {(screen === "Profile" || screen === "Students" || screen === "Overview") && } */}
            <Link style={{ textDecoration: 'none', color: 'white', width:'25%' }} to="/home"><span className="header-logo">Image Viewer</span></Link>
            <div className={classes.grow1}></div>
            <div>
            <Link style={{ textDecoration: 'none', color: 'white', paddingRight:'10px', paddingLeft:'10px'}} to="/students"><span className="header-logo">Students</span></Link>
            <Link style={{ textDecoration: 'none', color: 'white' , paddingRight:'10px', paddingLeft:'10px'}} to="/students"><span className="header-logo">Attendence</span></Link>
            <Link style={{ textDecoration: 'none', color: 'white', paddingRight:'10px', paddingLeft:'10px'}} to="/messages"><span className="header-logo">Messages</span></Link>
              </div><div className={classes.grow}>
            
              </div>
              <div>

              
              </div>
            {/* {(screen === "Home") &&
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon /> }
                </div>
                <InputBase onChange={(e)=>{this.props.searchHandler(e.target.value)}} placeholder="Search…" classes={{
                    input: classes.inputInput
                  }}/>
              </div> */
            }
            {(screen === "Home" || screen === "Profile" || screen === "Students" || screen === "Overview"|| screen === "Messages")  &&
              <div>
                <IconButton onClick={this.handleClick}>
                  <Avatar alt="Profile Pic" src={this.props.userProfileUrl} className={classes.avatar} style={{border: "1px solid #fff"}}/>
                </IconButton>
                <Popover
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>
                    <div style={{padding:'5px'}}>
                      { (screen === "Home") &&
                        <div>
                          
                        </div>
                      }
                      <MenuItem onClick={this.handleAccount}>My Account</MenuItem>
                          <div className={classes.hr}/>
                      <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </div>
                </Popover>
              </div>
            }
          </Toolbar>
        </AppBar>
    </div>)
  }

  handleClick = (event) =>{
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleAccount = ()=>{
    this.props.history.push('/profile');
    this.handleClose();
  }

  handleStudents = ()=>{
    this.props.history.push('/students');
    this.handleClose();
  }

  handleOverview = ()=>{
    this.props.history.push('/overview');
    this.handleClose();
  }

  handleLogout = ()=>{
    sessionStorage.clear();
    this.props.history.replace('/');
    this.handleClose();
  }

  handleClose = () =>{
    this.setState({ anchorEl: null });
  }
}

export default withStyles(styles)(withRouter(Header))
