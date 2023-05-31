import { useState } from 'react';
import './App.css';
import MyButton, {ButtonCounter, SharedCounter} from './MyButton';
import Moldura from './Moldura';

function App() {

  let name = "Usuario";

  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter(counter + 1);
  }

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

      <SharedCounter count={counter} handleCounterProps={handleCounter}/>
      <SharedCounter count={counter} handleCounterProps={handleCounter}/>
      <SharedCounter count={counter} handleCounterProps={handleCounter}/>
      <SharedCounter count={counter} handleCounterProps={handleCounter}/>
      <SharedCounter count={counter} handleCounterProps={handleCounter}/>

      <Moldura>
        <h1>Dentro da Moldura</h1>
        <ButtonCounter/>
        <ButtonCounter/>
      </Moldura>


    </>
  );
}

export default App;
