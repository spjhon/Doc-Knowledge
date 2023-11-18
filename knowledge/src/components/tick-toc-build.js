import PropTypes from 'prop-types';
import { useState } from 'react';

//Esta funcion square lo que es, es un "template", un componente predefinido el cual esta fabricado para recibir los props al momento
//de cuando se llama, y cuando se llama ejecuta las acciones con los props enviados, justo como una funcion normal que se manda
//a llamar. Un componente es una funcion cuyos parametros son llamados props y que retorna HTML.
function Square({ value  }) {

  
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Board() {
  return (
    <>
    <div className="board-row">
      <Square value={1}></Square>
      <Square value={2}/>
      <Square value={3}/>
    </div>
    <div className="board-row">
      <Square value={4}/>
      <Square value={5}/>
      <Square value={6}/>
    </div>
    <div className="board-row">
      <Square value={7}/>
      <Square value={8}/>
      <Square value={9}/>
    </div>
  </>
  );
}
