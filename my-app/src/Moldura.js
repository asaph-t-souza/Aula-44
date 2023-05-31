import './App.css';

export default function Moldura({children}) {

    function clickAlert(){
        alert("Você clicou dentro moldura")
    }

    return(
        <div onClick={clickAlert} className='moldura'>
            {children}
        </div>
    );
}