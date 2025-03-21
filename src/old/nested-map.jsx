import React from 'react';
import "./App.css";
import { Table,Container,Row,Col } from 'react-bootstrap';

export default function App() {
const countriesWithCities = [
  {"country":"adas", "cities":["s","d","gfg"]},
  {"country":"aaa", "cities":["e","ggd","gddfg"]},
  {"country":"aaaaa", "cities":["e5","ggghd","gg"]
  },
];
const nestedData = [
  {"Category":"adas", "items":["s","d","gfg"]},
  {"Category":"aaa", "items":["e","ggd","gddfg"]},
  {"Category":"aaaaa", "items":["e5","ggghd","gg"]
  },
];
  return (
<>
<div className="App">
<h1>react nested map function</h1>
<ul>
  {countriesWithCities.map((countryObj, index)=>(
    <li key={index}>
      <b>{countryObj.country}</b>
      <ul>
        {countryObj.cities.map((city, cityIndex)=>(
          <li key={cityIndex}>{city}</li>
        ))}
      </ul>
    </li>
  ))}
</ul>
{/* eg 2 */}
<Container>
  <Row>
    <Col md={{span:6, offset:3}}>
    <Table className='table'>
  <thead>
    <tr>
      <th>Category</th>
      <th>Items</th>
    </tr>
  </thead>
  <tbody>
    {nestedData.map((data,index)=>(
      <tr key={index}>
        <td>{data.Category}</td>
        <td>
          <ul className="list-unstyled">
            {data.items.map((item,itemsIndex)=>(
              <li key={itemsIndex}>{item}</li>
            ))}
          </ul>
        </td>
      </tr>
    ))}
  </tbody>
    </Table>
    </Col>
  </Row>
</Container>
</div>
</>
  )
}
