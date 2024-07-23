import './App.css'; 
import HomePage from './Pages/HomePage';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
function App() {
  return (
    <>
  <Provider store={store}>
    <HomePage />
  </Provider>
    </>
  );
}

export default App;
