import './App.css';
import ProductCatalog from './catalog/components/ProductScreen';
import Header from './common/Header';


function App() {
  return (
    <div>
      <Header/>
      <div className='container-app'>
        <ProductCatalog />
      </div>
    </div>

  );
}

export default App;
