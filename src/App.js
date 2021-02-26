import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '이진우',
  'birthday' : '900202',
  'gender' : '남자',
  'jop' : '학생'
}

class App extends Component {
  render() {
    return(
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        jop={customer.jop}
      />
    );
  }
}

export default App;
