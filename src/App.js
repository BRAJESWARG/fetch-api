import logo from './logo.svg';
import './App.css';
import FetchAPI from './Components/fetchAPI';
import { useGlobalContext } from './Components/contextAPI';

function App() {
  const data = useGlobalContext();
  return (
    <div className="App">
      <div>My name is {data} </div>
      <FetchAPI />
    </div>
  );
}

export default App;
