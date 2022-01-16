import './App.css';
import Home from './screens/Home.js';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

function App() {
  return ( 
    <Provider store={store}> 
      <Home /> 
    </Provider>  
  );
}

export default App;
