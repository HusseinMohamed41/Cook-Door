import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Menu from './Components/Menu'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  )
}

export default App
