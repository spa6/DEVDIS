import React, { Fragment , Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Progress.css";

const useStyles = theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});
class ProgressBarExample extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      percentage: 0,
      percentage1: 80,
      percentage2: 60,
      percentage3: 45
    }
    
    this.nextStep = this.nextStep.bind(this)
  }
  
  nextStep() {
    if(this.state.percentage === 100) return 
    this.setState(prevState => ({ percentage: prevState.percentage + 20 }))
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        
        <h2> Subjects & Progress</h2>
        <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell >Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow key="row1">
          <TableCell >Subject1</TableCell>
                <TableCell ><ProgressBar percentage={this.state.percentage} /></TableCell>
            </TableRow>
            <TableRow key="row2">
          <TableCell >Subject2</TableCell>
                <TableCell ><ProgressBar percentage={this.state.percentage1} /></TableCell>
            </TableRow>
            <TableRow key="row3">
          <TableCell >Subject3</TableCell>
                <TableCell ><ProgressBar percentage={this.state.percentage2} /></TableCell>
            </TableRow>
            <TableRow key="row4">
          <TableCell >Subject4</TableCell>
    <TableCell ><ProgressBar percentage={this.state.percentage3}  /></TableCell>
            </TableRow>
          </TableBody>
          
          </Table>
      </Paper>
        {/* <table className={classes.table} >
          <tr>
            <th width = "5%"></th>
          <th width="30%">
            Subject
          </th>
          <th width ="30%">Progress</th>
          
          </tr>
          <tr>
            <td></td>
            <td>Subject1</td>
            <td><ProgressBar percentage={this.state.percentage} /></td>
            
          </tr>
          
        </table>
        
         */}
          
        
        
      </div>
    )
  }  
}

const ProgressBar = (props) => {
  return (
      <div className="progress-bar">
        <Filler percentage={props.percentage} /> 
      </div>
    )
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} >{props.percentage}%</div>
}

export default withStyles(useStyles)(ProgressBarExample);




