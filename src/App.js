import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <>
      <Routes>
        <Route path="/website" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/website/about" element={<About />} />
          <Route path="/website/contact" element={<Contact />} />
          <Route path="/website/skills" element={<Skills />} />
          <Route path="/website/hobbies" element={<Hobbies />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
