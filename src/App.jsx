import { useState } from 'react'

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const calculatelove=()=>{
    if(!name1 || !name2){
      setResult("enter the names");
      return;
    }
    const percentage=Math.floor(Math.random()*100)+1;
    setResult(`love between ${name1} and ${name2} is ${percentage}%`);
  };
  return(
    <div>
      <h1>love calculator</h1>
      <input type="text"
      placeholder='Name 1'
      value={name1}
      onChange={(e)=>setName1(e.target.value)} 
      />
      <br />
      
      <h1>love calculator</h1>
      <input type="text"
      placeholder='Name 2'
      value={name2}
      onChange={(e)=>setName2(e.target.value)} 
      />
      <br />
      <button onClick={calculatelove}>calculate</button>
      <h2>{result}</h2>

    </div>
  )
  
}

export default App
