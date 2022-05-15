import React from 'react';
import {Button} from './elements/Button';
import {Container} from './components/UI/Container';
import Home from './components/UI/Home';
import Navbar from './components/UI/Navbar';
import About from './components/UI/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
            <Button> Click Here! </Button>
        </BrowserRouter>
    </Container>
  );
}

export default App;
