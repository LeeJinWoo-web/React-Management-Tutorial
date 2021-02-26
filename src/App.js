import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '이진우',
    'birthday' : '900202',
    'gender' : '남자',
    'jop' : '학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '박동희',
    'birthday' : '891222',
    'gender' : '남자',
    'jop' : '학생'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '박시영',
    'birthday' : '890713',
    'gender' : '남자',
    'jop' : '디자이너'
  }
]

class App extends Component {
  render() {
    return(
      customers.map((arr) => {
        console.log(arr)
        return(
          <Customer
            key={arr.id}
            id={arr.id}
            image={arr.image}
            name={arr.name}
            birthday={arr.birthday}
            gender={arr.gender}
            jop={arr.jop}
          />
        )
      })
    );
  }
}

export default App;
