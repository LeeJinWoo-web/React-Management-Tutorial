import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
           <Table>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
            {customers.map((arr) => {
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
              }
            </TableBody>
          </Table> 
    );
  }
}

export default App;
