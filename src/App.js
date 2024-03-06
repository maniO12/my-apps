import React,{useState} from 'react';
import Alert from './components/Alert';
const App = () => {
  const [alert,setAlert] = useState(false);
  const submitHandler = (e) => {
     setAlert(true);
  }
  return (
    <div>
        <button onClick={submitHandler}>Get Alert</button>
        {alert ? <Alert /> : "Get Alert by clicking button"}
    </div>
  )
}

export default App
