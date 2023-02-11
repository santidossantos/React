import './App.css';
import { useState } from 'react';


function App() {

  //var codigoHTML = <h1>Titulo</h1> // Podemos guardar html en una variable

  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')

  function cambio() {
    debugger;
    alert()
  }

  return (
    <div className="App">

      <select>
        <option value="meme1">Meme 1</option>
        <option value="meme2">Meme 2</option>
        <option value="meme3">Meme 3</option>
      </select> <br />
     
      <input onChange={cambio} type='text'/> <br />
      <input type='text'/> <br />
      <button>Exportar</button>

      <div>
        <span>{linea1}</span> <br />
        <span>{linea2}</span> <br />
        <img src='' alt='Meme'/>
      </div>

    </div>
  );
}

export default App;
