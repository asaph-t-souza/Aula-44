import {useState} from 'react';

export default function MyButton({name}) {

    function handleClick() {
        alert(name + " clicou no botão");
    }

    return(
      <button onClick={handleClick}> Click Me! </button>
    );
}

export function ButtonCounter() {

    const [count, setCount] = useState(0);

    function handleCounter() {
        setCount(count + 1);
    }

    return(
        <button onClick={handleCounter}> Contador: {count} </button>
    );

}