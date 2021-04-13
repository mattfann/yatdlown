import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList.js';
import SaveButton from './components/SaveButton.js';
import InputBox from './components/InputBox.js';
import ClearButton from './components/ClearButton.js';
import List from './components/listComponent.js'
import NameForm from './components/1.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
        {/* <ClearButton />
        <NameForm /> */}
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
