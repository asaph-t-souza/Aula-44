import { useState } from 'react';
import './App.css';
import MyButton, {ButtonCounter, SharedCounter} from './MyButton';

function App() {

  let name = "Usuario";

  const [counter, setCounter] = useState(0);

  return (
    <>
      <p className="teste"> {name} </p>

      <MyButton name={true}/>
      <MyButton />

      <br/>
      <p> Contadores individuais </p>

      <ButtonCounter/>
      <ButtonCounter/>

      <br/>
      <p> Contadores compartilhados </p>

      <SharedCounter count={counter}/>
      <SharedCounter count={counter}/>

    </>
  );
}

export default App;
