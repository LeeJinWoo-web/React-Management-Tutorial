import React, {Component} from 'react';
import Customer from './components/Customer'
import CustomerAdd from  './components/CustomerAdd'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: "",
      completed: 0,
      isLoad: false
    }
  }

stateRefresh = () => {
  this.setState({
    customers: "",
    completed: 0,
    isLoad: false
  });
  this.callApi()
  .then(res => this.setState({
    customers: res, 
    isLoad: true
  }))
  .catch(err => console.log(err))
}

componentDidMount() {
  this.timer = setInterval(this.progress, 80)
  this.callApi()
  .then(res => this.setState({
    customers: res, 
    isLoad: true
  }))
  .catch(err => console.log(err))
}

//setInterval clear
componentDidUpdate(){
  if(this.state.isLoad){
    clearInterval(this.timer)
  }
}

callApi = async () => {
  const response = await fetch('/api/customers');
  const body = await response.json();
  return body;
}

progress = () => {
  const { completed } = this.state;
  this.setState({ completed: completed >= 100 ? 0 : completed + 5});
  console.log(this.state.completed)
}

  render() {
    const { classes } = this.props;
    return(
      <div>
      <Paper className={classes.root}>
           <Table className={classes.table}> 
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                  <TableCell>설정</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
            {this.state.customers ? this.state.customers.map((arr) => {
                return(
                  <Customer
                    key={arr.id}
                    id={arr.id}
                    image={arr.image}
                    name={arr.name}
                    birthday={arr.birthday}
                    gender={arr.gender}
                    job={arr.job}
                    stateRefresh = {this.stateRefresh}
                  />
                )
              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
            </TableBody>
          </Table> 
    </Paper>
    <CustomerAdd stateRefresh={this.stateRefresh}/>
    </div>
    );
  }
}

export default withStyles(styles)(App);
