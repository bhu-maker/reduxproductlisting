import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      
      <Route path="/" exact element={<ProductListing/>}></Route>
      <Route path="/product/:productid" exact element={<ProductDetail/>}></Route>
      <Route > 404 not found</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
