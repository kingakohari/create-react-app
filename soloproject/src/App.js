import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React <Button />
        </p>
        
      </header>
    </div>
  );
}

export default App;
