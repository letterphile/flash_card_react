import logo from './logo.svg';
import './App.css';
import Quizlet from './Components/Quizlet';
import DarkModeToggle from './Components/DarkModeToggle';
import Button from './Components/VerdictButton';
import ButtonNo from './Components/VerdictButtonNo';
import './style.scss';
function App() {
  return (
    <div className="App">
      <center>
        <DarkModeToggle/>
        <Quizlet/>
        <Button/>
        <ButtonNo/>
        </center>
          </div>
  );
}

export default App;
