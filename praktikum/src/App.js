import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat Datang di website saya.<br />
          Saya sedang belajar ReactJS.
        </p>
        <a
          className="App-link"
          href="https://github.com/Agus86-cell/assigment-deploy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link Github 
        </a>
      </header>
    </div>
  );
}

export default App;
