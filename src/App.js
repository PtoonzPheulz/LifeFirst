import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donate from './Components/Donate';
import Involved from './Components/Involved';
import Guide from './Components/Guide';
import About from './Components/About';
import Request from './Components/Request';

function App() {
  return (
    <div className="App">
     <Donate/>
      <Request/>
      <Involved/>
      <Guide/>
      <About/>
    </div>
  );
}

export default App;
