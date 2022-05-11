import React  from 'react';
import './App.css';
import { ProductListView } from './components/productListView/ProductListView';
import { ProductView } from './components/productView/ProductVIew';

function App() {

  return (
    <div className='App'>
       <ProductListView />
       <ProductView />
    </div>
    
  );
}

export default App;
