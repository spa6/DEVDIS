import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = 
    [
      {
        heder:"Registration",
        expand:"true",
        tabs:[
          {
            title: 'Students',
            href: '/users',
            icon: <PeopleIcon />
          },
          {
            title: 'Teachers',
            href: '/users',
            icon: <PeopleIcon />
          },
          {
            title: 'Staff',
            href: '/products',
            icon: <ShoppingBasketIcon />
          }
        ]
         
      },
      {
        heder:"Payroll Management",
        expand:"false",
        tabs:[ 
          {
            title: 'Fee-Configurations',
            href: '/sign-in',
            icon: <LockOpenIcon />
          },
          {
            title: 'Fee Entry',
            href: '/typography',
            icon: <TextFieldsIcon />
          },
          {
            title: 'Payments',
            href: '/icons',
            icon: <ImageIcon />
          },
          {
            title: 'Fee Update',
            href: '/account',
            icon: <AccountBoxIcon />
          }
        ]
      },
      {
        heder:"Attendence Management",
        expand:"false",
        tabs:[ 
          {
            title: 'Holidays',
            href: '/typography',
            icon: <TextFieldsIcon />
          },
          {
            title: 'Attendence',
            href: '/icons',
            icon: <ImageIcon />
          },
          {
            title: 'Leave Management',
            href: '/account',
            icon: <AccountBoxIcon />
          }
        ]
      },
      {
        heder:"Examinations",
        expand:"false",
        tabs:[ 
          {
            title: 'Schudeles',
            href: '/typography',
            icon: <TextFieldsIcon />
          },
          {
            title: 'Results',
            href: '/icons',
            icon: <ImageIcon />
          }
        ]
      },
      {
        heder:"PTM",
        expand:"false",
        tabs:[ 
          {
            title: 'Config',
            href: '/account',
            icon: <AccountBoxIcon />
          },
          {
            title: 'Review Comments',
            href: '/settings',
            icon: <SettingsIcon />
          }
        ]
      },
      {
        heder:"Profile",
        expand:"false",
        tabs:[ 
          {
            title: 'Account',
            href: '/account',
            icon: <AccountBoxIcon />
          },
          {
            title: 'Settings',
            href: '/settings',
            icon: <SettingsIcon />
          }
        ]
      },
      {
        heder:"Configurations",
        expand:"false",
        tabs:[ 
          {
            title: 'Classes',
            href: '/account',
            icon: <AccountBoxIcon />
          },
          {
            title: 'Sections',
            href: '/settings',
            icon: <SettingsIcon />
          },
          {
            title: 'Groups',
            href: '/settings',
            icon: <SettingsIcon />
          },
          {
            title: 'Subjects',
            href: '/settings',
            icon: <SettingsIcon />
          },
          {
            title: 'Years',
            href: '/settings',
            icon: <SettingsIcon />
          }
        ]
      }      
        
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
