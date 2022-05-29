
import './App.css';
import First from './components/First';
import Fourth from './components/Fourth';
import Navbar from './components/Navbar';
import Second from './components/Second';
import Undernav from './components/Undernav';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <hr style={{borderTop: '1px solid lightgrey'}}/>
     <Undernav/>
     <hr style={{borderTop: '1px thin lightgrey'}}/>
     <First/>
     <Second/>
     <Fourth/>
    </div>
  );
}

export default App;
