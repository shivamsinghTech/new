// import logo from './logo.svg';
// import './App.css';

import CreateData  from './redux/components/CreateData';
import EditProduct from './redux/components/EditProduct';

import {BrowserRouter,Switch, Route} from 'react-router-dom';


function App() {
  return (

<BrowserRouter>
    <div className="App">

      
<Switch>
          <Route exact path="/" component={CreateData} />

          {/* in given path we get our EditProduct Component */}

          <Route exact path="/updateProduct/editID/:id" component={EditProduct} />

  </Switch>
    
    </div>
    </BrowserRouter> 

  );
}

export default App;