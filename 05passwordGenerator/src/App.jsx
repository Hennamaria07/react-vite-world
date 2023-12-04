import { useCallback, useEffect, useRef, useState } from 'react'
import { Container, NavDropdown, Navbar, Nav, Form, Row , Col, Button} from 'react-bootstrap'
function App() {
const [length, setLength] = useState(8);
const [number, setNumber] = useState(false);
const [character, setCharacter] = useState(false);
const [password, setPassword] = useState('');
//USE REFERENCE
const passwordRef = useRef(null);

//USECALLBACK IS USED FOR OPTIMIZATION 
//IT SIMPLY MEMORIES THE CODE
const generatedPassword = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(number) {
    str += "0123456789";
  }
  if(character) {
    str += "@#$%^&*()|?/"
  }
  for(let i = 1; i <= length ; i++) {
    const char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
} , [length, number, character, setPassword]);
useEffect (() => {
  generatedPassword();
}, [length, number, character, generatedPassword]);

const handlecopyClipboard = useCallback (() => {
  //for copy effect
  //?. -----> optional select
  passwordRef.current?.select(); 
  // passwordRef.current?.setSelectionRange(0,3);
  window.navigator.clipboard.writeText(password);
}, [password]);
  return (
    <>
    <Container className='w-75 mt-5' style={{backdropFilter: 'blur(5px)', backgroundColor: '#3d405b', WebkitBackdropFilter: 'blur(5px)'}}>
      <Row className='d-flex justify-content-center'>
        <Col md={5}>
        <h1 className='py-2 text-center'>Password Generator</h1>
        <div className='d-flex'>
        <Form.Control type="text" ref={passwordRef} value={password} placeholder="password" className='py-2' />
        <Button variant='info' onClick={handlecopyClipboard} className='ms-2'>Copy</Button>
        </div>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col md={2} className='d-flex my-2'>
        <Form.Range min={8} max={20} onChange={(e) => setLength(e.target.value)} /> <Form.Label className='px-2'>{`length:${length}`}</Form.Label>
        </Col>
        <Col md={1} className='d-flex my-2'>
        <Form.Check
            defaultChecked={number}
            type='checkbox'
            onChange={() => setNumber((prev) => !prev)}  //false to true or true to false
          />
          <Form.Label className='px-2'>Number</Form.Label>
        </Col>
        <Col md={1} className='d-flex my-2'>
        <Form.Check
            defaultChecked={character}
            type='checkbox'
            onChange={() => setCharacter((prev) => !prev)}  //false to true or true to false
          />
          <Form.Label className='px-2'>Character</Form.Label>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
