/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to='/dashboard'
          >
            <div className={classes.icon}><DashboardIcon /></div>
            Dashboard
          </Button>
       {pages.map(page => (
          
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{page.heder}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {page.tabs.map(page1 => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page1.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page1.href}
          >
            <div className={classes.icon}>{page1.icon}</div>
            {page1.title}
          </Button>
        </ListItem>
      ))}
    </List>
    </ExpansionPanelDetails>
      </ExpansionPanel>
       ))}
      </div>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
