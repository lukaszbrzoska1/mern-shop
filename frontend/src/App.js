import { Container } from 'react-bootstrap';

import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          <Route exact path='/product/:id' children={<ProductScreen />} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
