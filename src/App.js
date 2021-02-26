import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name' : '홍길동',
  'birthday' : '900202',
  'gender' : '남자',
  'jop' : '학생'
}

class App extends Component {
  render() {
    return(
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        jop={customer.jop}
      />
    );
  }
}

export default App;
