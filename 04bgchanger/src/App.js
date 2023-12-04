import { Button } from "react-bootstrap";
import { useState } from "react";


function App() {
  const [color, setColor] = useState('');
  return (
    <div className={`bg-${color} d-flex flex-wrap justify-content-center align-items-end`}  style={{height: '100vh'}}>
      <div className="my-5 p-2 rounded-5" style={{backgroundColor: '#B8B8D1'}}>
      <Button variant="primary" onClick={() => setColor('primary')} className="rounded-5 m-2">Primary</Button>
      <Button variant="secondary" onClick={() => setColor('secondary')} className="rounded-5 m-2">Secondary</Button>
      <Button variant="success" onClick={() => setColor('success')} className="rounded-5 m-2">Success</Button>
      <Button variant="warning" onClick={() => setColor('warning')} className="rounded-5 m-2">Warning</Button>
      <Button variant="danger" onClick={() => setColor('danger')} className="rounded-5 m-2">Danger</Button>
      <Button variant="info" onClick={() => setColor('info')} className="rounded-5 m-2">Info</Button>
      <Button variant="light" onClick={() => setColor('light')} className="rounded-5 m-2">Light</Button>
      <Button variant="dark" onClick={() => setColor('dark')} className="rounded-5 m-2">Dark</Button>
      </div>
    </div>
  );
}

export default App;
