import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';


function App() {

  //var codigoHTML = <h1>Titulo</h1> // Podemos guardar html en una variable

  const [linea1, setLinea1] = useState('')
  const [imagen, setImagen] = useState('')

  function renderizarLinea1(evento) {
    setLinea1(evento.target.value)  // Setteamos el value de lo que tenga el input text a la var linea1
  }

  function renderizarImg(evento) {
    setImagen(evento.target.value)  // Setamos el value img1 o img2 del html
  }

  const exportarMeme = function exportar() {
    html2canvas(document.querySelector("#div_meme_id")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <select onChange={renderizarImg}>
        <option value="img1">Meme 1</option>
        <option value="img2">Meme 2</option>
      </select> <br />

      <input onChange={renderizarLinea1} type='text' /> <br />
      <button onClick={exportarMeme}>Exportar</button>

      <div className='memediv' id='div_meme_id'>
        <span>{linea1}</span> <br />
        <img src={"/img/" + imagen + ".jpg"} alt='Meme' />
      </div>

    </div>
  );
}

export default App;
