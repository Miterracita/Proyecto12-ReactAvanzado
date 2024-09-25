import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
