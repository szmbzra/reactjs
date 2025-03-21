import React from 'react';
import "./App.css";
import {Button, Alert} from 'react-bootstrap';


export default function App() {
  return (
<>
<div className="App">
<h1>Install boostrap in react</h1>
<Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

</div>
<Alert variant="success">
          This is a alert—check it out!
        </Alert>
</>
  )
}
