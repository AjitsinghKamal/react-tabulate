import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './lib/table';

// follow this structure to set table data
const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
},
  {
    key: '3',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    key: '4',
    name: 'Kiya',
    age: 24,
    address: 'Albert Street'
  },
  {
    key: '5',
    name: 'Grace',
    age: 32,
    address: 'Metting Street'
  },
  {
    key: '6',
    name: 'Elaine',
    age: 28,
    address: 'Owning Street'
  }];


// follow this structure for defining column fields
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>react-tabulate playground</h1>
        </header>
        <div className="App-intro">
          <Table data={dataSource} columns={columns} rowStyle={{ background: '#fff', borderBottom: '1px solid #e2e2e2' }} fixedHeader={true} headStyle={{ background: '#f1eeee', fontWeight: 700, boxShadow: '0 1px 2px 0px #e4e1e1'}} width={600} height={200}/>
        </div>
        <footer className="App-footer">
          <p>react-tabulate is a react component developed by <a href="mailTo:ajitskamal@gmail.com">Ajit Singh Kamal</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
