import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [userInput, setUserInput] = useState({skill: "", level: ""});
  const [devSkills, setDevSkills] = useState([{skill:"JavaScript", level: 5}]);


  return (
    <div className="App">
      <h1>DEV SKILLS</h1>
      <hr />
        {
          devSkills.map(s => {
            return (
              <div>
                <p>{s.skill}<span>{s.level}</span></p>
              </div>
            )
          })
        }
      <hr />
      <form>
        <label>
          <span>SKILL</span>
          <input type="text" name="skill" />
        </label>
        <label>
          <span>LEVEL</span>
          <input type="text" name="level"/>
        </label>
      </form>

      
    </div>
  );
}

export default App;
