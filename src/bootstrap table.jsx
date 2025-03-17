import React from 'react';
import "./App.css";
import Table from 'react-bootstrap/Table';



export default function App() {
  const tableDate = [
{id:1, name:"samn",age:25, location:"new road"},
{id:2, name:"sa",age:23, location:"lalitp"},
{id:3, name:"sar",age:65, location:"ktm"},
{id:4, name:"satt",age:85, location:"bkhat"},

  ];
  return (
<>
<div className="App">
  <h1>Bootstrap table</h1>
  <div>
    <Table striped="columns">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>location</th>
        </tr>
      </thead>
      <tbody>
        {tableDate.map((data)=>(
          data.age == 25 ?
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.location}</td>
          </tr> : null
        ))}
      </tbody>
    </Table>
  </div>
</div>
</>
  )
}
