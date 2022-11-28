import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [userInput, setUserInput] = useState({skill: "", level: ""});
  const [devSkills, setDevSkills] = useState([{skill:"JavaScript", level: 5}]);

  console.log(userInput)

  const handleChange = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setDevSkills([...devSkills, userInput])
  }
  console.log("DevSKills:", devSkills)


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
      
        <label>
          <span>SKILL</span>
          <input 
            onChange={handleChange}
            type="text" 
            name="skill"
            value={userInput.skill} 
          />
        </label>
        <label>
          <span>LEVEL</span>
          <select
            onChange={handleChange}
            name="level"
            value={userInput.level}
          >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
          </select>
          </label>
        <button onClick={handleSubmit}>Add Skill</button>
      

      
    </div>
  );
}

export default App;
