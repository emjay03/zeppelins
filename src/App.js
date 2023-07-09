
import Footer from './Components/Footer';
import Hero from './Components/Hero';
 import Showcase from './Components/Showcase';
 import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  </Router>
  );
}
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Showcase />
      <Footer />
    </div>
  );
};

export default App;
