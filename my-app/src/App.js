import './App.css';
import MyButton, {ButtonCounter} from './MyButton';

function App() {

  let name = "Asaph";
  const myBoolean = true;

  const compras = ["Repolho", "Tomate", "Cenoura", "Batata"];

  const listaCompras = compras.map( item => 
    <li key={item}>
      {item}
    </li>
  );

  if(myBoolean){
    name = "João";
  } else{
    name = "Maria";
  }

  return (
    <>
      <p className="teste"> {name} </p>
      <MyButton name={true}/>
      <MyButton />
      <br/>
      <ButtonCounter/>
      <ButtonCounter/>


      {myBoolean ? (<h1>Verdadeiro</h1>) : (<h1>Falso</h1>)}

      <ul>
        {listaCompras}
      </ul>
    </>
  );
}

export default App;
